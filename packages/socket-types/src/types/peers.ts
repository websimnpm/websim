export type Peers = {
  readonly [clientId: string]: {
    readonly avatarUrl: string;
    readonly username: string;
  };
};
