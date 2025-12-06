import { describe, expect, it } from "bun:test";

import { getFeedTrending } from "~/.";

describe("getFeedPosts", () => {
  it("should work with default params", async () => {
    const { feed } = await getFeedTrending();
    expect(feed.meta.offset).toBe(0);
    expect(feed.meta.limit).toBe(12);
    const o = feed.data[0];
    expect(o?.comments).toBeNumber();
    expect(o?.cursor).toBeString();
    expect(o?.is_multiplayer).toBeBoolean();
    expect(o?.likes).toBeNumber();
    expect(o?.project._type).toBe("project");
    expect(o?.project_revision._type).toBe("project_revision");
    expect(o?.remixes).toBeNumber();
    expect(o?.site._type).toBe("site");
    expect(o?.token).toBeNull();
    expect(o?.views).toBeNumber();
  });
});
