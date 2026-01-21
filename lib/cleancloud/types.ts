// CleanCloud API Types

export interface CleanCloudCustomer {
  customerID: number;
  storeID: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  notes?: string;
  createdAt?: string;
}

export interface CleanCloudOrder {
  orderID: number;
  customerID: number;
  storeID: number;
  status: OrderStatus;
  pickupDate?: string;
  pickupTimeSlot?: string;
  deliveryDate?: string;
  deliveryTimeSlot?: string;
  items?: CleanCloudOrderItem[];
  subtotal?: number;
  tax?: number;
  total?: number;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CleanCloudOrderItem {
  itemID: number;
  name: string;
  quantity: number;
  price: number;
  serviceType: string;
}

export type OrderStatus =
  | "pending"
  | "pickup_scheduled"
  | "picked_up"
  | "processing"
  | "cleaning"
  | "ready"
  | "out_for_delivery"
  | "delivered"
  | "completed"
  | "cancelled";

export interface CreateCustomerRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  notes?: string;
}

export interface CreateOrderRequest {
  customerID: number;
  pickupDate: string;
  pickupTimeSlot: string;
  deliveryPreference?: "standard" | "rush";
  serviceType: "wash_fold" | "dry_cleaning" | "bedding" | "mixed";
  estimatedWeight?: number;
  items?: {
    serviceType: string;
    name: string;
    quantity: number;
  }[];
  notes?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

export interface CleanCloudApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PricingInfo {
  serviceType: string;
  pricePerLb?: number;
  pricePerItem?: number;
  minimumOrder?: number;
}

// Order form types
export interface OrderFormData {
  // Step 1: ZIP Code
  zipCode: string;
  region?: string;

  // Step 2: Contact Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;

  // Step 3: Service Selection
  serviceType: "wash_fold" | "dry_cleaning" | "bedding" | "mixed";
  estimatedWeight?: number;
  items?: {
    serviceType: string;
    name: string;
    quantity: number;
  }[];
  addons?: string[];
  notes?: string;

  // Step 4: Schedule
  pickupDate: string;
  pickupTimeSlot: string;
  deliveryPreference: "standard" | "rush";
}

export interface TimeSlot {
  id: string;
  label: string;
  available: boolean;
}

export const TIME_SLOTS: TimeSlot[] = [
  { id: "morning", label: "Morning (8am - 12pm)", available: true },
  { id: "afternoon", label: "Afternoon (12pm - 5pm)", available: true },
  { id: "evening", label: "Evening (5pm - 8pm)", available: true },
];

export const SERVICE_TYPE_LABELS: Record<string, string> = {
  wash_fold: "Wash & Fold",
  dry_cleaning: "Dry Cleaning",
  bedding: "Bedding & Linens",
  mixed: "Mixed Services",
};
