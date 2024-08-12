import { axa_DealSetupFormAttributes, axa_dealsetupformMetadata } from "../cds-generated/entities/axa_DealSetupForm";
import { axa_DepartmentAttributes, axa_departmentMetadata } from "../cds-generated/entities/axa_Department";
import { axa_DepartmentfulfillmentStatusAttributes, axa_departmentfulfillmentstatusMetadata } from "../cds-generated/entities/axa_DepartmentfulfillmentStatus";
import { axa_SalesFulfillmentStatusAttributes, axa_salesfulfillmentstatusMetadata } from "../cds-generated/entities/axa_SalesFulfillmentStatus";
import { EnvironmentVariableDefinitionAttributes, environmentvariabledefinitionMetadata } from "../cds-generated/entities/EnvironmentVariableDefinition";
import { OpportunityAttributes, opportunityMetadata } from "../cds-generated/entities/Opportunity";
import { z2t_makeAttributes, z2t_makeMetadata } from "../cds-generated/entities/z2t_make";
import { axa_department_axa_department_statecode } from "../cds-generated/enums/axa_department_axa_department_statecode";
import { axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_doescustomerhavedatagovernanceform } from "../cds-generated/enums/axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_doescustomerhavedatagovernanceform";
import { IInputs } from "../generated/ManifestTypes";
import { SalesFulfillmentStatus } from "../types/SalesFulfillmentStatus";

