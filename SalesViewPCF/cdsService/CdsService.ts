import { axa_DealSetupFormAttributes, axa_dealsetupformMetadata } from "../cds-generated/entities/axa_DealSetupForm";
import { axa_DepartmentAttributes, axa_departmentMetadata } from "../cds-generated/entities/axa_Department";
import { axa_SalesFulfillmentStatusAttributes, axa_salesfulfillmentstatusMetadata } from "../cds-generated/entities/axa_SalesFulfillmentStatus";
import { EnvironmentVariableDefinitionAttributes, environmentvariabledefinitionMetadata } from "../cds-generated/entities/EnvironmentVariableDefinition";
import { OpportunityAttributes, opportunityMetadata } from "../cds-generated/entities/Opportunity";
import { TaskAttributes, taskMetadata } from "../cds-generated/entities/Task";
import { z2t_makeAttributes, z2t_makeMetadata } from "../cds-generated/entities/z2t_make";
import { axa_department_axa_department_statecode } from "../cds-generated/enums/axa_department_axa_department_statecode";
import { axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_doescustomerhavedatagovernanceform } from "../cds-generated/enums/axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_doescustomerhavedatagovernanceform";
import { axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus } from "../cds-generated/enums/axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus";
import { IInputs } from "../generated/ManifestTypes";
import { SalesFulfillmentStatus } from "../types/SalesFulfillmentStatus";
import { Task } from "../types/Task";
import { task_task_statecode } from "../cds-generated/enums/task_task_statecode";
import { axa_department_axa_department_statuscode } from "../cds-generated/enums/axa_department_axa_department_statuscode";

export default class CdsService {
  public static readonly serviceName = "CdsService";
  public Context: ComponentFramework.Context<IInputs>;
  private isBasedOnUser: boolean = false;
  private opportunityAlias = "opportunity";
  private dsfAlias = "DSF";
  private salesResponsibleAlias = "salesresponsible";
  private makeAlias = "make";
  private caterpillerMakeName = "";
  private depAlias = "dep";
  private sfsAlias = "sfs";


  constructor(context: ComponentFramework.Context<IInputs>) {
    this.Context = context;
  }

