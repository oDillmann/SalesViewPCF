/* eslint-disable*/
import { IEntity } from "cdsify";
// Entity axa_DATAAUTHORIZATIONGOVERNANCEIndicatorFlag
export const axa_dataauthorizationgovernanceindicatorflagMetadata = {
  typeName: "mscrm.axa_dataauthorizationgovernanceindicatorflag",
  logicalName: "axa_dataauthorizationgovernanceindicatorflag",
  collectionName: "axa_dataauthorizationgovernanceindicatorflags",
  primaryIdAttribute: "axa_dataauthorizationgovernanceindicatorflagid",
  attributeTypes: {
    // Numeric Types
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    axa_cwsid: "Optionset",
    axa_data_auth: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    axa_pccvalidtodate: "DateOnly:UserLocal",
    axa_visionlinkvalidtodate: "DateOnly:UserLocal",
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
  },
};

// Attribute constants
export enum axa_DATAAUTHORIZATIONGOVERNANCEIndicatorFlagAttributes {
  axa_CCID = "axa_ccid",
  axa_CWSID = "axa_cwsid",
  axa_DATA_AUTH = "axa_data_auth",
  axa_DATAAUTHORIZATIONGOVERNANCEIndicatorFlagId = "axa_dataauthorizationgovernanceindicatorflagid",
  axa_PCC_NE = "axa_pcc_ne",
  axa_PCCValidToDate = "axa_pccvalidtodate",
  axa_VisionLink = "axa_visionlink",
  axa_VisionLinkValidtoDate = "axa_visionlinkvalidtodate",
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
export interface axa_DATAAUTHORIZATIONGOVERNANCEIndicatorFlag extends IEntity {
  // CCID# [Required] StringType
  axa_ccid?: string;
  // CWS ID axa_dataauthorizationgovernanceindicatorflag_axa_dataauthorizationgovernanceindicatorflag_axa_cwsid
  axa_cwsid?: import("../enums/axa_dataauthorizationgovernanceindicatorflag_axa_dataauthorizationgovernanceindicatorflag_axa_cwsid").axa_dataauthorizationgovernanceindicatorflag_axa_dataauthorizationgovernanceindicatorflag_axa_cwsid | null;
  // DATA_AUTH axa_dataauthorizationgovernanceindicatorflag_axa_dataauthorizationgovernanceindicatorflag_axa_data_auth
  axa_data_auth?: import("../enums/axa_dataauthorizationgovernanceindicatorflag_axa_dataauthorizationgovernanceindicatorflag_axa_data_auth").axa_dataauthorizationgovernanceindicatorflag_axa_dataauthorizationgovernanceindicatorflag_axa_data_auth | null;
  // DATA AUTHORIZATION/GOVERNANCE Indicator Flag UniqueidentifierType Unique identifier for entity instances
  axa_dataauthorizationgovernanceindicatorflagid?: import("cdsify").Guid | null;
  // PCC_NE BooleanType
  axa_pcc_ne?: boolean | null;
  // PCC Valid To Date DateTimeType DateOnly:UserLocal
  axa_pccvalidtodate?: Date | null;
  // Vision Link BooleanType
  axa_visionlink?: boolean | null;
  // Vision Link Valid to Date DateTimeType DateOnly:UserLocal
  axa_visionlinkvalidtodate?: Date | null;
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
  // Status axa_dataauthorizationgovernanceindicatorflag_axa_dataauthorizationgovernanceindicatorflag_statecode Status of the DATA AUTHORIZATION/GOVERNANCE Indicator Flag
  statecode?: import("../enums/axa_dataauthorizationgovernanceindicatorflag_axa_dataauthorizationgovernanceindicatorflag_statecode").axa_dataauthorizationgovernanceindicatorflag_axa_dataauthorizationgovernanceindicatorflag_statecode | null;
  // Status Reason axa_dataauthorizationgovernanceindicatorflag_axa_dataauthorizationgovernanceindicatorflag_statuscode Reason for the status of the DATA AUTHORIZATION/GOVERNANCE Indicator Flag
  statuscode?: import("../enums/axa_dataauthorizationgovernanceindicatorflag_axa_dataauthorizationgovernanceindicatorflag_statuscode").axa_dataauthorizationgovernanceindicatorflag_axa_dataauthorizationgovernanceindicatorflag_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}
