import type { Expand } from "../utils";

import type { User } from "./user";

type ProjectAssetMetaByContentType =
  | {
      meta: { version: "1"; in_generation: true };
      content_type: "text/javascript" | "text/css" | "text/html";
    }
  | {
      meta: {
        version: "1";
        description: string;
        title: string;
        transparent?: boolean;
        aspect?: "square";
        in_generation?: false;
        in_generation_asset?: true;
      };
      content_type: "image/png";
    }
  | {
      meta: { version: "1"; duration: number };
      content_type: "audio/mpeg";
    };

export type ProjectAsset = Expand<
  {
    _type: "project_asset";
    id: string;
    project_id: string;
    path: string;
    state: "done";
    created_at: string;
    created_by: User;
    updated_at: string;
    bucket_key: string;
    project_version: number;
    size: number;
    is_liked: boolean;
  } & ProjectAssetMetaByContentType
>;
