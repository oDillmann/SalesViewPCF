/* eslint-disable*/
import { axa_dealsetupformMetadata } from "./entities/axa_DealSetupForm";
import { axa_departmentfulfillmentstatusMetadata } from "./entities/axa_DepartmentfulfillmentStatus";
import { axa_departmentMetadata } from "./entities/axa_Department";
import { axa_salesfulfillmentstatusMetadata } from "./entities/axa_SalesFulfillmentStatus";
import { opportunityMetadata } from "./entities/Opportunity";

export const Entities = {
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
    axa_dealsetupform: axa_dealsetupformMetadata,
    axa_departmentfulfillmentstatus: axa_departmentfulfillmentstatusMetadata,
    axa_department: axa_departmentMetadata,
    axa_salesfulfillmentstatus: axa_salesfulfillmentstatusMetadata,
    opportunity: opportunityMetadata,
  },
  actions: {
  }
};