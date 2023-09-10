import { makeAutoObservable } from "mobx";
import { axa_SalesFulfillmentStatusAttributes } from "../cds-generated/entities/axa_SalesFulfillmentStatus";
import { axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase } from "../cds-generated/enums/axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase";
import CdsService from "../cdsService/CdsService";
import { IInputs } from "../generated/ManifestTypes";
import ServiceProvider from "../ServiceProvider";
import { SalesFulfillmentStatus } from "../types/SalesFulfillmentStatus";

export default class SalesViewVM {
  public static readonly serviceName = "SalesViewVM";
  public serviceProvider: ServiceProvider;
  public context: ComponentFramework.Context<IInputs>;
  public notifyOutputChanged: () => void;
  public cdsService: CdsService;
  public errorMessage?: string = undefined
  public Departments: string[] = [];
  private ControlSFS: Record<string, SalesFulfillmentStatus> = {};
  private ViewSFS: SalesFulfillmentStatus[] = [];
  public SFS: SalesFulfillmentStatus[] = [];
  public PCFerror?: string = undefined;
  private isControlLoading: boolean = true;
  public isViewLoading: boolean = true;
  get isLoading() { return this.isControlLoading || this.isViewLoading; }
  public forceUpdate: () => void;
  private viewType: 'Phase' | 'Date' = 'Date'; get ViewType() { return this.viewType; }; set ViewType(value) { this.viewType = value; }
  saveHandlerAdded: any;

  constructor(serviceProvider: ServiceProvider) {
    this.serviceProvider = serviceProvider;
    this.context = serviceProvider.get("context");
    this.notifyOutputChanged = serviceProvider.get("notifyOutputChanged");
    this.cdsService = serviceProvider.get(CdsService.serviceName);
    makeAutoObservable(this);
  }

  public setAppError(errorMessage: string | undefined) {
    this.PCFerror = errorMessage;
    if (this.forceUpdate) this.forceUpdate();
  }

  public setError(errorMessage: string | undefined) {
    this.errorMessage = errorMessage;
    if (this.forceUpdate) this.forceUpdate();
  }

  public async init() {
    this.isControlLoading = true;
    await this.fetchData();
    this.isControlLoading = false;
    if (!this.isViewLoading) {
      this.mergeSFS();
    }
  }

  public async fetchData(): Promise<void> {
    try {
      const { salesFulfillmentStatus: SFS, departments } = await this.cdsService.fetchData()
      this.ControlSFS = SFS;
      this.Departments = departments;
    } catch (e: any) {
      console.log(e);
      this.setError(e.message);
    }
  }

  /**
   * @description gets the SFS that are past their due
   */
  get pastDue(): SalesFulfillmentStatus[] {
    return this.SFS.filter((sfs) => {
      if (!sfs.esd) return false;
      const esd = new Date(sfs.esd);
      const today = new Date();
      return esd < today;
    });
  }

  /**
   * @description gets the SFS that have their esd in the upcoming week
   * @returns SalesFulfillmentStatus[]
   */
  get thisWeek(): SalesFulfillmentStatus[] {
    return this.SFS.filter((sfs) => {
      if (!sfs.esd) return false;
      const esd = new Date(sfs.esd);
      const today = new Date();
      const nextWeek = new Date();
      nextWeek.setDate(today.getDate() + 7);
      return esd >= today && esd <= nextWeek;
    });
  }

  /**
   * @description gets the SFS that have their esd in the upcoming week
   * @returns SalesFulfillmentStatus[]
   */
  get nextWeek(): SalesFulfillmentStatus[] {
    return this.SFS.filter((sfs) => {
      if (!sfs.esd) return false;
      const esd = new Date(sfs.esd);
      const nextWeek = new Date();
      const twoWeeks = new Date();
      nextWeek.setDate(nextWeek.getDate() + 7);
      twoWeeks.setDate(twoWeeks.getDate() + 14);
      return esd >= nextWeek && esd <= twoWeeks;
    });
  }

  /**
   * @description gets the SFS that have their esd beyond the upcoming week
   * @returns SalesFulfillmentStatus[]
   */
  get beyond(): SalesFulfillmentStatus[] {
    return this.SFS.filter((sfs) => {
      if (!sfs.esd) return false;
      const esd = new Date(sfs.esd);
      const twoWeeks = new Date();
      twoWeeks.setDate(twoWeeks.getDate() + 14);
      return esd > twoWeeks;
    });
  }

