import { makeAutoObservable } from "mobx";
import CdsService from "../cdsService/CdsService";
import { IInputs } from "../generated/ManifestTypes";
import ServiceProvider from "../ServiceProvider";

export default class SalesViewVM {
  public static readonly serviceName = "SalesViewVM";
  public serviceProvider: ServiceProvider;
  public context: ComponentFramework.Context<IInputs>;
  public notifyOutputChanged: () => void;
  public cdsService: CdsService;
  public EntityId: string;
  public errorMessage?: string;
  public PCFerror?: string;
  public isLoading: boolean = true;
  public forceUpdate: () => void;
  saveHandlerAdded: any;

  constructor(serviceProvider: ServiceProvider, EntityId: string) {
    this.serviceProvider = serviceProvider;
    this.context = serviceProvider.get("context");
    this.notifyOutputChanged = serviceProvider.get("notifyOutputChanged");
    this.cdsService = serviceProvider.get(CdsService.serviceName);
    this.EntityId = EntityId;
    if (
      this.EntityId == undefined ||
      this.EntityId == "" ||
      this.EntityId == null
    ) {
      this.PCFerror = "Save the record before editing.";
      this.isLoading = false;
    }
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
    if (
      this.EntityId == undefined ||
      this.EntityId == "" ||
      this.EntityId == null
    ) {
      this.setAppError("Save the record before editing.");
      this.isLoading = false;
      return false;
    }
    this.PCFerror = undefined;
    await this.fetchData();
    this.isLoading = false;
  }

  public async fetchData(): Promise<void> {
    try {
      throw new Error('Not implemented')
    } catch (e: any) {
      console.log(e);
      this.setError(e.message);
    }
  }
}
