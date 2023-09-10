import { axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus } from "../cds-generated/enums/axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus"
import { axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase } from "../cds-generated/enums/axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase"

export type SalesFulfillmentStatus = {
  id: string,
  esd?: Date,
  personResponsible: string,
  phase: axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase,
  title: string,
  department: { [department: string]: axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus }
}
