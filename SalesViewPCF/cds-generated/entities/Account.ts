/* eslint-disable*/
import { IEntity } from "cdsify";
// Entity Account
export const accountMetadata = {
  typeName: "mscrm.account",
  logicalName: "account",
  collectionName: "accounts",
  primaryIdAttribute: "accountid",
  attributeTypes: {
    // Numeric Types
    address1_latitude: "Double",
    address1_longitude: "Double",
    address1_utcoffset: "Integer",
    address2_latitude: "Double",
    address2_longitude: "Double",
    address2_utcoffset: "Integer",
    aging30: "Money",
    aging30_base: "Money",
    aging60: "Money",
    aging60_base: "Money",
    aging90: "Money",
    aging90_base: "Money",
    cdi_accountscore: "Integer",
    creditlimit: "Money",
    creditlimit_base: "Money",
    entityimage_timestamp: "BigInt",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    marketcap: "Money",
    marketcap_base: "Money",
    msdyn_primarytimezone: "Integer",
    msdyn_travelcharge: "Money",
    msdyn_travelcharge_base: "Money",
    new_aramount: "Money",
    new_aramount_base: "Money",
    nmc_balance: "Money",
    nmc_balance_base: "Money",
    nmc_catrevenue2018: "Money",
    nmc_catrevenue2018_base: "Money",
    nmc_catrevenue2018_state: "Integer",
    nmc_catrevenue2019: "Money",
    nmc_catrevenue2019_base: "Money",
    nmc_catrevenue2019_state: "Integer",
    nmc_catrevenue2020: "Money",
    nmc_catrevenue2020_base: "Money",
    nmc_catrevenue2020_state: "Integer",
    nmc_catrevenueytd: "Money",
    nmc_catrevenueytd_base: "Money",
    nmc_catrevenueytd_state: "Integer",
    nmc_creditlimit: "Money",
    nmc_creditlimit_base: "Money",
    nmc_openorders: "Money",
    nmc_openorders_base: "Money",
    nmc_packingslip: "Money",
    nmc_packingslip_base: "Money",
    nmc_remainingcreditlimit: "Money",
    nmc_remainingcreditlimit_base: "Money",
    nmc_rentalcontracts: "Money",
    nmc_rentalcontracts_base: "Money",
    nmc_servicecontracts: "Money",
    nmc_servicecontracts_base: "Money",
    nmc_servicewip: "Money",
    nmc_servicewip_base: "Money",
    numberofemployees: "Integer",
    onholdtime: "Integer",
    opendeals: "Integer",
    opendeals_state: "Integer",
    openrevenue: "Money",
    openrevenue_base: "Money",
    openrevenue_state: "Integer",
    revenue: "Money",
    revenue_base: "Money",
    sharesoutstanding: "Integer",
    teamsfollowed: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    z2t_120daybalance: "Money",
    z2t_120daybalance_base: "Money",
    z2t_30daybalance: "Money",
    z2t_30daybalance_base: "Money",
    z2t_60daybalance: "Money",
    z2t_60daybalance_base: "Money",
    z2t_90daybalance: "Money",
    z2t_90daybalance_base: "Money",
    z2t_annualpargoal: "Integer",
    z2t_competitorequipmentpercent: "Decimal",
    z2t_competitorequipmentshare: "Integer",
    z2t_competitorequipmentshare_state: "Integer",
    z2t_equipmentcount: "Integer",
    z2t_equipmentcount_state: "Integer",
    z2t_ourequipmentpercent: "Decimal",
    z2t_ourequipmentshare: "Integer",
    z2t_ourequipmentshare_state: "Integer",
    z2t_over120daybalance: "Money",
    z2t_over120daybalance_base: "Money",
    z2t_parachieved: "Decimal",
    z2t_ytdparactual: "Integer",
    z2t_ytdparactual_state: "Integer",
    z2t_ytdparinprogress: "Integer",
    z2t_ytdparinprogress_state: "Integer",
    // Optionsets
    accountcategorycode: "Optionset",
    accountclassificationcode: "Optionset",
    accountratingcode: "Optionset",
    address1_addresstypecode: "Optionset",
    address1_freighttermscode: "Optionset",
    address1_shippingmethodcode: "Optionset",
    address2_addresstypecode: "Optionset",
    address2_freighttermscode: "Optionset",
    address2_shippingmethodcode: "Optionset",
    businesstypecode: "Optionset",
    customersizecode: "Optionset",
    customertypecode: "Optionset",
    industrycode: "Optionset",
    msdyn_travelchargetype: "Optionset",
    nmc_accounttype: "Optionset",
    nmc_bnsfdepartment: "Optionset",
    nmc_bnsfdivision: "Optionset",
    nmc_bnsfregion: "Optionset",
    nmc_bnsfterritory: "Optionset",
    nmc_catmachinestra: "Optionset",
    nmc_materialhandlingstrategy: "Optionset",
    nmc_pow: "Optionset",
    nmc_railcustomercategory: "Optionset",
    nmc_remarketingstrategy: "Optionset",
    nmc_rentalservicesstrategy: "Optionset",
    nmc_segments: "Optionset",
    nmc_shortlineholdingcompany: "Optionset",
    nmc_sitechtechnologystrategy: "Optionset",
    nmc_subsegments: "Optionset",
    nmc_vancerrailwaysystemsstratgey: "Optionset",
    ownershipcode: "Optionset",
    paymenttermscode: "Optionset",
    preferredappointmentdaycode: "Optionset",
    preferredappointmenttimecode: "Optionset",
    preferredcontactmethodcode: "Optionset",
    shippingmethodcode: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    territorycode: "Optionset",
    z2t_accountstatus: "Optionset",
    z2t_purpose: "Optionset",
    z2t_termsofpayment: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    lastusedincampaign: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    nmc_catrevenue2018_date: "DateAndTime:UserLocal",
    nmc_catrevenue2019_date: "DateAndTime:UserLocal",
    nmc_catrevenue2020_date: "DateAndTime:UserLocal",
    nmc_catrevenueytd_date: "DateAndTime:UserLocal",
    opendeals_date: "DateAndTime:UserLocal",
    openrevenue_date: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    z2t_competitorequipmentshare_date: "DateAndTime:UserLocal",
    z2t_equipmentcount_date: "DateAndTime:UserLocal",
    z2t_lastactivity: "DateOnly:UserLocal",
    z2t_ourequipmentshare_date: "DateAndTime:UserLocal",
    z2t_ytdparactual_date: "DateAndTime:UserLocal",
    z2t_ytdparinprogress_date: "DateAndTime:UserLocal",
  },
  navigation: {
    z2t_IndustryId: ["mscrm.z2t_industry"],
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    territoryid: ["mscrm.territory"],
    stageid_processstage: ["mscrm.processstage"],
    sla_account_sla: ["mscrm.sla"],
    primarycontactid: ["mscrm.contact"],
    preferredsystemuserid: ["mscrm.systemuser"],
    preferredserviceid: ["mscrm.service"],
    preferredequipmentid: ["mscrm.equipment"],
    parentaccountid: ["mscrm.account"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    originatingleadid: ["mscrm.lead"],
    nmc_SICCode: ["mscrm.z2t_sic"],
    nmc_Division: ["mscrm.z2t_division"],
    nmc_CustomerProspectSalespersonRelaId: ["mscrm.z2t_accountsalespersonrelationship"],
    msdyn_workhourtemplate: ["mscrm.msdyn_workhourtemplate"],
    msdyn_serviceterritory: ["mscrm.territory"],
    msdyn_segmentid: ["mscrm.msdyn_segment"],
    msdyn_salestaxcode: ["mscrm.msdyn_taxcode"],
    msdyn_salesaccelerationinsightid: ["mscrm.msdyn_salesaccelerationinsight"],
    msdyn_accountkpiid: ["mscrm.msdyn_accountkpiitem"],
    msdyn_PreferredResource: ["mscrm.bookableresource"],
    msa_managingpartnerid: ["mscrm.account"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    masterid: ["mscrm.account"],
    defaultpricelevelid: ["mscrm.pricelevel"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    msdyn_billingaccount: ["account"],
    slainvokedid: ["sla"],
  },
};

// Attribute constants
export enum AccountAttributes {
  AccountCategoryCode = "accountcategorycode",
  AccountClassificationCode = "accountclassificationcode",
  AccountId = "accountid",
  AccountNumber = "accountnumber",
  AccountRatingCode = "accountratingcode",
  Address1_AddressId = "address1_addressid",
  Address1_AddressTypeCode = "address1_addresstypecode",
  Address1_City = "address1_city",
  Address1_Composite = "address1_composite",
  Address1_Country = "address1_country",
  Address1_County = "address1_county",
  Address1_Fax = "address1_fax",
  Address1_FreightTermsCode = "address1_freighttermscode",
  Address1_Latitude = "address1_latitude",
  Address1_Line1 = "address1_line1",
  Address1_Line2 = "address1_line2",
  Address1_Line3 = "address1_line3",
  Address1_Longitude = "address1_longitude",
  Address1_Name = "address1_name",
  Address1_PostalCode = "address1_postalcode",
  Address1_PostOfficeBox = "address1_postofficebox",
  Address1_PrimaryContactName = "address1_primarycontactname",
  Address1_ShippingMethodCode = "address1_shippingmethodcode",
  Address1_StateOrProvince = "address1_stateorprovince",
  Address1_Telephone1 = "address1_telephone1",
  Address1_Telephone2 = "address1_telephone2",
  Address1_Telephone3 = "address1_telephone3",
  Address1_UPSZone = "address1_upszone",
  Address1_UTCOffset = "address1_utcoffset",
  Address2_AddressId = "address2_addressid",
  Address2_AddressTypeCode = "address2_addresstypecode",
  Address2_City = "address2_city",
  Address2_Composite = "address2_composite",
  Address2_Country = "address2_country",
  Address2_County = "address2_county",
  Address2_Fax = "address2_fax",
  Address2_FreightTermsCode = "address2_freighttermscode",
  Address2_Latitude = "address2_latitude",
  Address2_Line1 = "address2_line1",
  Address2_Line2 = "address2_line2",
  Address2_Line3 = "address2_line3",
  Address2_Longitude = "address2_longitude",
  Address2_Name = "address2_name",
  Address2_PostalCode = "address2_postalcode",
  Address2_PostOfficeBox = "address2_postofficebox",
  Address2_PrimaryContactName = "address2_primarycontactname",
  Address2_ShippingMethodCode = "address2_shippingmethodcode",
  Address2_StateOrProvince = "address2_stateorprovince",
  Address2_Telephone1 = "address2_telephone1",
  Address2_Telephone2 = "address2_telephone2",
  Address2_Telephone3 = "address2_telephone3",
  Address2_UPSZone = "address2_upszone",
  Address2_UTCOffset = "address2_utcoffset",
  Adx_CreatedByIPAddress = "adx_createdbyipaddress",
  Adx_CreatedByUsername = "adx_createdbyusername",
  Adx_ModifiedByIPAddress = "adx_modifiedbyipaddress",
  Adx_ModifiedByUsername = "adx_modifiedbyusername",
  Aging30 = "aging30",
  Aging30_Base = "aging30_base",
  Aging60 = "aging60",
  Aging60_Base = "aging60_base",
  Aging90 = "aging90",
  Aging90_Base = "aging90_base",
  BusinessTypeCode = "businesstypecode",
  cdi_accountscore = "cdi_accountscore",
  cdi_allowtextmessages = "cdi_allowtextmessages",
  CreatedBy = "createdby",
  CreatedByExternalParty = "createdbyexternalparty",
  CreatedByExternalPartyName = "createdbyexternalpartyname",
  CreatedByExternalPartyYomiName = "createdbyexternalpartyyominame",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  CreditLimit = "creditlimit",
  CreditLimit_Base = "creditlimit_base",
  CreditOnHold = "creditonhold",
  CustomerSizeCode = "customersizecode",
  CustomerTypeCode = "customertypecode",
  DefaultPriceLevelId = "defaultpricelevelid",
  DefaultPriceLevelIdName = "defaultpricelevelidname",
  Description = "description",
  DoNotBulkEMail = "donotbulkemail",
  DoNotBulkPostalMail = "donotbulkpostalmail",
  DoNotEMail = "donotemail",
  DoNotFax = "donotfax",
  DoNotPhone = "donotphone",
  DoNotPostalMail = "donotpostalmail",
  DoNotSendMM = "donotsendmm",
  EMailAddress1 = "emailaddress1",
  EMailAddress2 = "emailaddress2",
  EMailAddress3 = "emailaddress3",
  EntityImage = "entityimage",
  EntityImage_Timestamp = "entityimage_timestamp",
  EntityImage_URL = "entityimage_url",
  EntityImageId = "entityimageid",
  ExchangeRate = "exchangerate",
  Fax = "fax",
  FollowEmail = "followemail",
  FtpSiteURL = "ftpsiteurl",
  ImportSequenceNumber = "importsequencenumber",
  IndustryCode = "industrycode",
  IsPrivate = "isprivate",
  LastOnHoldTime = "lastonholdtime",
  LastUsedInCampaign = "lastusedincampaign",
  MarketCap = "marketcap",
  MarketCap_Base = "marketcap_base",
  MarketingOnly = "marketingonly",
  MasterAccountIdName = "masteraccountidname",
  MasterAccountIdYomiName = "masteraccountidyominame",
  MasterId = "masterid",
  Merged = "merged",
  ModifiedBy = "modifiedby",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  ModifiedByExternalPartyName = "modifiedbyexternalpartyname",
  ModifiedByExternalPartyYomiName = "modifiedbyexternalpartyyominame",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  msa_managingpartnerid = "msa_managingpartnerid",
  msa_managingpartneridName = "msa_managingpartneridname",
  msa_managingpartneridYomiName = "msa_managingpartneridyominame",
  msdyn_accountkpiid = "msdyn_accountkpiid",
  msdyn_accountkpiidName = "msdyn_accountkpiidname",
  msdyn_BillingAccount = "msdyn_billingaccount",
  msdyn_BillingAccountName = "msdyn_billingaccountname",
  msdyn_BillingAccountYomiName = "msdyn_billingaccountyominame",
  msdyn_externalaccountid = "msdyn_externalaccountid",
  msdyn_gdproptout = "msdyn_gdproptout",
  msdyn_PreferredResource = "msdyn_preferredresource",
  msdyn_PreferredResourceName = "msdyn_preferredresourcename",
  msdyn_PrimaryTimeZone = "msdyn_primarytimezone",
  msdyn_salesaccelerationinsightid = "msdyn_salesaccelerationinsightid",
  msdyn_salesaccelerationinsightidName = "msdyn_salesaccelerationinsightidname",
  msdyn_SalesTaxCode = "msdyn_salestaxcode",
  msdyn_SalesTaxCodeName = "msdyn_salestaxcodename",
  msdyn_segmentid = "msdyn_segmentid",
  msdyn_segmentidName = "msdyn_segmentidname",
  msdyn_ServiceTerritory = "msdyn_serviceterritory",
  msdyn_ServiceTerritoryName = "msdyn_serviceterritoryname",
  msdyn_TaxExempt = "msdyn_taxexempt",
  msdyn_TaxExemptNumber = "msdyn_taxexemptnumber",
  msdyn_TravelCharge = "msdyn_travelcharge",
  msdyn_travelcharge_Base = "msdyn_travelcharge_base",
  msdyn_TravelChargeType = "msdyn_travelchargetype",
  msdyn_workhourtemplate = "msdyn_workhourtemplate",
  msdyn_workhourtemplateName = "msdyn_workhourtemplatename",
  msdyn_WorkOrderInstructions = "msdyn_workorderinstructions",
  Name = "name",
  new_ARAmount = "new_aramount",
  new_aramount_Base = "new_aramount_base",
  nmc_AccountType = "nmc_accounttype",
  nmc_AXPartyNumber = "nmc_axpartynumber",
  nmc_balance = "nmc_balance",
  nmc_balance_Base = "nmc_balance_base",
  nmc_BNSFDepartment = "nmc_bnsfdepartment",
  nmc_BNSFDivision = "nmc_bnsfdivision",
  nmc_BNSFRegion = "nmc_bnsfregion",
  nmc_BNSFTerritory = "nmc_bnsfterritory",
  nmc_businessarea = "nmc_businessarea",
  nmc_CatMachineStra = "nmc_catmachinestra",
  nmc_CATRevenue2018 = "nmc_catrevenue2018",
  nmc_catrevenue2018_Base = "nmc_catrevenue2018_base",
  nmc_CATRevenue2018_Date = "nmc_catrevenue2018_date",
  nmc_CATRevenue2018_State = "nmc_catrevenue2018_state",
  nmc_CATRevenue2019 = "nmc_catrevenue2019",
  nmc_catrevenue2019_Base = "nmc_catrevenue2019_base",
  nmc_CATRevenue2019_Date = "nmc_catrevenue2019_date",
  nmc_CATRevenue2019_State = "nmc_catrevenue2019_state",
  nmc_CATRevenue2020 = "nmc_catrevenue2020",
  nmc_catrevenue2020_Base = "nmc_catrevenue2020_base",
  nmc_CATRevenue2020_Date = "nmc_catrevenue2020_date",
  nmc_CATRevenue2020_State = "nmc_catrevenue2020_state",
  nmc_CATRevenueYTD = "nmc_catrevenueytd",
  nmc_catrevenueytd_Base = "nmc_catrevenueytd_base",
  nmc_CATRevenueYTD_Date = "nmc_catrevenueytd_date",
  nmc_CATRevenueYTD_State = "nmc_catrevenueytd_state",
  nmc_creditlimit = "nmc_creditlimit",
  nmc_creditlimit_Base = "nmc_creditlimit_base",
  nmc_customeraccount = "nmc_customeraccount",
  nmc_CustomerProspectSalespersonRelaId = "nmc_customerprospectsalespersonrelaid",
  nmc_CustomerProspectSalespersonRelaIdName = "nmc_customerprospectsalespersonrelaidname",
  nmc_Division = "nmc_division",
  nmc_DivisionName = "nmc_divisionname",
  nmc_Duns = "nmc_duns",
  nmc_MaterialHandlingStrategy = "nmc_materialhandlingstrategy",
  nmc_openorders = "nmc_openorders",
  nmc_openorders_Base = "nmc_openorders_base",
  nmc_packingslip = "nmc_packingslip",
  nmc_packingslip_Base = "nmc_packingslip_base",
  nmc_Pow = "nmc_pow",
  nmc_ProspectRecId = "nmc_prospectrecid",
  nmc_RailCustomerCategory = "nmc_railcustomercategory",
  nmc_remainingcreditlimit = "nmc_remainingcreditlimit",
  nmc_remainingcreditlimit_Base = "nmc_remainingcreditlimit_base",
  nmc_RemarketingStrategy = "nmc_remarketingstrategy",
  nmc_rentalcontracts = "nmc_rentalcontracts",
  nmc_rentalcontracts_Base = "nmc_rentalcontracts_base",
  nmc_RentalServicesStrategy = "nmc_rentalservicesstrategy",
  nmc_Segments = "nmc_segments",
  nmc_SendtoAX = "nmc_sendtoax",
  nmc_servicecontracts = "nmc_servicecontracts",
  nmc_servicecontracts_Base = "nmc_servicecontracts_base",
  nmc_servicewip = "nmc_servicewip",
  nmc_servicewip_Base = "nmc_servicewip_base",
  nmc_ShortlineHoldingCompany = "nmc_shortlineholdingcompany",
  nmc_SICCode = "nmc_siccode",
  nmc_SICCodeName = "nmc_siccodename",
  nmc_SitechTechnologyStrategy = "nmc_sitechtechnologystrategy",
  nmc_Subsegments = "nmc_subsegments",
  nmc_Vancer = "nmc_vancer",
  nmc_VancerRailwaySystemsStratgey = "nmc_vancerrailwaysystemsstratgey",
  NumberOfEmployees = "numberofemployees",
  OnHoldTime = "onholdtime",
  OpenDeals = "opendeals",
  OpenDeals_Date = "opendeals_date",
  OpenDeals_State = "opendeals_state",
  OpenRevenue = "openrevenue",
  OpenRevenue_Base = "openrevenue_base",
  OpenRevenue_Date = "openrevenue_date",
  OpenRevenue_State = "openrevenue_state",
  OriginatingLeadId = "originatingleadid",
  OriginatingLeadIdName = "originatingleadidname",
  OriginatingLeadIdYomiName = "originatingleadidyominame",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwnershipCode = "ownershipcode",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  ParentAccountId = "parentaccountid",
  ParentAccountIdName = "parentaccountidname",
  ParentAccountIdYomiName = "parentaccountidyominame",
  ParticipatesInWorkflow = "participatesinworkflow",
  PaymentTermsCode = "paymenttermscode",
  PreferredAppointmentDayCode = "preferredappointmentdaycode",
  PreferredAppointmentTimeCode = "preferredappointmenttimecode",
  PreferredContactMethodCode = "preferredcontactmethodcode",
  PreferredEquipmentId = "preferredequipmentid",
  PreferredEquipmentIdName = "preferredequipmentidname",
  PreferredServiceId = "preferredserviceid",
  PreferredServiceIdName = "preferredserviceidname",
  PreferredSystemUserId = "preferredsystemuserid",
  PreferredSystemUserIdName = "preferredsystemuseridname",
  PreferredSystemUserIdYomiName = "preferredsystemuseridyominame",
  PrimaryContactId = "primarycontactid",
  PrimaryContactIdName = "primarycontactidname",
  PrimaryContactIdYomiName = "primarycontactidyominame",
  PrimarySatoriId = "primarysatoriid",
  PrimaryTwitterId = "primarytwitterid",
  ProcessId = "processid",
  Revenue = "revenue",
  Revenue_Base = "revenue_base",
  SharesOutstanding = "sharesoutstanding",
  ShippingMethodCode = "shippingmethodcode",
  SIC = "sic",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  SLAInvokedIdName = "slainvokedidname",
  SLAName = "slaname",
  StageId = "stageid",
  StateCode = "statecode",
  StatusCode = "statuscode",
  StockExchange = "stockexchange",
  TeamsFollowed = "teamsfollowed",
  Telephone1 = "telephone1",
  Telephone2 = "telephone2",
  Telephone3 = "telephone3",
  TerritoryCode = "territorycode",
  TerritoryId = "territoryid",
  TerritoryIdName = "territoryidname",
  TickerSymbol = "tickersymbol",
  TimeSpentByMeOnEmailAndMeetings = "timespentbymeonemailandmeetings",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
  WebSiteURL = "websiteurl",
  YomiName = "yominame",
  z2t_120daybalance = "z2t_120daybalance",
  z2t_120daybalance_Base = "z2t_120daybalance_base",
  z2t_30daybalance = "z2t_30daybalance",
  z2t_30daybalance_Base = "z2t_30daybalance_base",
  z2t_60daybalance = "z2t_60daybalance",
  z2t_60daybalance_Base = "z2t_60daybalance_base",
  z2t_90daybalance = "z2t_90daybalance",
  z2t_90daybalance_Base = "z2t_90daybalance_base",
  z2t_AccountCreationReason = "z2t_accountcreationreason",
  z2t_accountstatus = "z2t_accountstatus",
  z2t_AnnualParGoal = "z2t_annualpargoal",
  z2t_Collector = "z2t_collector",
  z2t_companychain = "z2t_companychain",
  z2t_CompetitorEquipmentPercent = "z2t_competitorequipmentpercent",
  z2t_CompetitorEquipmentShare = "z2t_competitorequipmentshare",
  z2t_CompetitorEquipmentShare_Date = "z2t_competitorequipmentshare_date",
  z2t_CompetitorEquipmentShare_State = "z2t_competitorequipmentshare_state",
  z2t_ConquestAccount = "z2t_conquestaccount",
  z2t_corpacctcode = "z2t_corpacctcode",
  z2t_dataareaid = "z2t_dataareaid",
  z2t_DealerDefined1 = "z2t_dealerdefined1",
  z2t_DealerDefined2 = "z2t_dealerdefined2",
  z2t_DealerDefined3 = "z2t_dealerdefined3",
  z2t_EquipmentCount = "z2t_equipmentcount",
  z2t_EquipmentCount_Date = "z2t_equipmentcount_date",
  z2t_EquipmentCount_State = "z2t_equipmentcount_state",
  z2t_IndustryId = "z2t_industryid",
  z2t_IndustryIdName = "z2t_industryidname",
  z2t_invoicinganddeliveryonhold = "z2t_invoicinganddeliveryonhold",
  z2t_KeyAccount = "z2t_keyaccount",
  z2t_knownas = "z2t_knownas",
  z2t_LastActivity = "z2t_lastactivity",
  z2t_OurEquipmentPercent = "z2t_ourequipmentpercent",
  z2t_OurEquipmentShare = "z2t_ourequipmentshare",
  z2t_OurEquipmentShare_Date = "z2t_ourequipmentshare_date",
  z2t_OurEquipmentShare_State = "z2t_ourequipmentshare_state",
  z2t_over120daybalance = "z2t_over120daybalance",
  z2t_over120daybalance_Base = "z2t_over120daybalance_base",
  z2t_ParAchieved = "z2t_parachieved",
  z2t_party = "z2t_party",
  z2t_PartyA = "z2t_partya",
  z2t_PartyB = "z2t_partyb",
  z2t_prospectaccount = "z2t_prospectaccount",
  z2t_Purpose = "z2t_purpose",
  z2t_rddtype = "z2t_rddtype",
  z2t_RelationshipAtoB = "z2t_relationshipatob",
  z2t_segment = "z2t_segment",
  z2t_subsegment = "z2t_subsegment",
  z2t_TargetAccount = "z2t_targetaccount",
  z2t_TechnicalCallLog = "z2t_technicalcalllog",
  z2t_tepscode = "z2t_tepscode",
  z2t_termsofpayment = "z2t_termsofpayment",
  z2t_URLTechLog = "z2t_urltechlog",
  z2t_YTDParActual = "z2t_ytdparactual",
  z2t_YTDParActual_Date = "z2t_ytdparactual_date",
  z2t_YTDParActual_State = "z2t_ytdparactual_state",
  z2t_YTDParInProgress = "z2t_ytdparinprogress",
  z2t_YTDParInProgress_Date = "z2t_ytdparinprogress_date",
  z2t_YTDParInProgress_State = "z2t_ytdparinprogress_state",
}

// Early Bound Interface
export interface Account extends IEntity {
  // Category account_account_accountcategorycode Select a category to indicate whether the customer account is standard or preferred.
  accountcategorycode?: import("../enums/account_account_accountcategorycode").account_account_accountcategorycode | null;
  // Classification account_account_accountclassificationcode Select a classification code to indicate the potential value of the customer account based on the projected return on investment, cooperation level, sales cycle length or other criteria.
  accountclassificationcode?: import("../enums/account_account_accountclassificationcode").account_account_accountclassificationcode | null;
  // Customer UniqueidentifierType Unique identifier of the account.
  accountid?: import("cdsify").Guid | null;
  // Customer Number StringType Type an ID number or code for the account to quickly search and identify the account in system views.
  accountnumber?: string | null;
  // Account Rating account_account_accountratingcode Select a rating to indicate the value of the customer account.
  accountratingcode?: import("../enums/account_account_accountratingcode").account_account_accountratingcode | null;
  // Address 1: ID UniqueidentifierType Unique identifier for address 1.
  address1_addressid?: import("cdsify").Guid | null;
  // Address 1: Address Type account_account_address1_addresstypecode Select the primary address type.
  address1_addresstypecode?: import("../enums/account_account_address1_addresstypecode").account_account_address1_addresstypecode | null;
  // Business City [Required] StringType Type the city for the primary address.
  address1_city?: string;
  // Address 1 MemoType Shows the complete primary address.
  address1_composite?: string | null;
  // Address 1: Country/Region StringType Type the country or region for the primary address.
  address1_country?: string | null;
  // County StringType Type the county for the primary address.
  address1_county?: string | null;
  // Address 1: Fax StringType Type the fax number associated with the primary address.
  address1_fax?: string | null;
  // Address 1: Freight Terms account_account_address1_freighttermscode Select the freight terms for the primary address to make sure shipping orders are processed correctly.
  address1_freighttermscode?: import("../enums/account_account_address1_freighttermscode").account_account_address1_freighttermscode | null;
  // Address 1: Latitude DoubleType Type the latitude value for the primary address for use in mapping and other applications.
  address1_latitude?: number | null;
  // Business Street [Required] StringType Type the first line of the primary address.
  address1_line1?: string;
  // Address 1: Street 2 StringType Type the second line of the primary address.
  address1_line2?: string | null;
  // Address 1: Street 3 StringType Type the third line of the primary address.
  address1_line3?: string | null;
  // Address 1: Longitude DoubleType Type the longitude value for the primary address for use in mapping and other applications.
  address1_longitude?: number | null;
  // Address 1: Name StringType Type a descriptive name for the primary address, such as Corporate Headquarters.
  address1_name?: string | null;
  // Business ZIP [Required] StringType Type the ZIP Code or postal code for the primary address.
  address1_postalcode?: string;
  // Address 1: Post Office Box StringType Type the post office box number of the primary address.
  address1_postofficebox?: string | null;
  // Address 1: Primary Contact Name StringType Type the name of the main contact at the account's primary address.
  address1_primarycontactname?: string | null;
  // Address 1: Shipping Method account_account_address1_shippingmethodcode Select a shipping method for deliveries sent to this address.
  address1_shippingmethodcode?: import("../enums/account_account_address1_shippingmethodcode").account_account_address1_shippingmethodcode | null;
  // Business State [Required] StringType Type the state or province of the primary address.
  address1_stateorprovince?: string;
  // Address Phone StringType Type the main phone number associated with the primary address.
  address1_telephone1?: string | null;
  // Address 1: Telephone 2 StringType Type a second phone number associated with the primary address.
  address1_telephone2?: string | null;
  // Address 1: Telephone 3 StringType Type a third phone number associated with the primary address.
  address1_telephone3?: string | null;
  // Address 1: UPS Zone StringType Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  address1_upszone?: string | null;
  // Address 1: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  address1_utcoffset?: number | null;
  // Address 2: ID UniqueidentifierType Unique identifier for address 2.
  address2_addressid?: import("cdsify").Guid | null;
  // Address 2: Address Type account_account_address2_addresstypecode Select the secondary address type.
  address2_addresstypecode?: import("../enums/account_account_address2_addresstypecode").account_account_address2_addresstypecode | null;
  // Address 2: City StringType Type the city for the secondary address.
  address2_city?: string | null;
  // Address 2 MemoType Shows the complete secondary address.
  address2_composite?: string | null;
  // Address 2: Country/Region StringType Type the country or region for the secondary address.
  address2_country?: string | null;
  // Address 2: County StringType Type the county for the secondary address.
  address2_county?: string | null;
  // Address 2: Fax StringType Type the fax number associated with the secondary address.
  address2_fax?: string | null;
  // Address 2: Freight Terms account_account_address2_freighttermscode Select the freight terms for the secondary address to make sure shipping orders are processed correctly.
  address2_freighttermscode?: import("../enums/account_account_address2_freighttermscode").account_account_address2_freighttermscode | null;
  // Address 2: Latitude DoubleType Type the latitude value for the secondary address for use in mapping and other applications.
  address2_latitude?: number | null;
  // Address 2: Street 1 StringType Type the first line of the secondary address.
  address2_line1?: string | null;
  // Address 2: Street 2 StringType Type the second line of the secondary address.
  address2_line2?: string | null;
  // Address 2: Street 3 StringType Type the third line of the secondary address.
  address2_line3?: string | null;
  // Address 2: Longitude DoubleType Type the longitude value for the secondary address for use in mapping and other applications.
  address2_longitude?: number | null;
  // Address 2: Name StringType Type a descriptive name for the secondary address, such as Corporate Headquarters.
  address2_name?: string | null;
  // Address 2: ZIP/Postal Code StringType Type the ZIP Code or postal code for the secondary address.
  address2_postalcode?: string | null;
  // Address 2: Post Office Box StringType Type the post office box number of the secondary address.
  address2_postofficebox?: string | null;
  // Address 2: Primary Contact Name StringType Type the name of the main contact at the account's secondary address.
  address2_primarycontactname?: string | null;
  // Address 2: Shipping Method account_account_address2_shippingmethodcode Select a shipping method for deliveries sent to this address.
  address2_shippingmethodcode?: import("../enums/account_account_address2_shippingmethodcode").account_account_address2_shippingmethodcode | null;
  // Address 2: State/Province StringType Type the state or province of the secondary address.
  address2_stateorprovince?: string | null;
  // Address 2: Telephone 1 StringType Type the main phone number associated with the secondary address.
  address2_telephone1?: string | null;
  // Address 2: Telephone 2 StringType Type a second phone number associated with the secondary address.
  address2_telephone2?: string | null;
  // Address 2: Telephone 3 StringType Type a third phone number associated with the secondary address.
  address2_telephone3?: string | null;
  // Address 2: UPS Zone StringType Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  address2_upszone?: string | null;
  // Address 2: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  address2_utcoffset?: number | null;
  // Created By (IP Address) StringType
  adx_createdbyipaddress?: string | null;
  // Created By (User Name) StringType
  adx_createdbyusername?: string | null;
  // Modified By (IP Address) StringType
  adx_modifiedbyipaddress?: string | null;
  // Modified By (User Name) StringType
  adx_modifiedbyusername?: string | null;
  // Aging 30 MoneyType For system use only.
  aging30?: number | null;
  // Aging 30 (Base) MoneyType The base currency equivalent of the aging 30 field.
  aging30_base?: number | null;
  // Aging 60 MoneyType For system use only.
  aging60?: number | null;
  // Aging 60 (Base) MoneyType The base currency equivalent of the aging 60 field.
  aging60_base?: number | null;
  // Aging 90 MoneyType For system use only.
  aging90?: number | null;
  // Aging 90 (Base) MoneyType The base currency equivalent of the aging 90 field.
  aging90_base?: number | null;
  // Business Type account_account_businesstypecode Select the legal designation or other business type of the account for contracts or reporting purposes.
  businesstypecode?: import("../enums/account_account_businesstypecode").account_account_businesstypecode | null;
  // Account Score IntegerType ClickDimensions field that aggregates all child Contact Total Score fields.
  cdi_accountscore?: number | null;
  // Allow Text Messages BooleanType
  cdi_allowtextmessages?: boolean | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("cdsify").EntityReference | null;
  // Created By (External Party) LookupType Shows the external party who created the record.
  createdbyexternalparty?: import("cdsify").EntityReference | null;
  //  StringType
  createdbyexternalpartyname?: string | null;
  //  StringType
  createdbyexternalpartyyominame?: string | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("cdsify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Parts, Service, Rental Credit Limit MoneyType Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer.
  creditlimit?: number | null;
  // Credit Limit (Base) MoneyType Shows the credit limit converted to the system's default base currency for reporting purposes.
  creditlimit_base?: number | null;
  // Credit Hold BooleanType Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer.
  creditonhold?: boolean | null;
  // Customer Size account_account_customersizecode Select the size category or range of the account for segmentation and reporting purposes.
  customersizecode?: import("../enums/account_account_customersizecode").account_account_customersizecode | null;
  // Relationship Type account_account_customertypecode Select the category that best describes the relationship between the account and your organization.
  customertypecode?: import("../enums/account_account_customertypecode").account_account_customertypecode | null;
  // Product Price List LookupType Choose the default price list associated with the account to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders.
  defaultpricelevelid?: import("cdsify").EntityReference | null;
  //  StringType
  defaultpricelevelidname?: string | null;
  // Description MemoType Type additional information to describe the account, such as an excerpt from the company's website.
  description?: string | null;
  // Do not allow Bulk Emails BooleanType Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email.
  donotbulkemail?: boolean | null;
  // Do not allow Bulk Mails BooleanType Select whether the account allows bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but will be excluded from the postal mail.
  donotbulkpostalmail?: boolean | null;
  // Do not allow Emails BooleanType Select whether the account allows direct email sent from Microsoft Dynamics 365.
  donotemail?: boolean | null;
  // Do not allow Faxes BooleanType Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns.
  donotfax?: boolean | null;
  // Do not allow Phone Calls BooleanType Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns.
  donotphone?: boolean | null;
  // Do not allow Mailing BooleanType Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns.
  donotpostalmail?: boolean | null;
  // Send Marketing Materials BooleanType Select whether the account accepts marketing materials, such as brochures or catalogs.
  donotsendmm?: boolean | null;
  // Email StringType Type the primary email address for the account.
  emailaddress1?: string | null;
  // Email Address 2 StringType Type the secondary email address for the account.
  emailaddress2?: string | null;
  // Email Address 3 StringType Type an alternate email address for the account.
  emailaddress3?: string | null;
  // Default Image ImageType Shows the default image for the record.
  entityimage?: string | null;
  //  BigIntType
  entityimage_timestamp?: number | null;
  //  StringType
  entityimage_url?: string | null;
  // Entity Image Id UniqueidentifierType For internal use only.
  entityimageid?: import("cdsify").Guid | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Fax StringType Type the fax number for the account.
  fax?: string | null;
  // Follow Email Activity BooleanType Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account.
  followemail?: boolean | null;
  // FTP Site StringType Type the URL for the account's FTP site to enable users to access data and share documents.
  ftpsiteurl?: string | null;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  // Industry account_account_industrycode Select the account's primary industry for use in marketing segmentation and demographic analysis.
  industrycode?: import("../enums/account_account_industrycode").account_account_industrycode | null;
  //  BooleanType
  isprivate?: boolean | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Last Date Included in Campaign DateTimeType Shows the date when the account was last included in a marketing campaign or quick campaign. DateOnly:UserLocal
  lastusedincampaign?: Date | null;
  // Market Capitalization MoneyType Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis.
  marketcap?: number | null;
  // Market Capitalization (Base) MoneyType Shows the market capitalization converted to the system's default base currency.
  marketcap_base?: number | null;
  // Marketing Only BooleanType Whether is only for marketing
  marketingonly?: boolean | null;
  //  StringType
  masteraccountidname?: string | null;
  //  StringType
  masteraccountidyominame?: string | null;
  // Master ID LookupType Shows the master account that the account was merged with.
  masterid?: import("cdsify").EntityReference | null;
  // Merged BooleanType Shows whether the account has been merged with another account.
  merged?: boolean | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("cdsify").EntityReference | null;
  // Modified By (External Party) LookupType Shows the external party who modified the record.
  modifiedbyexternalparty?: import("cdsify").EntityReference | null;
  //  StringType
  modifiedbyexternalpartyname?: string | null;
  //  StringType
  modifiedbyexternalpartyyominame?: string | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Shows who created the record on behalf of another user.
  modifiedonbehalfby?: import("cdsify").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Managing Partner LookupType Unique identifier for Account associated with Account.
  msa_managingpartnerid?: import("cdsify").EntityReference | null;
  //  StringType
  msa_managingpartneridname?: string | null;
  //  StringType
  msa_managingpartneridyominame?: string | null;
  // KPI LookupType
  msdyn_accountkpiid?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_accountkpiidname?: string | null;
  // Billing Account LookupType Reference to an other account to be used for billing (only to be used if billing account differs)
  msdyn_billingaccount?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_billingaccountname?: string | null;
  //  StringType
  msdyn_billingaccountyominame?: string | null;
  // External ID StringType External Account ID from other systems.
  msdyn_externalaccountid?: string | null;
  // GDPR Optout BooleanType Describes whether account is opted out or not
  msdyn_gdproptout?: boolean | null;
  // Preferred Resource (Deprecated) LookupType
  msdyn_preferredresource?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_preferredresourcename?: string | null;
  // Primary Time Zone IntegerType Indicates the primary time zone that the client works on.
  msdyn_primarytimezone?: number | null;
  // Sales Acceleration Insights ID LookupType Sales Acceleration Insights ID
  msdyn_salesaccelerationinsightid?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_salesaccelerationinsightidname?: string | null;
  // Sales Tax Code LookupType Default Sales Tax Code
  msdyn_salestaxcode?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_salestaxcodename?: string | null;
  // Segment Id LookupType Unique identifier for Segment associated with account.
  msdyn_segmentid?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_segmentidname?: string | null;
  // Service Territory LookupType The Service Territory this account belongs to. This is used to optimize scheduling and routing
  msdyn_serviceterritory?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_serviceterritoryname?: string | null;
  // Tax Exempt BooleanType Select whether the account is tax exempt.
  msdyn_taxexempt?: boolean | null;
  // Tax Exempt Number StringType Shows the government tax exempt number.
  msdyn_taxexemptnumber?: string | null;
  // Travel Charge MoneyType Enter the travel charge to include on work orders. This value will be multiplied by the travel charge type.
  msdyn_travelcharge?: number | null;
  // Travel Charge (Base) MoneyType Value of the Travel Charge in base currency.
  msdyn_travelcharge_base?: number | null;
  // Travel Charge Type msdyn_travelchargetype Specify how travel is charged for this account.
  msdyn_travelchargetype?: import("../enums/msdyn_travelchargetype").msdyn_travelchargetype | null;
  // Work Hour Template LookupType
  msdyn_workhourtemplate?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_workhourtemplatename?: string | null;
  // Work Order Instructions MemoType Shows the default instructions to show on new work orders.
  msdyn_workorderinstructions?: string | null;
  // Customer/Prospect Name [Required] StringType Type the company or business name.
  name?: string;
  // AR Balance MoneyType
  new_aramount?: number | null;
  // AR Balance (Base) MoneyType Value of the AR Balance in base currency.
  new_aramount_base?: number | null;
  // Account Type nmc_accounttype
  nmc_accounttype?: import("../enums/nmc_accounttype").nmc_accounttype | null;
  // AX Party Number StringType
  nmc_axpartynumber?: string | null;
  // Balance MoneyType
  nmc_balance?: number | null;
  // Balance (Base) MoneyType Value of the Balance in base currency.
  nmc_balance_base?: number | null;
  // BNSF Department nmc_bnsfdepartments
  nmc_bnsfdepartment?: import("../enums/nmc_bnsfdepartments").nmc_bnsfdepartments | null;
  // BNSF Division nmc_bnsfdivision
  nmc_bnsfdivision?: import("../enums/nmc_bnsfdivision").nmc_bnsfdivision | null;
  // BNSF Region nmc_bnsfregion
  nmc_bnsfregion?: import("../enums/nmc_bnsfregion").nmc_bnsfregion | null;
  // BNSF Territory nmc_bnsfterritory
  nmc_bnsfterritory?: import("../enums/nmc_bnsfterritory").nmc_bnsfterritory | null;
  // Business Area StringType
  nmc_businessarea?: string | null;
  // Cat Machine Strategy nmc_strategyoptions
  nmc_catmachinestra?: import("../enums/nmc_strategyoptions").nmc_strategyoptions | null;
  // CAT Revenue 2018 MoneyType
  nmc_catrevenue2018?: number | null;
  // CAT Revenue 2018 (Base) MoneyType Value of the CAT Revenue 2018 in base currency.
  nmc_catrevenue2018_base?: number | null;
  // CAT Revenue 2018 (Last Updated On) DateTimeType Last Updated time of rollup field CAT Revenue 2018. DateAndTime:UserLocal
  nmc_catrevenue2018_date?: Date | null;
  // CAT Revenue 2018 (State) IntegerType State of rollup field CAT Revenue 2018.
  nmc_catrevenue2018_state?: number | null;
  // CAT Revenue 2019 MoneyType
  nmc_catrevenue2019?: number | null;
  // CAT Revenue 2019 (Base) MoneyType Value of the CAT Revenue 2019 in base currency.
  nmc_catrevenue2019_base?: number | null;
  // CAT Revenue 2019 (Last Updated On) DateTimeType Last Updated time of rollup field CAT Revenue 2019. DateAndTime:UserLocal
  nmc_catrevenue2019_date?: Date | null;
  // CAT Revenue 2019 (State) IntegerType State of rollup field CAT Revenue 2019.
  nmc_catrevenue2019_state?: number | null;
  // CAT Revenue 2020 MoneyType
  nmc_catrevenue2020?: number | null;
  // CAT Revenue 2020 (Base) MoneyType Value of the CAT Revenue 2020 in base currency.
  nmc_catrevenue2020_base?: number | null;
  // CAT Revenue 2020 (Last Updated On) DateTimeType Last Updated time of rollup field CAT Revenue 2020. DateAndTime:UserLocal
  nmc_catrevenue2020_date?: Date | null;
  // CAT Revenue 2020 (State) IntegerType State of rollup field CAT Revenue 2020.
  nmc_catrevenue2020_state?: number | null;
  // CAT Revenue 2019 MoneyType
  nmc_catrevenueytd?: number | null;
  // CAT Revenue 2019 (Base) MoneyType Value of the CAT Revenue YTD in base currency.
  nmc_catrevenueytd_base?: number | null;
  // CAT Revenue YTD (Last Updated On) DateTimeType Last Updated time of rollup field CAT Revenue YTD. DateAndTime:UserLocal
  nmc_catrevenueytd_date?: Date | null;
  // CAT Revenue YTD (State) IntegerType State of rollup field CAT Revenue YTD.
  nmc_catrevenueytd_state?: number | null;
  // Credit Limit MoneyType
  nmc_creditlimit?: number | null;
  // Credit Limit (Base) MoneyType Value of the Credit Limit in base currency.
  nmc_creditlimit_base?: number | null;
  // Customer Account StringType
  nmc_customeraccount?: string | null;
  // Customer/Prospect Salesperson Relationship LookupType Unique identifier for Customer/Prospect Salesperson Relationship associated with Customer/Prospect.
  nmc_customerprospectsalespersonrelaid?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_customerprospectsalespersonrelaidname?: string | null;
  // Division LookupType
  nmc_division?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_divisionname?: string | null;
  // Duns # StringType
  nmc_duns?: string | null;
  // Material Handling Strategy nmc_strategyoptions
  nmc_materialhandlingstrategy?: import("../enums/nmc_strategyoptions").nmc_strategyoptions | null;
  // Open Orders MoneyType
  nmc_openorders?: number | null;
  // Open Orders (Base) MoneyType Value of the Open Orders in base currency.
  nmc_openorders_base?: number | null;
  // Packing Slip MoneyType
  nmc_packingslip?: number | null;
  // Packing Slip (Base) MoneyType Value of the Packing Slip in base currency.
  nmc_packingslip_base?: number | null;
  // Engines Strategy nmc_strategyoptions
  nmc_pow?: import("../enums/nmc_strategyoptions").nmc_strategyoptions | null;
  // ProspectRecId StringType
  nmc_prospectrecid?: string | null;
  // Rail Customer Category nmc_railcustomercategory
  nmc_railcustomercategory?: import("../enums/nmc_railcustomercategory").nmc_railcustomercategory | null;
  // Remaining Credit Limit MoneyType
  nmc_remainingcreditlimit?: number | null;
  // Remaining Credit Limit (Base) MoneyType Value of the Remaining Credit Limit in base currency.
  nmc_remainingcreditlimit_base?: number | null;
  // Remarketing Strategy nmc_strategyoptions
  nmc_remarketingstrategy?: import("../enums/nmc_strategyoptions").nmc_strategyoptions | null;
  // Rental Contracts MoneyType
  nmc_rentalcontracts?: number | null;
  // Rental Contracts (Base) MoneyType Value of the Rental Contracts in base currency.
  nmc_rentalcontracts_base?: number | null;
  // Rental Services Strategy nmc_strategyoptions
  nmc_rentalservicesstrategy?: import("../enums/nmc_strategyoptions").nmc_strategyoptions | null;
  // Segments account_nmc_account_nmc_segments
  nmc_segments?: import("../enums/account_nmc_account_nmc_segments").account_nmc_account_nmc_segments | null;
  // Send to AX BooleanType
  nmc_sendtoax?: boolean | null;
  // Service Contracts MoneyType
  nmc_servicecontracts?: number | null;
  // Service Contracts (Base) MoneyType Value of the Service Contracts in base currency.
  nmc_servicecontracts_base?: number | null;
  // Service Wip MoneyType
  nmc_servicewip?: number | null;
  // Service Wip (Base) MoneyType Value of the Service Wip in base currency.
  nmc_servicewip_base?: number | null;
  // Shortline Holding Company nmc_shortlineholdingcompany
  nmc_shortlineholdingcompany?: import("../enums/nmc_shortlineholdingcompany").nmc_shortlineholdingcompany | null;
  // Primary SIC Code LookupType
  nmc_siccode?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_siccodename?: string | null;
  // Sitech Technology Strategy nmc_strategyoptions
  nmc_sitechtechnologystrategy?: import("../enums/nmc_strategyoptions").nmc_strategyoptions | null;
  // Subsegments account_nmc_account_nmc_subsegments
  nmc_subsegments?: import("../enums/account_nmc_account_nmc_subsegments").account_nmc_account_nmc_subsegments | null;
  // Vancer BooleanType
  nmc_vancer?: boolean | null;
  // Vancer Railway Systems Strategy nmc_strategyoptions
  nmc_vancerrailwaysystemsstratgey?: import("../enums/nmc_strategyoptions").nmc_strategyoptions | null;
  // Number of Employees IntegerType Type the number of employees that work at the account for use in marketing segmentation and demographic analysis.
  numberofemployees?: number | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  // Open Deals IntegerType Number of open opportunities against an account and its child accounts.
  opendeals?: number | null;
  // Open Deals (Last Updated On) DateTimeType Last Updated time of rollup field Open Deals. DateAndTime:UserLocal
  opendeals_date?: Date | null;
  // Open Deals (State) IntegerType State of rollup field Open Deals.
  opendeals_state?: number | null;
  // Open Revenue MoneyType Sum of open revenue against an account and its child accounts.
  openrevenue?: number | null;
  // Open Revenue (Base) MoneyType Value of the Open Revenue in base currency.
  openrevenue_base?: number | null;
  // Open Revenue (Last Updated On) DateTimeType Last Updated time of rollup field Open Revenue. DateAndTime:UserLocal
  openrevenue_date?: Date | null;
  // Open Revenue (State) IntegerType State of rollup field Open Revenue.
  openrevenue_state?: number | null;
  // Originating Lead LookupType Shows the lead that the account was created from if the account was created by converting a lead in Microsoft Dynamics 365. This is used to relate the account to data on the originating lead for use in reporting and analytics.
  originatingleadid?: import("cdsify").EntityReference | null;
  //  StringType
  originatingleadidname?: string | null;
  //  StringType
  originatingleadidyominame?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
  ownerid?: import("cdsify").EntityReference | null;
  //  StringType
  owneridname?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  //  StringType
  owneridyominame?: string | null;
  // Ownership account_account_ownershipcode Select the account's ownership structure, such as public or private.
  ownershipcode?: import("../enums/account_account_ownershipcode").account_account_ownershipcode | null;
  // Owning Business Unit LookupType Shows the business unit that the record owner belongs to.
  owningbusinessunit?: import("cdsify").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier of the team who owns the account.
  owningteam?: import("cdsify").EntityReference | null;
  // Owning User LookupType Unique identifier of the user who owns the account.
  owninguser?: import("cdsify").EntityReference | null;
  // Parent Account LookupType Choose the parent account associated with this account to show parent and child businesses in reporting and analytics.
  parentaccountid?: import("cdsify").EntityReference | null;
  //  StringType
  parentaccountidname?: string | null;
  //  StringType
  parentaccountidyominame?: string | null;
  // Participates in Workflow BooleanType For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data.
  participatesinworkflow?: boolean | null;
  // Payment Terms account_account_paymenttermscode Select the payment terms to indicate when the customer needs to pay the total amount.
  paymenttermscode?: import("../enums/account_account_paymenttermscode").account_account_paymenttermscode | null;
  // Preferred Day account_account_preferredappointmentdaycode Select the preferred day of the week for service appointments.
  preferredappointmentdaycode?: import("../enums/account_account_preferredappointmentdaycode").account_account_preferredappointmentdaycode | null;
  // Preferred Time account_account_preferredappointmenttimecode Select the preferred time of day for service appointments.
  preferredappointmenttimecode?: import("../enums/account_account_preferredappointmenttimecode").account_account_preferredappointmenttimecode | null;
  // Preferred Method of Contact account_account_preferredcontactmethodcode Select the preferred method of contact.
  preferredcontactmethodcode?: import("../enums/account_account_preferredcontactmethodcode").account_account_preferredcontactmethodcode | null;
  // Preferred Facility/Equipment LookupType Choose the account's preferred service facility or equipment to make sure services are scheduled correctly for the customer.
  preferredequipmentid?: import("cdsify").EntityReference | null;
  //  StringType
  preferredequipmentidname?: string | null;
  // Preferred Service LookupType Choose the account's preferred service for reference when you schedule service activities.
  preferredserviceid?: import("cdsify").EntityReference | null;
  //  StringType
  preferredserviceidname?: string | null;
  // Preferred User LookupType Choose the preferred service representative for reference when you schedule service activities for the account.
  preferredsystemuserid?: import("cdsify").EntityReference | null;
  //  StringType
  preferredsystemuseridname?: string | null;
  //  StringType
  preferredsystemuseridyominame?: string | null;
  // Primary Contact LookupType Choose the primary contact for the account to provide quick access to contact details.
  primarycontactid?: import("cdsify").EntityReference | null;
  //  StringType
  primarycontactidname?: string | null;
  //  StringType
  primarycontactidyominame?: string | null;
  // Primary Satori ID StringType Primary Satori ID for Account
  primarysatoriid?: string | null;
  // Primary Twitter ID StringType Primary Twitter ID for Account
  primarytwitterid?: string | null;
  // Process UniqueidentifierType Shows the ID of the process.
  processid?: import("cdsify").Guid | null;
  // Annual Revenue MoneyType Type the annual revenue for the account, used as an indicator in financial performance analysis.
  revenue?: number | null;
  // Annual Revenue (Base) MoneyType Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
  revenue_base?: number | null;
  // Shares Outstanding IntegerType Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis.
  sharesoutstanding?: number | null;
  // Shipping Method account_account_shippingmethodcode Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option.
  shippingmethodcode?: import("../enums/account_account_shippingmethodcode").account_account_shippingmethodcode | null;
  // SIC Code StringType Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis.
  sic?: string | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the Account record.
  slaid?: import("cdsify").EntityReference | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("cdsify").EntityReference | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  slaname?: string | null;
  // (Deprecated) Process Stage UniqueidentifierType Shows the ID of the stage.
  stageid?: import("cdsify").Guid | null;
  // Status account_account_statecode Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated.
  statecode?: import("../enums/account_account_statecode").account_account_statecode | null;
  // Status Reason account_account_statuscode Select the account's status.
  statuscode?: import("../enums/account_account_statuscode").account_account_statuscode | null;
  // Stock Exchange StringType Type the stock exchange at which the account is listed to track their stock and financial performance of the company.
  stockexchange?: string | null;
  // TeamsFollowed IntegerType Number of users or conversations followed the record
  teamsfollowed?: number | null;
  // Main Phone [Required] StringType Type the main phone number for this account.
  telephone1?: string;
  // Other Phone StringType Type a second phone number for this account.
  telephone2?: string | null;
  // Telephone 3 StringType Type a third phone number for this account.
  telephone3?: string | null;
  // Territory Code account_account_territorycode Select a region or territory for the account for use in segmentation and analysis.
  territorycode?: import("../enums/account_account_territorycode").account_account_territorycode | null;
  // Territory LookupType Choose the sales region or territory for the account to make sure the account is assigned to the correct representative and for use in segmentation and analysis.
  territoryid?: import("cdsify").EntityReference | null;
  //  StringType
  territoryidname?: string | null;
  // Ticker Symbol StringType Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money.
  tickersymbol?: string | null;
  // Time Spent by me StringType Total time spent for emails (read and write) and meetings by me in relation to account record.
  timespentbymeonemailandmeetings?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("cdsify").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version number of the account.
  versionnumber?: number | null;
  // Website StringType Type the account's website URL to get quick details about the company profile.
  websiteurl?: string | null;
  // Yomi Account Name StringType Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications.
  yominame?: string | null;
  // 120  Day Balance MoneyType
  z2t_120daybalance?: number | null;
  // 120  Day Balance (Base) MoneyType Value of the 120  Day Balance in base currency.
  z2t_120daybalance_base?: number | null;
  // 30 Day Balance MoneyType
  z2t_30daybalance?: number | null;
  // 30 Day Balance (Base) MoneyType Value of the 30 Day Balance in base currency.
  z2t_30daybalance_base?: number | null;
  // 60 Day Balance MoneyType
  z2t_60daybalance?: number | null;
  // 60 Day Balance (Base) MoneyType Value of the 60 Day Balance in base currency.
  z2t_60daybalance_base?: number | null;
  // 90 Day Balance MoneyType
  z2t_90daybalance?: number | null;
  // 90 Day Balance (Base) MoneyType Value of the 90 Day Balance in base currency.
  z2t_90daybalance_base?: number | null;
  // Account Creation Reason StringType
  z2t_accountcreationreason?: string | null;
  // Account Status account_z2t_accountstatus
  z2t_accountstatus?: import("../enums/account_z2t_accountstatus").account_z2t_accountstatus | null;
  // Annual Par Goal IntegerType
  z2t_annualpargoal?: number | null;
  // Collector StringType
  z2t_collector?: string | null;
  // Company Chain StringType
  z2t_companychain?: string | null;
  // Competitor Equipment % DecimalType
  z2t_competitorequipmentpercent?: number | null;
  // Competitor Equipment IntegerType
  z2t_competitorequipmentshare?: number | null;
  // Competitor Equipment (Last Updated On) DateTimeType Last Updated time of rollup field Competitor Equipment. DateAndTime:UserLocal
  z2t_competitorequipmentshare_date?: Date | null;
  // Competitor Equipment (State) IntegerType State of rollup field Competitor Equipment.
  z2t_competitorequipmentshare_state?: number | null;
  // Conquest Account StringType
  z2t_conquestaccount?: string | null;
  // Corp Acct Code StringType
  z2t_corpacctcode?: string | null;
  // AX Dataareaid StringType
  z2t_dataareaid?: string | null;
  // Dealer Defined 1 StringType
  z2t_dealerdefined1?: string | null;
  // Dealer Defined 2 StringType
  z2t_dealerdefined2?: string | null;
  // Dealer Defined 3 StringType
  z2t_dealerdefined3?: string | null;
  // Equipment Count IntegerType
  z2t_equipmentcount?: number | null;
  // Equipment Count (Last Updated On) DateTimeType Last Updated time of rollup field Equipment Count. DateAndTime:UserLocal
  z2t_equipmentcount_date?: Date | null;
  // Equipment Count (State) IntegerType State of rollup field Equipment Count.
  z2t_equipmentcount_state?: number | null;
  // Industry LookupType Unique identifier for Industry associated with Account.
  z2t_industryid?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_industryidname?: string | null;
  // Invoicing and Delivery on Hold BooleanType
  z2t_invoicinganddeliveryonhold?: boolean | null;
  // Key Account StringType
  z2t_keyaccount?: string | null;
  // Known As StringType
  z2t_knownas?: string | null;
  // Last Activity DateTimeType DateOnly:UserLocal
  z2t_lastactivity?: Date | null;
  // Our Equipment % DecimalType
  z2t_ourequipmentpercent?: number | null;
  // Our Equipment IntegerType
  z2t_ourequipmentshare?: number | null;
  // Our Equipment (Last Updated On) DateTimeType Last Updated time of rollup field Our Equipment. DateAndTime:UserLocal
  z2t_ourequipmentshare_date?: Date | null;
  // Our Equipment (State) IntegerType State of rollup field Our Equipment.
  z2t_ourequipmentshare_state?: number | null;
  // Over 120 Day Balance MoneyType
  z2t_over120daybalance?: number | null;
  // Over 120 Day Balance (Base) MoneyType Value of the Over 120 Day Balance in base currency.
  z2t_over120daybalance_base?: number | null;
  // % Par Achieved DecimalType
  z2t_parachieved?: number | null;
  // Party StringType
  z2t_party?: string | null;
  // Party A StringType
  z2t_partya?: string | null;
  // Party B StringType
  z2t_partyb?: string | null;
  // Prospect Number StringType
  z2t_prospectaccount?: string | null;
  // Purpose z2t_purpose
  z2t_purpose?: import("../enums/z2t_purpose").z2t_purpose | null;
  // RDD Type StringType
  z2t_rddtype?: string | null;
  // Relationship A to B StringType
  z2t_relationshipatob?: string | null;
  // Segment StringType
  z2t_segment?: string | null;
  // Subsegment StringType
  z2t_subsegment?: string | null;
  // Target Account StringType
  z2t_targetaccount?: string | null;
  // TechnicalCallLog StringType
  z2t_technicalcalllog?: string | null;
  // TEPS Code StringType
  z2t_tepscode?: string | null;
  // Terms Of Payment account_z2t_termsofpayment
  z2t_termsofpayment?: import("../enums/account_z2t_termsofpayment").account_z2t_termsofpayment | null;
  // URLTechLog StringType
  z2t_urltechlog?: string | null;
  // YTD Par Actual IntegerType
  z2t_ytdparactual?: number | null;
  // YTD Par Actual (Last Updated On) DateTimeType Last Updated time of rollup field YTD Par Actual. DateAndTime:UserLocal
  z2t_ytdparactual_date?: Date | null;
  // YTD Par Actual (State) IntegerType State of rollup field YTD Par Actual.
  z2t_ytdparactual_state?: number | null;
  // YTD Par In Progress IntegerType
  z2t_ytdparinprogress?: number | null;
  // YTD Par In Progress (Last Updated On) DateTimeType Last Updated time of rollup field YTD Par In Progress. DateAndTime:UserLocal
  z2t_ytdparinprogress_date?: Date | null;
  // YTD Par In Progress (State) IntegerType State of rollup field YTD Par In Progress.
  z2t_ytdparinprogress_state?: number | null;
}
