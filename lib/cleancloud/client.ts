// CleanCloud API Client with Rate Limiting
// CleanCloud Grow: 50k requests/mo, 3 req/sec

import type { CleanCloudApiResponse } from "./types";

const CLEANCLOUD_API_URL = "https://api.cleancloud.com/api/v2";
const RATE_LIMIT_DELAY = 350; // ~3 requests per second

let lastRequestTime = 0;

async function rateLimitedFetch(
  endpoint: string,
  options: RequestInit
): Promise<Response> {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;

  if (timeSinceLastRequest < RATE_LIMIT_DELAY) {
    await new Promise((resolve) =>
      setTimeout(resolve, RATE_LIMIT_DELAY - timeSinceLastRequest)
    );
  }

  lastRequestTime = Date.now();

  const response = await fetch(`${CLEANCLOUD_API_URL}${endpoint}`, options);
  return response;
}

export class CleanCloudClient {
  private apiKey: string;
  private storeId: string;

  constructor() {
    const apiKey = process.env.CLEANCLOUD_API_KEY;
    const storeId = process.env.CLEANCLOUD_STORE_ID;

    if (!apiKey || !storeId) {
      throw new Error("CleanCloud API credentials not configured");
    }

    this.apiKey = apiKey;
    this.storeId = storeId;
  }

  private getHeaders(): HeadersInit {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    };
  }

  async get<T>(endpoint: string): Promise<CleanCloudApiResponse<T>> {
    try {
      const response = await rateLimitedFetch(endpoint, {
        method: "GET",
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        return {
          success: false,
          error: error.message || `HTTP ${response.status}`,
        };
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async post<T>(endpoint: string, body: unknown): Promise<CleanCloudApiResponse<T>> {
    try {
      const response = await rateLimitedFetch(endpoint, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        return {
          success: false,
          error: error.message || `HTTP ${response.status}`,
        };
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  getStoreId(): string {
    return this.storeId;
  }
}

// Singleton instance
let clientInstance: CleanCloudClient | null = null;

export function getCleanCloudClient(): CleanCloudClient {
  if (!clientInstance) {
    clientInstance = new CleanCloudClient();
  }
  return clientInstance;
}
