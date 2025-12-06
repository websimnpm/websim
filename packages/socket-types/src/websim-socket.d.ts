import type { KeyValue } from "./types/utils";

import type { WebsimSocketParty } from "./websim-socket-party";

import type { CollectionAPI, Peers, QueryAPI } from "./types";

export class WebsimSocket {
  constructor();

  readonly CONNECTING: 0;
  readonly OPEN: 1;
  readonly CLOSING: 2;
  readonly CLOSED: 3;

  readonly binaryType: "arraybuffer" | (string & {});
  readonly bufferedAmount: number;
  readonly extensions: string;
  readonly protocol: "ws" | "wss";
  readonly readyState: 0 | 1 | 2 | 3;
  readonly url: string;

  accept(): void;
  serializeAttachment(): void;
  deserializeAttachment(): void;

  onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
  onerror: ((this: WebSocket, ev: Event) => any) | null;
  onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
  onopen: ((this: WebSocket, ev: Event) => any) | null;

  dispatchEvent(event: Event | MessageEvent | CloseEvent | ErrorEvent): boolean;

  close(_code?: number, _reason?: string): void;
  send<TData extends string | object>(data: TData): void;

  query<TParams extends unknown = unknown>(
    queryString: string,
    params?: TParams[],
  ): QueryAPI;

  collection<T extends string>($type: T): CollectionAPI<T>;

  readonly clientId: string;

  /**
   * Object containing information about the connected client and their peers.
   */
  readonly party: WebsimSocketParty;

  /**
   * Legacy event handler for changes in connected peers.
   * @param peers An object with client IDs as keys, each containing the client's avatar URL and username.
   */
  onPeersChanged: ((peers: Peers) => any) | null;

  /**
   * Initialize the WebSocket connection.
   * @returns A promise that resolves when initialization is complete.
   */
  initialize(): Promise<void>;

  /**
   * Request a presence update from a specific client.
   * @param clientId The ID of the client to request an update from.
   * @param update The update to request.
   */
  requestPresenceUpdate(clientId: string, update: KeyValue): void;

  /**
   * Subscribe to presence update requests from other clients.
   * @param callback Function to call when a presence update is requested.
   * @returns Function to unsubscribe.
   */
  subscribePresenceUpdateRequests<TUpdateRequest extends KeyValue>(
    callback: (updateRequest: TUpdateRequest, fromClientId: string) => void,
  ): () => void;

  /**
   * Updates the room-wide state. This merges with existing state.
   * @param delta The new state to merge with current room state.
   */
  updateRoomState<TDelta extends KeyValue>(delta: TDelta): void;

  /**
   * Subscribe to room state updates.
   * @param callback Function to call when room state changes.
   * @returns Function to unsubscribe.
   */
  subscribeRoomState<TRoomState extends KeyValue>(
    callback: (state: TRoomState) => void,
  ): () => void;

  /**
   * Object containing the current presence state of all connected peers, including this client.
   * This is always up-to-date after initialization.
   */
  readonly presence: { [clientId: string]: KeyValue };

  /**
   * Object containing the current room-wide state.
   * This is always up-to-date.
   */
  readonly roomState: KeyValue;

  /**
   * Object containing all connected peers, including this client.
   * This is always up-to-date.
   */
  readonly peers: Peers;

  /**
   * Updates the current client's presence state.
   * @param presence The new presence state to set.
   */
  updatePresence<TPresence extends KeyValue>(presence: TPresence): void;

  /**
   * Subscribe to presence updates from all peers.
   * @param callback Function to call when presence changes.
   * @returns Function to unsubscribe.
   */
  subscribePresence<TPresence extends KeyValue>(
    callback: (presence: { [clientId: string]: TPresence }) => void,
  ): () => void;
}