  public async fetchData(isBasedOnUser: boolean) {
    this.isBasedOnUser = isBasedOnUser;
    const departmentsFetchXml = [
      "?fetchXml=",
      "<fetch>",
      `  <entity name='${axa_departmentMetadata.logicalName}'>`,
      `    <attribute name='${axa_DepartmentAttributes.axa_DepartmentId}'/>`,
      `    <attribute name='${axa_DepartmentAttributes.axa_Name}'/>`,
      `    <attribute name='${axa_DepartmentAttributes.axa_Order}'/>`,
      `    <attribute name='${axa_DepartmentAttributes.statecode}'/>`,
      `    <filter>`,
      `      <condition attribute='${axa_DepartmentAttributes.statuscode}' operator='eq' value='${axa_department_axa_department_statuscode.Active}'/>`,
      `    </filter>`,
      `    <order attribute='${axa_DepartmentAttributes.axa_Order}'/>`,
      "  </entity>",
      "</fetch>"
    ].join('');
    const SFSFetchXml = [
      "?fetchXml=",
      "<fetch>",
      `  <entity name='${axa_salesfulfillmentstatusMetadata.logicalName}'>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_Description}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_ESD}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_Serialnumber}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_MachineDeliveredtoCustomer}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_ConfirmedDeliveryDate}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_CurrentPhase}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_DoesCustomerhavedatagovernanceform}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_DoescustomerhaveCWS}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_TypeofSale}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_SalesResponsibleName}'/>`,
      `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_Warehouse}'/>`,
      `    <order attribute='${axa_SalesFulfillmentStatusAttributes.axa_ESD}'/>`,
      "    <filter>",
      `      <condition attribute='${axa_SalesFulfillmentStatusAttributes.axa_SalesStatus}' operator='in'>`,
      `        <value>752580000</value>`, // Not Started
      `        <value>752580001</value>`, // In Progress
      "      </condition>",
      "    </filter>",
      `    <link-entity name='${z2t_makeMetadata.logicalName}' from='${z2t_makeAttributes.z2t_makeId}' to='${axa_SalesFulfillmentStatusAttributes.axa_Make}' link-type='outer' alias='${this.makeAlias}'>`,
      `      <attribute name='${z2t_makeAttributes.z2t_name}'/>`,
      "    </link-entity>",
      `    <link-entity name='systemuser' from='systemuserid' to='${axa_SalesFulfillmentStatusAttributes.axa_SalesResponsible}' link-type='${this.isBasedOnUser ? "inner" : "outer"}' alias='${this.salesResponsibleAlias}'>`,
      "      <attribute name='fullname'/>",
      ...(this.isBasedOnUser ? [
        "      <filter>",
        `        <condition attribute='systemuserid' operator='eq' value='${this.Context.userSettings.userId.replace("{", "").replace("}", "").toLowerCase()}'/>`,
        "      </filter>",
      ] : []),
      "    </link-entity>",
      `    <link-entity name='${axa_dealsetupformMetadata.logicalName}' from='${axa_DealSetupFormAttributes.axa_DealSetupFormId}' to='${axa_SalesFulfillmentStatusAttributes.axa_DSF}' link-type='outer' alias='${this.dsfAlias}'>`,
      `      <attribute name='${axa_DealSetupFormAttributes.axa_Salesagreementattachment_Name}'/>`,
      `      <attribute name='${axa_DealSetupFormAttributes.axa_Salesagreementattachment2_Name}'/>`,
      `      <attribute name='${axa_DealSetupFormAttributes.axa_DeliveryServiceRecord_Name}'/>`,
      `      <attribute name='${axa_DealSetupFormAttributes.axa_CWSID}'/>`,
      `      <link-entity name='${opportunityMetadata.logicalName}' from='${OpportunityAttributes.OpportunityId}' to='${axa_DealSetupFormAttributes.axa_Opportunity}' link-type='outer' alias='${this.opportunityAlias}'>`,
      `        <attribute name='${OpportunityAttributes.z2t_OpType}'/>`,
      "      </link-entity>",
      "    </link-entity>",
      "  </entity>",
      "</fetch>"
    ].join('');
    const [{ entities: departmentsRes }, { entities: SFS }, tasks, caterpillerMakeName] = await Promise.all([
      this.Context.webAPI.retrieveMultipleRecords(axa_departmentMetadata.logicalName, departmentsFetchXml),
      this.Context.webAPI.retrieveMultipleRecords(axa_salesfulfillmentstatusMetadata.logicalName, SFSFetchXml),
      this.getSfsTasks(),
      this.GetEnvironmentVariableValue("axa_CaterpillerMakeName")
    ]);
    this.caterpillerMakeName = caterpillerMakeName || "";
    const departments: Record<string, string> = departmentsRes
      .filter(i => i[axa_DepartmentAttributes.statecode] === axa_department_axa_department_statecode.Active)
      .sort(i => i[axa_DepartmentAttributes.axa_Order] - i[axa_DepartmentAttributes.axa_Order])
      .reduce((acc, item) => {
        acc[item[axa_DepartmentAttributes.axa_DepartmentId]] = item[axa_DepartmentAttributes.axa_Name];
        return acc;
      }, {});
    const formattedResult = await this.formatSalesFulfillmentStatus(SFS, departments, tasks);
    return {
      departments: Object.values(departments),
      salesFulfillmentStatus: formattedResult
    }
  }

