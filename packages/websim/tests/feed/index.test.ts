import { describe, expect, it } from "bun:test";

import { getFeedPosts, getFeedTrending, searchFeed } from "#client/feed";

describe("getFeedPosts", () => {
  it("should work with default params", async () => {
    const { data } = await getFeedPosts();
    expect(data).toBeArrayOfSize(12);
    const c = data[0]?.comment;
    expect(c?.author._type).toBe("user");
    expect(c?.author_id).toBeString();
    expect(c?.card_data?.type).toBeOneOf([
      "project_post",
      "tip_comment",
      undefined,
    ]);
    expect(c?.content?.type).toBe("document");
    expect(c?.created_at).toBeString();
    expect(c?.deleted).toBeBoolean();
    expect(c?.id).toBeString();
    expect(c?.pinned).toBeBoolean();
    expect(c?.post_presentation).toContainKey("type");
    expect(c?.post_presentation?.type).toBeOneOf(["tweet", "video"]);
    expect(c?.project_data).toBeNull();
    expect(c?.project_id).toBeString();
    expect(c?.project_post_project_id).toBeString();
    expect(c?.raw_content).toBeString();
    expect(c?.reactions).toBeArray();
    expect(c?.reply_count).toBeInteger();
    expect(c?.reply_to_data).toBeNull();
    expect(c?.source).toBe("comments");
    expect(c?.type).toBe("text");
  });
});

describe("getFeedTrending", () => {
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

describe("searchFeed", () => {
  it("should work", async () => {
    const { feed } = await searchFeed("best", "game");
    expect(feed.meta.offset).toBe(0);
    expect(feed.meta.limit).toBe(12);
    const o = feed.data[0];
    expect(o?.comments).toBeNumber();
    expect(o?.cursor).toBeString();
    expect(o?.likes).toBeNumber();
    expect(o?.project._type).toBe("project");
    expect(o?.project_revision._type).toBe("project_revision");
    expect(o?.remixes).toBeNumber();
    expect(o?.site._type).toBe("site");
    expect(o?.token).toBeNull();
    expect(o?.views).toBeNumber();
  });
});
