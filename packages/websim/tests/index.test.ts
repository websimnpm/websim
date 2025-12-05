import { describe, it, expect } from "bun:test";

import { api } from "~/.";

describe("api", () => {
  it("should work", async () => {
    const data = await api.users.byId("gameroman").getUser();
    expect(data.user.id).toBe("b5f6fd12-29d0-4f1f-bf09-538a64794807");
  });

  it("should work", async () => {
    const data = await api.users
      .byId("b5f6fd12-29d0-4f1f-bf09-538a64794807")
      .getUser();
    expect(data.user.username).toBe("GameRoMan");
  });
});
