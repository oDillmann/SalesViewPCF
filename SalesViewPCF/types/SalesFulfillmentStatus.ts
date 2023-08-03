import { axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus } from "../cds-generated/enums/axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus"

export type SalesFulfillmentStatus = {
  id: string,
  esd: Date,
  title: string,
  department: { [department: string]: axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus }
}
