export type AnonymousWebsimUser = {
  readonly id: "1";
  readonly username: "anonymous";
  readonly avatar_url: null;
};

export type WebsimUser = {
  readonly id: string;
  readonly username: string;
  readonly avatar_url: `https://${string}/${string}` | null;
};

export type WebsimUserOrAnonymous = WebsimUser | AnonymousWebsimUser;
