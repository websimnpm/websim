import { describe, expect, it } from "bun:test";

import { getUser } from "~/.";

describe("getUser", () => {
  it("should work with username", async () => {
    const data = await getUser("gameroman");
    expect(data.user.id).toBe("b5f6fd12-29d0-4f1f-bf09-538a64794807");
  });

  it("should work with id", async () => {
    const data = await getUser("b5f6fd12-29d0-4f1f-bf09-538a64794807");
    expect(data.user.username).toBe("GameRoMan");
  });
});