export default class CdsService {
  public static readonly serviceName = "CdsService";
  public Context: ComponentFramework.Context<IInputs>;
  departmentAlias = "department";
  opportunityAlias = "opportunity";
  dsfAlias = "DSF";
  departmentFulfillmentStatusAlias = "departmentfulfillmentstatus";
  salesResponsibleAlias = "salesresponsible";
  makeAlias = "make";
  caterpillerMakeName = "";

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
      `    <attribute name='${axa_DepartmentAttributes.statecode}'/>`,
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
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_MakeName}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_Serialnumber}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_MachineDeliveredtoCustomer}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_ConfirmedDeliveryDate}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_CurrentPhase}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_DoesCustomerhavedatagovernanceform}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_DoescustomerhaveCWS}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_TypeofSale}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_SalesResponsibleName}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_Warehouse}'/>`,
      `    <link-entity name='${z2t_makeMetadata.logicalName}' from='${z2t_makeAttributes.z2t_makeId}' to='${axa_SalesFulfillmentStatusAttributes.axa_Make}' link-type='outer' alias='${this.makeAlias}'>`,
      `      <attribute name='${z2t_makeAttributes.z2t_makeId}'/>`,
      `      <attribute name='${z2t_makeAttributes.z2t_name}'/>`,
      "    </link-entity>",
      `    <link-entity name='systemuser' from='systemuserid' to='${axa_SalesFulfillmentStatusAttributes.axa_SalesResponsible}' link-type='outer' alias='${this.salesResponsibleAlias}'>`,
      "      <attribute name='fullname'/>",
      "    </link-entity>",
      `    <link-entity name='${axa_dealsetupformMetadata.logicalName}' from='${axa_DealSetupFormAttributes.axa_DealSetupFormId}' to='${axa_SalesFulfillmentStatusAttributes.axa_DSF}' link-type='outer' alias='${this.dsfAlias}'>`,
      `    <attribute name='${axa_DealSetupFormAttributes.axa_Salesagreementattachment_Name}'/>`,
      `    <attribute name='${axa_DealSetupFormAttributes.axa_Salesagreementattachment2_Name}'/>`,
      `    <attribute name='${axa_DealSetupFormAttributes.axa_DeliveryServiceRecord_Name}'/>`,
      `    <attribute name='${axa_DealSetupFormAttributes.axa_CWSID}'/>`,
      `      <link-entity name='${opportunityMetadata.logicalName}' from='${OpportunityAttributes.OpportunityId}' to='${axa_DealSetupFormAttributes.axa_Opportunity}' link-type='outer' alias='${this.opportunityAlias}'>`,
      `        <attribute name='${OpportunityAttributes.z2t_OpType}'/>`,
      "      </link-entity>",
      "    </link-entity>",
      `    <link-entity name='${axa_departmentfulfillmentstatusMetadata.logicalName}' from='${axa_DepartmentfulfillmentStatusAttributes.axa_SalesFulfillment}' to='${axa_SalesFulfillmentStatusAttributes.axa_SalesFulfillmentStatusId}' link-type='outer' alias='${this.departmentFulfillmentStatusAlias}'>`,
      `      <attribute name='${axa_DepartmentfulfillmentStatusAttributes.axa_Name}'/>`,
      `      <attribute name='${axa_DepartmentfulfillmentStatusAttributes.axa_DepartmentfulfillmentStatusId}'/>`,
      `      <attribute name='${axa_DepartmentfulfillmentStatusAttributes.axa_Department}'/>`,
      `      <attribute name='${axa_DepartmentfulfillmentStatusAttributes.ModifiedOn}'/>`,
      `      <attribute name='${axa_DepartmentfulfillmentStatusAttributes.axa_FulfillmentStatus}'/>`,
      `      <link-entity name='axa_department' from='axa_departmentid' to='axa_department' link-type='outer' alias='${this.departmentAlias}'>`,
      "        <attribute name='axa_name'/>",
      "      </link-entity>",
      `      <order attribute="${axa_DepartmentfulfillmentStatusAttributes.ModifiedOn}" descending="true" />`,
      "    </link-entity>",
      `    <order attribute='${axa_SalesFulfillmentStatusAttributes.axa_ESD}'/>`,
      "  </entity>",
      "</fetch>"
    ].join('');
    const [departmentsRes, SFS, caterpillerMakeName] = await Promise.all([
      this.Context.webAPI.retrieveMultipleRecords(axa_departmentMetadata.logicalName, departmentsFetchXml),
      this.Context.webAPI.retrieveMultipleRecords(axa_salesfulfillmentstatusMetadata.logicalName, DFSFetchXml),
      this.GetEnvironmentVariableValue("axa_CaterpillerMakeName")
    ]);

    this.caterpillerMakeName = caterpillerMakeName || "";
    const departments = departmentsRes.entities
      .filter(i => i[axa_DepartmentAttributes.statecode] === axa_department_axa_department_statecode.Active)
      .sort(i => i[axa_DepartmentAttributes.axa_Order] - i[axa_DepartmentAttributes.axa_Order])
      .map(item => item[axa_DepartmentAttributes.axa_Name])
    const formattedResult = this.formatSalesFulfillmentStatus(SFS.entities, departments);

    return {
      departments,
      salesFulfillmentStatus: formattedResult
    }
  }

  private formatSalesFulfillmentStatus(data: ComponentFramework.WebApi.Entity[], Departments: string[]): Record<string, SalesFulfillmentStatus> {
    const SFS: Record<string, SalesFulfillmentStatus> = {}

    data.forEach((item) => {
      const estimatedDate = item[axa_SalesFulfillmentStatusAttributes.axa_ESD];
      const confirmedDate = item[axa_SalesFulfillmentStatusAttributes.axa_ConfirmedDeliveryDate];
      const isMakeCaterpiller = item[`${this.makeAlias}.${z2t_makeAttributes.z2t_name}`] === this.caterpillerMakeName;
      const typeOfSale = item[axa_SalesFulfillmentStatusAttributes.axa_TypeofSale];
      const id = item[axa_SalesFulfillmentStatusAttributes.axa_SalesFulfillmentStatusId];
      if (!SFS[id]) {
        SFS[id] = {
          id,
          title: item[axa_SalesFulfillmentStatusAttributes.axa_Description],
          salesResponsible: item[`${this.salesResponsibleAlias}.fullname`],
          phase: item[axa_SalesFulfillmentStatusAttributes.axa_CurrentPhase],
          serialNumber: item[axa_SalesFulfillmentStatusAttributes.axa_Serialnumber],
          typeOfSale: typeOfSale,
          DeliveryDate: confirmedDate ? new Date(confirmedDate) : estimatedDate ? new Date(estimatedDate) : undefined,
          OpType: item[`${this.opportunityAlias}.${OpportunityAttributes.z2t_OpType}`],
          isDateConfirmed: !!confirmedDate,
          warehouse: item[axa_SalesFulfillmentStatusAttributes.axa_Warehouse],
          requirements: {
            MDC: item[`${axa_SalesFulfillmentStatusAttributes.axa_MachineDeliveredtoCustomer}`] ? true : false,
            SA: item[`${this.dsfAlias}.${axa_DealSetupFormAttributes.axa_Salesagreementattachment_Name}`] ? true : false,
            DA: !isMakeCaterpiller ? axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_doescustomerhavedatagovernanceform.Yes : item[axa_SalesFulfillmentStatusAttributes.axa_DoesCustomerhavedatagovernanceform],
            DSR: !isMakeCaterpiller ? true : typeOfSale === "Used Sales" ? true : item[`${this.dsfAlias}.${axa_DealSetupFormAttributes.axa_DeliveryServiceRecord_Name}`] ? true : false,
            CWS: item[axa_SalesFulfillmentStatusAttributes.axa_DoescustomerhaveCWS],
          },
          department: {}
        }
      }
      const departmentId = item[`${this.departmentFulfillmentStatusAlias}.${axa_DepartmentfulfillmentStatusAttributes.axa_DepartmentfulfillmentStatusId}`];
      const status = item[`${this.departmentFulfillmentStatusAlias}.${axa_DepartmentfulfillmentStatusAttributes.axa_FulfillmentStatus}`];
      const depName = item[`${this.departmentAlias}.${axa_DepartmentAttributes.axa_Name}`];
      if (departmentId && Departments.includes(depName) && !SFS[id].department[depName]) SFS[id].department[depName] = status;
    })
    return SFS;
  }


  private async GetEnvironmentVariableValue(name: string): Promise<string | null> {
    let results = await Xrm.WebApi.retrieveMultipleRecords(environmentvariabledefinitionMetadata.logicalName, `?$filter=schemaname eq '${name}'&$select=${EnvironmentVariableDefinitionAttributes.EnvironmentVariableDefinitionId}&$expand=environmentvariabledefinition_environmentvariablevalue($select=value)`);

    if (!results || !results.entities || results.entities.length < 1) return null;
    let variable = results.entities[0];
    if (!variable.environmentvariabledefinition_environmentvariablevalue || variable.environmentvariabledefinition_environmentvariablevalue.length < 1) return null;

    return variable.environmentvariabledefinition_environmentvariablevalue[0].value;
  }
}