  private async formatSalesFulfillmentStatus(data: ComponentFramework.WebApi.Entity[], Departments: Record<string, string>, tasks: Record<string, Task[]>): Promise<Record<string, SalesFulfillmentStatus>> {
    const SFS: Record<string, SalesFulfillmentStatus> = {}
    data.map((item) => {
      const estimatedDate = item[axa_SalesFulfillmentStatusAttributes.axa_ESD];
      const confirmedDate = item[axa_SalesFulfillmentStatusAttributes.axa_ConfirmedDeliveryDate];
      const isMakeCaterpiller = item[`${this.makeAlias}.${z2t_makeAttributes.z2t_name}`]?.trim() === this.caterpillerMakeName?.trim();
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
            DSR: !isMakeCaterpiller || typeOfSale === "Used Sales" ? true : item[`${this.dsfAlias}.${axa_DealSetupFormAttributes.axa_DeliveryServiceRecord_Name}`] ? true : false,
            CWS: item[axa_SalesFulfillmentStatusAttributes.axa_DoescustomerhaveCWS],
          },
          department: {}
        }
      }
    })
    Object.keys(SFS).forEach((key) => {
      SFS[key].department = this.groupTasksByDepartment(tasks[key], Departments);
    })
    return SFS;
  }

  private async getSfsTasks(): Promise<Record<string, Task[]>> {
    let page = 1;
    const pageCookieMatch = /(?<=pagingcookie=['"])[a-z,A-Z,0-9,%-_.~]+/g;
    const count = 5000;
    let pagingCookie: string | null = null;
    const tasks: Record<string, Task[]> = {};
    while (page > 0) {
      console.log("fetching page", page)
      const fetchXml = () => [
        `<fetch returntotalrecordcount='true' page='${page}' count='${count}' ${pagingCookie ? `paging-cookie='${this.xmlEncode(pagingCookie)}'` : ""}>`,
        `  <entity name='${taskMetadata.logicalName}'>`,
        `    <attribute name='${TaskAttributes.StateCode}'/>`,
        `    <attribute name='${TaskAttributes.ActivityId}'/>`,
        `    <attribute name='${TaskAttributes.axa_Department}'/>`,
        `    <attribute name='${TaskAttributes.axa_SalesFulfillmentStatus}'/>`,
        `    <attribute name='${TaskAttributes.Subject}'/>`,
        `    <link-entity name='${axa_salesfulfillmentstatusMetadata.logicalName}' from='${axa_salesfulfillmentstatusMetadata.primaryIdAttribute}' to='${TaskAttributes.axa_SalesFulfillmentStatus}' link-type='inner' alias='${this.sfsAlias}'>`,
        "      <filter>",
        `        <condition attribute='${axa_SalesFulfillmentStatusAttributes.axa_SalesStatus}' operator='in'>`,
        `          <value>752580000</value>`, // Not Started
        `          <value>752580001</value>`, // In Progress
        "        </condition>",
        "      </filter>",
        "    </link-entity>",
        `    <link-entity name='${axa_departmentMetadata.logicalName}' from='${axa_departmentMetadata.primaryIdAttribute}' to='${TaskAttributes.axa_Department}' link-type='inner' alias='${this.depAlias}'>`,
        "      <filter>",
        `        <condition attribute='${axa_DepartmentAttributes.statuscode}' operator='eq' value='${axa_department_axa_department_statuscode.Active}'/>`,
        "      </filter>",
        "    </link-entity>",
        "  </entity>",
        "</fetch>"
      ].join("");
      const clientUrl = Xrm.Utility.getGlobalContext().getClientUrl();
      const webApiUrl = `${clientUrl}/api/data/v9.1/tasks?fetchXml=${encodeURIComponent(fetchXml())}`;
      const tasksRes = await fetch(webApiUrl, { headers: { Prefer: "odata.include-annotations=*" } }).then(res => res.json());
      pagingCookie = tasksRes["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"];
      if (pagingCookie) {
        pagingCookie = pagingCookie.match(pageCookieMatch)?.[0] || null;
        if (pagingCookie)
          pagingCookie = decodeURIComponent(decodeURIComponent(pagingCookie))
      }
      tasksRes.value.map((item: ComponentFramework.WebApi.Entity) => {
        const sfsId = item[`_${TaskAttributes.axa_SalesFulfillmentStatus}_value`];
        if (!tasks[sfsId]) tasks[sfsId] = [];
        tasks[sfsId].push({
          id: item[TaskAttributes.ActivityId],
          title: item[TaskAttributes.Subject],
          departmentId: item[`_${TaskAttributes.axa_Department}_value`],
          status: item[TaskAttributes.StateCode],
        } as Task);
      })
      if (tasksRes["@Microsoft.Dynamics.CRM.morerecords"]) {
        page++;
      } else {
        page = -1;
      }
    }
    return tasks;
  }

  private groupTasksByDepartment(tasks: Task[], Departments: Record<string, string>): Record<string, axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus> {
    const groupedTasks: { [Id: string]: Task[] } = {};
    tasks.forEach(task => {
      if (!groupedTasks[task.departmentId]) groupedTasks[task.departmentId] = [];
      groupedTasks[task.departmentId].push(task);
    });
    const result: Record<string, axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus> = {};
    //determine the status based on all tasks present in a department
    Object.keys(groupedTasks).forEach((key) => {
      const tasks = groupedTasks[key];
      const departmentName = Departments[key];
      const status = this.getDepartmentStatus(tasks);
      result[departmentName] = status;
    });
    return result;
  }

  private getDepartmentStatus(tasks: Task[]): axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus {
    let status: axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus;
    if (tasks.some(i => i.status === task_task_statecode.Open) && !tasks.find(i => i.status === task_task_statecode.Completed))
      status = axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.Notstarted;
    else if (tasks.some(i => i.status === task_task_statecode.Open) && tasks.some(i => i.status === task_task_statecode.Completed))
      status = axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.WIP;
    else
      status = axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus.Done;
    return status;
  }

  private async GetEnvironmentVariableValue(name: string): Promise<string | null> {
    let results = await Xrm.WebApi.retrieveMultipleRecords(environmentvariabledefinitionMetadata.logicalName, `?$filter=schemaname eq '${name}'&$select=${EnvironmentVariableDefinitionAttributes.EnvironmentVariableDefinitionId}&$expand=environmentvariabledefinition_environmentvariablevalue($select=value)`);
    if (!results || !results.entities || results.entities.length < 1) return null;
    let variable = results.entities[0];
    if (!variable.environmentvariabledefinition_environmentvariablevalue || variable.environmentvariabledefinition_environmentvariablevalue.length < 1) return null;
    return variable.environmentvariabledefinition_environmentvariablevalue[0].value;
  }

  private xmlEncode(str: string) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }
}

