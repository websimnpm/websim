import { WebsimSocket as WebsimSocketClass } from "./websim-socket";

type WebsimSocketConstructor = typeof WebsimSocketClass;

declare global {
  interface Window {
    readonly WebsimSocket: WebsimSocketConstructor;
  }

  const WebsimSocket: WebsimSocketConstructor;

  type WebsimSocket = WebsimSocketClass;
}
