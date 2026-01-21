// CleanCloud Order Operations

import { getCleanCloudClient } from "./client";
import type {
  CleanCloudOrder,
  CleanCloudApiResponse,
  CreateOrderRequest,
} from "./types";

export async function createOrder(
  data: CreateOrderRequest
): Promise<CleanCloudApiResponse<CleanCloudOrder>> {
  const client = getCleanCloudClient();

  return client.post<CleanCloudOrder>("/orders", {
    storeID: client.getStoreId(),
    ...data,
  });
}

export async function getOrder(
  orderId: number
): Promise<CleanCloudApiResponse<CleanCloudOrder>> {
  const client = getCleanCloudClient();

  return client.get<CleanCloudOrder>(`/orders/${orderId}`);
}

export async function getCustomerOrders(
  customerId: number
): Promise<CleanCloudApiResponse<CleanCloudOrder[]>> {
  const client = getCleanCloudClient();

  return client.get<CleanCloudOrder[]>(
    `/orders?customerID=${customerId}&storeID=${client.getStoreId()}`
  );
}

export async function getOrderStatus(
  orderId: number
): Promise<CleanCloudApiResponse<{ status: string; updatedAt: string }>> {
  const client = getCleanCloudClient();

  const response = await client.get<CleanCloudOrder>(`/orders/${orderId}`);

  if (response.success && response.data) {
    return {
      success: true,
      data: {
        status: response.data.status,
        updatedAt: response.data.updatedAt || new Date().toISOString(),
      },
    };
  }

  return {
    success: false,
    error: response.error || "Order not found",
  };
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    pending: "Order Placed",
    pickup_scheduled: "Pickup Scheduled",
    picked_up: "Picked Up",
    processing: "Processing",
    cleaning: "Cleaning",
    ready: "Ready for Delivery",
    out_for_delivery: "Out for Delivery",
    delivered: "Delivered",
    completed: "Completed",
    cancelled: "Cancelled",
  };

  return labels[status] || status;
}

export function getStatusStep(status: string): number {
  const steps: Record<string, number> = {
    pending: 1,
    pickup_scheduled: 1,
    picked_up: 2,
    processing: 3,
    cleaning: 3,
    ready: 4,
    out_for_delivery: 5,
    delivered: 6,
    completed: 6,
    cancelled: -1,
  };

  return steps[status] || 0;
}
