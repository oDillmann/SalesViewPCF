import { axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus } from "../cds-generated/enums/axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus"
import { opportunity_z2t_opportunityphase } from "../cds-generated/enums/opportunity_z2t_opportunityphase"
import { z2t_type } from "../cds-generated/enums/z2t_type"

export type SalesFulfillmentStatus = {
  id: string,
  title?: string, // customer name
  phase?: string
  warehouse?: string,
  model?: string,
  OpType?: z2t_type,
  DeliveryDate?: Date,
  isDateConfirmed: boolean,
  salesResponsible?: string,
  department: { [department: string]: axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus }
}
