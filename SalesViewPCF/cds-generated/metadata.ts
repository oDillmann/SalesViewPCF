/* eslint-disable*/
import { axa_departmentfulfillmentstatusMetadata } from "./entities/axa_DepartmentfulfillmentStatus";
import { axa_departmentMetadata } from "./entities/axa_Department";
import { axa_salesfulfillmentstatusMetadata } from "./entities/axa_SalesFulfillmentStatus";

export const Entities = {
  axa_DepartmentfulfillmentStatus: "axa_departmentfulfillmentstatus",
  axa_Department: "axa_department",
  axa_SalesFulfillmentStatus: "axa_salesfulfillmentstatus",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    axa_departmentfulfillmentstatus: axa_departmentfulfillmentstatusMetadata,
    axa_department: axa_departmentMetadata,
    axa_salesfulfillmentstatus: axa_salesfulfillmentstatusMetadata,
  },
  actions: {
  }
};