// CleanCloud Customer Operations

import { getCleanCloudClient } from "./client";
import type {
  CleanCloudCustomer,
  CleanCloudApiResponse,
  CreateCustomerRequest,
} from "./types";

export async function createCustomer(
  data: CreateCustomerRequest
): Promise<CleanCloudApiResponse<CleanCloudCustomer>> {
  const client = getCleanCloudClient();

  return client.post<CleanCloudCustomer>("/customers", {
    storeID: client.getStoreId(),
    ...data,
  });
}

export async function getCustomer(
  customerId: number
): Promise<CleanCloudApiResponse<CleanCloudCustomer>> {
  const client = getCleanCloudClient();

  return client.get<CleanCloudCustomer>(`/customers/${customerId}`);
}

export async function findCustomerByEmail(
  email: string
): Promise<CleanCloudApiResponse<CleanCloudCustomer | null>> {
  const client = getCleanCloudClient();

  const response = await client.get<CleanCloudCustomer[]>(
    `/customers?email=${encodeURIComponent(email)}&storeID=${client.getStoreId()}`
  );

  if (response.success && response.data && response.data.length > 0) {
    return { success: true, data: response.data[0] };
  }

  return { success: true, data: null };
}

export async function updateCustomer(
  customerId: number,
  data: Partial<CreateCustomerRequest>
): Promise<CleanCloudApiResponse<CleanCloudCustomer>> {
  const client = getCleanCloudClient();

  return client.post<CleanCloudCustomer>(`/customers/${customerId}`, data);
}
