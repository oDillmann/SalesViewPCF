import { makeAutoObservable } from "mobx";
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
  public errorMessage?: string;
  public Departments: string[];
  public SFS: SalesFulfillmentStatus[];
  public PCFerror?: string;
  public isLoading: boolean = true;
  public forceUpdate: () => void;
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
    this.isLoading = true;
    await this.fetchData();
    this.isLoading = false;
  }

  public async fetchData(): Promise<void> {
    try {
      const { salesFulfillmentStatus: SFS, departments } = await this.cdsService.fetchData()
      this.SFS = SFS;
      this.Departments = departments;
    } catch (e: any) {
      console.log(e);
      this.setError(e.message);
    }
  }

  /**
   * @description gets the SFS that have their esd in the upcoming week
   */
  get thisWeek(): SalesFulfillmentStatus[] {
    return this.SFS.filter((sfs) => {
      const esd = new Date(sfs.esd);
      const today = new Date();
      const nextWeek = new Date(today.setDate(today.getDate() + 7));
      return esd >= today && esd <= nextWeek;
    });
  }

  get nextWeek(): SalesFulfillmentStatus[] {
    return this.SFS.filter((sfs) => {
      const esd = new Date(sfs.esd);
      const today = new Date();
      const nextWeek = new Date(today.setDate(today.getDate() + 7));
      const nextNextWeek = new Date(today.setDate(today.getDate() + 7));
      return esd >= nextWeek && esd <= nextNextWeek;
    });
  }

  get beyond(): SalesFulfillmentStatus[] {
    return this.SFS.filter((sfs) => {
      const esd = new Date(sfs.esd);
      const today = new Date();
      const nextWeek = new Date(today.setDate(today.getDate() + 14));
      return esd > nextWeek;
    });
  }
}
