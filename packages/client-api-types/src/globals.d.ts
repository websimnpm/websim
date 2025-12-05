import type { WebsimClientAPI } from "./client-api";

declare global {
  interface Window {
    readonly websim: WebsimClientAPI;
  }

  const websim: WebsimClientAPI;
}