  get pastDueByMonth(): Record<string, SalesFulfillmentStatus[]> {
    const today = new Date();

    return this.SFS.reduce((acc, sfs) => {
      if (!sfs.esd) return acc;

      const esd = new Date(sfs.esd);

      // Exclude past due items
      if (esd > today) return acc;


      const month = esd.toLocaleString('default', { month: 'long' });
      const year = esd.getFullYear();
      const monthYear = `${month}, ${year}`;

      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }

      acc[monthYear].push(sfs);
      return acc;
    }, {} as Record<string, SalesFulfillmentStatus[]>);

  }

  get groupedByMonth(): Record<string, SalesFulfillmentStatus[]> {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    return this.SFS.reduce((acc, sfs) => {
      if (!sfs.esd) return acc;

      const esd = new Date(sfs.esd);

      // Exclude past due items
      if (esd < today) return acc;

      // Exclude this week's items
      if (esd >= today && esd <= nextWeek) return acc;

      const month = esd.toLocaleString('default', { month: 'long' });
      const year = esd.getFullYear();
      const monthYear = `${month}, ${year}`;

      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }

      acc[monthYear].push(sfs);
      return acc;
    }, {} as Record<string, SalesFulfillmentStatus[]>);
  }

  get groupedByPhase(): Record<axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase, SalesFulfillmentStatus[]> {
    const grouped = this.SFS.reduce((acc, sfs) => {
      const phase = sfs.phase ?? 'No Phase';
      if (!acc[phase]) {
        acc[phase] = [];
      }
      acc[phase].push(sfs);
      return acc;
    }, {} as Record<axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase, SalesFulfillmentStatus[]>)
    //order the phases from Phase I to Phase V and lastly no phase
    const orderedGrouped = Object.keys(grouped).sort((a, b) => {
      if (a === 'No Phase') return 1;
      if (b === 'No Phase') return -1;
      return a.localeCompare(b);
    }).reduce((acc, key) => {
      const phase = key as any as axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase;
      acc[phase] = grouped[phase];
      return acc;
    }, {} as Record<axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase, SalesFulfillmentStatus[]>);
    return orderedGrouped;
  }

  /**
   * @description gets the SFS that dont have an esd
   * @returns SalesFulfillmentStatus[]
   */
  get noEsd(): SalesFulfillmentStatus[] { return this.SFS.filter((sfs) => !sfs.esd); }


  public formatViewRecords(
    records: {
      [id: string]: ComponentFramework.PropertyHelper.DataSetApi.EntityRecord
    }): SalesFulfillmentStatus[] {
    const formattedRecords: SalesFulfillmentStatus[] = [];
    for (const recordId in records) {
      const record = records[recordId];
      const formattedRecord = this.formatViewRecord(record, recordId);
      formattedRecords.push(formattedRecord);
    }

    this.ViewSFS = formattedRecords
    if (!this.isControlLoading) this.mergeSFS();
    return formattedRecords;
  }

  private formatViewRecord(record: ComponentFramework.PropertyHelper.DataSetApi.EntityRecord, recordId: string): SalesFulfillmentStatus {
    const id = recordId;
    const title = record.getFormattedValue(axa_SalesFulfillmentStatusAttributes.axa_Description);
    const phase = record.getFormattedValue(axa_SalesFulfillmentStatusAttributes.axa_CurrentPhase) as any as axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase;
    let esd = record.getFormattedValue(axa_SalesFulfillmentStatusAttributes.axa_ESD) ? new Date(record.getFormattedValue(axa_SalesFulfillmentStatusAttributes.axa_ESD)) : undefined;
    // @ts-ignore
    const fullnameAttr = Object.keys(record._record.fields).find((key) => key.endsWith('fullname'))
    // @ts-ignore
    const personResponsible = record._record.fields[fullnameAttr]?.innerValue?.value

    return { id, title, phase, esd: esd, personResponsible, department: {} }
  }

  /** 
   * This function merges the control SFS with the view SFS
   * because the View SFS dont have departments, i need to get the departments myself
   * so i do that and then merge them
   */
  private mergeSFS() {
    this.SFS = this.ViewSFS.map((viewSFS) => {
      const controlSFS = this.ControlSFS[viewSFS.id];
      if (!controlSFS) return viewSFS;
      const result = { ...viewSFS, department: controlSFS.department }
      return result
    })
  }
}
