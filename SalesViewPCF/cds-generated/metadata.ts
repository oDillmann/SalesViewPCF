/* eslint-disable*/
import { accountMetadata } from "./entities/Account";
import { axa_catcustomeridtranslateMetadata } from "./entities/axa_CATCustomerIDTranslate";
import { axa_dataauthorizationgovernanceindicatorflagMetadata } from "./entities/axa_DATAAUTHORIZATIONGOVERNANCEIndicatorFlag";
import { axa_dealsetupformMetadata } from "./entities/axa_DealSetupForm";
import { axa_departmentfulfillmentstatusMetadata } from "./entities/axa_DepartmentfulfillmentStatus";
import { axa_departmentMetadata } from "./entities/axa_Department";
import { axa_salesfulfillmentstatusMetadata } from "./entities/axa_SalesFulfillmentStatus";
import { opportunityMetadata } from "./entities/Opportunity";

export const Entities = {
  Account: "account",
  axa_CATCustomerIDTranslate: "axa_catcustomeridtranslate",
  axa_DATAAUTHORIZATIONGOVERNANCEIndicatorFlag: "axa_dataauthorizationgovernanceindicatorflag",
  axa_DealSetupForm: "axa_dealsetupform",
  axa_DepartmentfulfillmentStatus: "axa_departmentfulfillmentstatus",
  axa_Department: "axa_department",
  axa_SalesFulfillmentStatus: "axa_salesfulfillmentstatus",
  Opportunity: "opportunity",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    account: accountMetadata,
    axa_catcustomeridtranslate: axa_catcustomeridtranslateMetadata,
    axa_dataauthorizationgovernanceindicatorflag: axa_dataauthorizationgovernanceindicatorflagMetadata,
    axa_dealsetupform: axa_dealsetupformMetadata,
    axa_departmentfulfillmentstatus: axa_departmentfulfillmentstatusMetadata,
    axa_department: axa_departmentMetadata,
    axa_salesfulfillmentstatus: axa_salesfulfillmentstatusMetadata,
    opportunity: opportunityMetadata,
  },
  actions: {
  }
};