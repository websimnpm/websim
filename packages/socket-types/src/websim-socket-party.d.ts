import type { KeyValue } from "./types/utils";

export interface WebsimSocketParty {
  /**
   * Object containing the client ID, avatar URL, and username of this connected client.
   */
  readonly client: {
    readonly id: string;
    readonly avatarUrl: `https://${string}/${string}`;
    readonly username: string;
  };

  /**
   * Object containing all connected peers, including this client.
   * This is always up-to-date.
   */
  readonly peers: {
    [id: string]: {
      readonly avatarUrl: `https://${string}/${string}`;
      readonly username: string;
      readonly id: string;
      readonly is_anonymous: boolean;
    };
  };

  subscribe: (
    callback: (peers: {
      [clientId: string]: {
        avatarUrl: string;
        username: string;
      };
    }) => void
  ) => () => void;

  /**
   * Object containing the current presence state of all connected peers, including this client.
   * This is always up-to-date after initialization.
   */
  readonly presence: KeyValue;

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
    callback: (presence: { [clientId: string]: TPresence }) => void
  ): () => void;

  /**
   * Object containing the current room-wide state.
   * This is always up-to-date.
   */
  readonly roomState: KeyValue;
}
