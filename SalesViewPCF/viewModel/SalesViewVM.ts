import { makeAutoObservable } from "mobx";
import { axa_SalesFulfillmentStatusAttributes } from "../cds-generated/entities/axa_SalesFulfillmentStatus";
import { axa_cwsstatus } from "../cds-generated/enums/axa_cwsstatus";
import { z2t_type } from "../cds-generated/enums/z2t_type";
import CdsService from "../cdsService/CdsService";
import { IInputs } from "../generated/ManifestTypes";
import ServiceProvider from "../ServiceProvider";
import { SalesFulfillmentStatus } from "../types/SalesFulfillmentStatus";

export enum ViewType { 'Date', 'Sales Responsible', 'Warehouse', 'Type of Sale' }

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
  private viewType: ViewType = ViewType.Date; get ViewType() { return this.viewType; } set ViewType(value) { this.viewType = value; }
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

  // Helper function for grouping
  private groupBy<SFS, Prop extends string | undefined>(
    data: SFS[],
    propExtractor: (item: SFS) => Prop,
    emptyPropValue: string
  ): Record<string, SFS[]> {
    return data.reduce((acc, item) => {
      const prop = propExtractor(item) ?? emptyPropValue;
      if (!acc[prop]) { acc[prop] = []; }
      acc[prop].push(item);
      return acc;
    }, {} as Record<string, SFS[]>);
  }

  // Helper function for sorting
  private sortByKeys<SFS>(grouped: Record<string, SFS[]>, comparator?: (a: string, b: string) => number) {
    const orderedKeys = Object.keys(grouped).sort(comparator);
    return orderedKeys.reduce((acc, key) => {
      acc[key] = grouped[key];
      return acc;
    }, {} as Record<string, SFS[]>);
  }

  // Date filter helper
  private dateFilter<SFS>(data: SFS[], dateExtractor: (item: SFS) => Date | null, dateCompare: (date: Date) => boolean) {
    return data.filter((item) => {
      const date = dateExtractor(item);
      const res = date && dateCompare(date);
      return res;
    });
  }

  get groupedByPhase() {
    const grouped = this.groupBy(this.SFS, sfs => sfs.phase, "No Phase");
    return this.sortByKeys(grouped, (a, b) => a === 'No Phase' ? 1 : b === 'No Phase' ? -1 : a.localeCompare(b));
  }

  get groupedByWarehouse() {
    const grouped = this.groupBy(this.SFS, sfs => sfs.warehouse, "No Warehouse");
    return this.sortByKeys(grouped, (a, b) => a === 'No Warehouse' ? 1 : b === 'No Warehouse' ? -1 : a.localeCompare(b));
  }

  get groupedByType() {
    // some copy paste magic for the .replace(/([a-z])([A-Z])/g, '$1 $2') part, wouldn't hurt anyone right? RIGHT?
    // 'fast forward a few months' - me, 2024, i have no idea what this does, it ... replaces ?? 
    const grouped = this.groupBy(this.SFS, sfs => { return sfs.OpType ? z2t_type[sfs.OpType].replace(/([a-z])([A-Z])/g, '$1 $2') : undefined }, "No Type");
    return this.sortByKeys(grouped, (a, b) => a === 'No Type' ? 1 : b === 'No Type' ? -1 : a.localeCompare(b));
  }

  get groupBySalesResponsible() {
    const grouped = this.groupBy(this.SFS, sfs => sfs.salesResponsible, "No Sales Responsible");
    return this.sortByKeys(grouped, (a, b) => a === 'No Sales Responsible' ? 1 : b === 'No Sales Responsible' ? -1 : a.localeCompare(b));
  }

  // Helper function to add date offset
  private addDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

  /**
   * @description gets the SFS that are past their due
   */
  get pastDue() {
    return this.dateFilter(this.SFS, sfs => sfs.DeliveryDate ? new Date(sfs.DeliveryDate) : null, date => date < new Date());
  }

  /**
   * @description gets the SFS that have their esd in the current week
   * @returns SalesFulfillmentStatus[]
   */
  get thisWeek() {
    const today = new Date();
    const weekEnd = this.addDays(today, 7);
    return this.dateFilter(this.SFS, sfs => sfs.DeliveryDate ? new Date(sfs.DeliveryDate) : null, date => date >= today && date <= weekEnd);
  }

  /**
   * @description gets the SFS that have their esd in the upcoming week
   * @returns SalesFulfillmentStatus[]
   */
  get nextWeek() {
    const nextWeekStart = this.addDays(new Date(), 7);
    const nextWeekEnd = this.addDays(new Date(), 14);
    return this.dateFilter(this.SFS, sfs => sfs.DeliveryDate ? new Date(sfs.DeliveryDate) : null, date => date >= nextWeekStart && date <= nextWeekEnd);
  }

  /**
   * @description gets the SFS that have their esd beyond 2 weeks
   * @returns SalesFulfillmentStatus[]
   */
  get beyond() {
    const twoWeeks = this.addDays(new Date(), 14);
    return this.dateFilter(this.SFS, sfs => sfs.DeliveryDate ? new Date(sfs.DeliveryDate) : null, date => date > twoWeeks);
  }


  /**
   * @description gets the SFS that have their esd beyond upcoming week
   * @returns SalesFulfillmentStatus[]
   */
  get upcoming() {
    const twoWeeks = this.addDays(new Date(), 14);
    return this.dateFilter(this.SFS, sfs => sfs.DeliveryDate ? new Date(sfs.DeliveryDate) : null, date => date > twoWeeks);
  }

  // Grouping by month
  get pastDueByMonth() {
    const grouped = this.groupBy(this.pastDue,
      sfs => `${sfs.DeliveryDate?.toLocaleString('default', { month: 'long' })}, ${sfs.DeliveryDate?.getFullYear()}`,
      "No Date");
    return grouped;
  }

  get groupedByMonth() {
    const grouped = this.groupBy(this.upcoming,
      sfs => `${sfs.DeliveryDate?.toLocaleString('default', { month: 'long' })}, ${sfs.DeliveryDate?.getFullYear()}`,
      "No Date"
    );
    return grouped;
  }

  /**
   * @description gets the SFS that dont have an esd
   * @returns SalesFulfillmentStatus[]
   */
  get noEsd() {
    return this.SFS.filter((sfs) => !sfs.DeliveryDate);
  }

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
    const phase = record.getFormattedValue(axa_SalesFulfillmentStatusAttributes.axa_CurrentPhase);
    const typeOfSale = record.getFormattedValue(axa_SalesFulfillmentStatusAttributes.axa_TypeofSale);
    const warehouse = record.getFormattedValue(axa_SalesFulfillmentStatusAttributes.axa_Warehouse);
    const model = record.getFormattedValue(axa_SalesFulfillmentStatusAttributes.axa_Mocel);
    let estimatedDate = record.getFormattedValue(axa_SalesFulfillmentStatusAttributes.axa_ESD) ? new Date(record.getFormattedValue(axa_SalesFulfillmentStatusAttributes.axa_ESD)) : undefined;
    let confirmedDate = record.getFormattedValue(axa_SalesFulfillmentStatusAttributes.axa_ConfirmedDeliveryDate) ? new Date(record.getFormattedValue(axa_SalesFulfillmentStatusAttributes.axa_ConfirmedDeliveryDate)) : undefined;
    // @ts-ignore
    const fullnameAttr = Object.keys(record._record.fields).find((key) => key.endsWith('fullname'));
    // @ts-ignore
    const customerNameAttr = Object.keys(record._record.fields).find((key) => key.endsWith('.name'));
    // @ts-ignore
    const title = record._record.fields[customerNameAttr]?.innerValue?.value;
    // @ts-ignore
    const salesResponsible = record._record.fields[fullnameAttr]?.innerValue?.value;
    return {
      id,
      title,
      phase,
      typeOfSale,
      OpType: z2t_type.Sales,
      DeliveryDate: confirmedDate ?? estimatedDate,
      isDateConfirmed: !!confirmedDate,
      salesResponsible: salesResponsible,
      model,
      warehouse,
      requirements: { MDC: false, SA: false, DA: axa_cwsstatus.No, DSR: false, CWS: axa_cwsstatus.No },
      department: {},
    }
  }

  /** 
   * This function merges the control SFS with the view SFS
   * because the View SFS doesn't have departments, i need to get the departments myself as well as the OpType
   * so i do that and then merge them
   */
  private mergeSFS() {
    this.SFS = this.ViewSFS.map((viewSFS) => {
      const controlSFS = this.ControlSFS[viewSFS.id];
      if (!controlSFS) return viewSFS;
      return { ...viewSFS, department: controlSFS.department, OpType: controlSFS.OpType, requirements: controlSFS.requirements }
    }).sort((a, b) => {
      // sort by date 
      if (a.DeliveryDate && b.DeliveryDate) { return a.DeliveryDate.getTime() - b.DeliveryDate.getTime(); }
      return 0;
    })
  }
}
