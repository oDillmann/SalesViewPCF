import { axa_SalesFulfillmentStatusAttributes } from "../cds-generated/entities/axa_SalesFulfillmentStatus"
import { axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus } from "../cds-generated/enums/axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus"
import { axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase } from "../cds-generated/enums/axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_currentphase"
import { crf08_nmclocation } from "../cds-generated/enums/crf08_nmclocation"

export type SalesFulfillmentStatus = {
  id: string,
  DeliveryDate?: Date,
  personResponsible?: string,
  phase?: string
  title?: string,
  location?: string,
  model?: string,
  department: { [department: string]: axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus }
}
