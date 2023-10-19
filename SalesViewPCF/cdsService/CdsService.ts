import { axa_DepartmentAttributes, axa_departmentMetadata } from "../cds-generated/entities/axa_Department";
import { axa_DepartmentfulfillmentStatusAttributes, axa_departmentfulfillmentstatusMetadata } from "../cds-generated/entities/axa_DepartmentfulfillmentStatus";
import { axa_SalesFulfillmentStatusAttributes, axa_salesfulfillmentstatusMetadata } from "../cds-generated/entities/axa_SalesFulfillmentStatus";
import { IInputs } from "../generated/ManifestTypes";
import { SalesFulfillmentStatus } from "../types/SalesFulfillmentStatus";

export default class CdsService {
  public static readonly serviceName = "CdsService";
  public Context: ComponentFramework.Context<IInputs>;
  departmentAlias = "department";
  departmentFulfillmentStatusAlias = "departmentfulfillmentstatus";
  salesResponsible = "salesresponsible";

  constructor(context: ComponentFramework.Context<IInputs>) {
    this.Context = context;
  }

  public async fetchData() {
    const departmentsFetchXml = [
      "?fetchXml=",
      "<fetch>",
      `  <entity name='${axa_departmentMetadata.logicalName}'>`,
      `    <attribute name='${axa_DepartmentAttributes.axa_Name}'/>`,
      `    <attribute name='${axa_DepartmentAttributes.axa_Order}'/>`,
      `    <order attribute='${axa_DepartmentAttributes.axa_Order}'/>`,
      "  </entity>",
      "</fetch>"
    ].join('');
    const DFSFetchXml = [
      "?fetchXml=",
      "<fetch>",
      `  <entity name='${axa_salesfulfillmentstatusMetadata.logicalName}'>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_Description}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_ESD}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_ConfirmedDeliveryDate}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_CurrentPhase}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_SalesResponsibleName}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_Warehouse}'/>`,
      `    <link-entity name='systemuser' from='systemuserid' to='${axa_SalesFulfillmentStatusAttributes.axa_SalesResponsible}' link-type='outer' alias='${this.salesResponsible}'>`,
      "      <attribute name='fullname'/>",
      "    </link-entity>",
      `    <link-entity name='${axa_departmentfulfillmentstatusMetadata.logicalName}' from='${axa_DepartmentfulfillmentStatusAttributes.axa_SalesFulfillment}' to='${axa_SalesFulfillmentStatusAttributes.axa_SalesFulfillmentStatusId}' link-type='outer' alias='${this.departmentAlias}'>`,
      `      <attribute name='${axa_DepartmentfulfillmentStatusAttributes.axa_Name}'/>`,
      `      <attribute name='${axa_DepartmentfulfillmentStatusAttributes.axa_DepartmentfulfillmentStatusId}'/>`,
      `      <attribute name='${axa_DepartmentfulfillmentStatusAttributes.axa_Department}'/>`,
      `      <attribute name='${axa_DepartmentfulfillmentStatusAttributes.axa_FulfillmentStatus}'/>`,
      `      <link-entity name='axa_department' from='axa_departmentid' to='axa_department' link-type='outer' alias='${this.departmentFulfillmentStatusAlias}'>`,
      "        <attribute name='axa_name'/>",
      "      </link-entity>",
      "    </link-entity>",
      `    <order attribute='${axa_SalesFulfillmentStatusAttributes.axa_ESD}'/>`,
      "  </entity>",
      "</fetch>"
    ].join('');
    const [departmentsRes, SFS] = await Promise.all([
      this.Context.webAPI.retrieveMultipleRecords("axa_department", departmentsFetchXml),
      this.Context.webAPI.retrieveMultipleRecords("axa_salesfulfillmentstatus", DFSFetchXml)
    ]);

    const formattedResult = this.formatSalesFulfillmentStatus(SFS.entities);
    const departments = departmentsRes.entities
      .sort(i => i[axa_DepartmentAttributes.axa_Order] - i[axa_DepartmentAttributes.axa_Order])
      .map(item => item[axa_DepartmentAttributes.axa_Name])

    return {
      departments,
      salesFulfillmentStatus: formattedResult
    }
  }

  private formatSalesFulfillmentStatus(data: ComponentFramework.WebApi.Entity[]): Record<string, SalesFulfillmentStatus> {
    const SFS: Record<string, SalesFulfillmentStatus> = {}

    data.forEach((item) => {
      const estimatedDate = item[axa_SalesFulfillmentStatusAttributes.axa_ESD];
      const confirmedDate = item[axa_SalesFulfillmentStatusAttributes.axa_ConfirmedDeliveryDate];
      const id = item[axa_SalesFulfillmentStatusAttributes.axa_SalesFulfillmentStatusId];
      if (!SFS[id]) {
        SFS[id] = {
          id,
          title: item[axa_SalesFulfillmentStatusAttributes.axa_Description],
          personResponsible: item[`${this.salesResponsible}.fullname`],
          phase: item[axa_SalesFulfillmentStatusAttributes.axa_CurrentPhase],
          DeliveryDate: confirmedDate ? new Date(confirmedDate) : estimatedDate ? new Date(estimatedDate) : undefined,
          isDateConfirmed: !!confirmedDate,
          location: item[axa_SalesFulfillmentStatusAttributes.axa_Warehouse],
          department: {}
        }
      }
      const departmentId = item[`${this.departmentAlias}.${axa_DepartmentfulfillmentStatusAttributes.axa_DepartmentfulfillmentStatusId}`];
      if (departmentId)
        SFS[id].department[item[`${this.departmentFulfillmentStatusAlias}.${axa_DepartmentAttributes.axa_Name}`]] = item[`${this.departmentAlias}.${axa_DepartmentfulfillmentStatusAttributes.axa_FulfillmentStatus}`];
    })

    return SFS;
  }
}
