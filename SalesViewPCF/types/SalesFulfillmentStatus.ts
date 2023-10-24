import { axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus } from "../cds-generated/enums/axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus"

export type SalesFulfillmentStatus = {
  id: string,
  title?: string, // customer name
  phase?: string
  warehouse?: string,
  model?: string,
  DeliveryDate?: Date,
  isDateConfirmed: boolean,
  salesResponsible?: string,
  department: { [department: string]: axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus }
}
