/* eslint-disable*/
import { IEntity } from "cdsify";
// Entity axa_DepartmentfulfillmentStatus
export const axa_departmentfulfillmentstatusMetadata = {
  typeName: "mscrm.axa_departmentfulfillmentstatus",
  logicalName: "axa_departmentfulfillmentstatus",
  collectionName: "axa_departmentfulfillmentstatuses",
  primaryIdAttribute: "axa_departmentfulfillmentstatusid",
  attributeTypes: {
    // Numeric Types
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    axa_fulfillmentstatus: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    axa_SalesFulfillment: ["mscrm.axa_salesfulfillmentstatus"],
    axa_Department: ["mscrm.axa_department"],
  },
};

// Attribute constants
export enum axa_DepartmentfulfillmentStatusAttributes {
  axa_Department = "axa_department",
  axa_DepartmentfulfillmentStatusId = "axa_departmentfulfillmentstatusid",
  axa_DepartmentName = "axa_departmentname",
  axa_FulfillmentStatus = "axa_fulfillmentstatus",
  axa_Name = "axa_name",
  axa_SalesFulfillment = "axa_salesfulfillment",
  axa_SalesFulfillmentName = "axa_salesfulfillmentname",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  ImportSequenceNumber = "importsequencenumber",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  statecode = "statecode",
  statuscode = "statuscode",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface axa_DepartmentfulfillmentStatus extends IEntity {
  // Department LookupType
  axa_department?: import("cdsify").EntityReference | null;
  // Department fulfillment Status UniqueidentifierType Unique identifier for entity instances
  axa_departmentfulfillmentstatusid?: import("cdsify").Guid | null;
  //  StringType
  axa_departmentname?: string | null;
  // Fulfillment Status axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus
  axa_fulfillmentstatus?: import("../enums/axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus").axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus | null;
  // Name [Required] StringType
  axa_name?: string;
  // Sales Fulfillment LookupType
  axa_salesfulfillment?: import("cdsify").EntityReference | null;
  //  StringType
  axa_salesfulfillmentname?: string | null;
  // Created By LookupType Unique identifier of the user who created the record.
  createdby?: import("cdsify").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
  createdonbehalfby?: import("cdsify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Modified By LookupType Unique identifier of the user who modified the record.
  modifiedby?: import("cdsify").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
  modifiedonbehalfby?: import("cdsify").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Owner Id
  ownerid?: import("cdsify").EntityReference | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("cdsify").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("cdsify").EntityReference | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("cdsify").EntityReference | null;
  // Status axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_statecode Status of the Department fulfillment Status
  statecode?: import("../enums/axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_statecode").axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_statecode | null;
  // Status Reason axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_statuscode Reason for the status of the Department fulfillment Status
  statuscode?: import("../enums/axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_statuscode").axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}
