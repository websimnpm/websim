import type {
  Project,
  ProjectRevision,
  Site,
  User,
} from "@websimai/core-api-types";
import type { Meta } from "../meta";

export type ProjectLikedInfo = {
  project: Project;
  project_revision: ProjectRevision | null;
  site: Site | null;
  like: {
    site_id: string;
    user: User;
    created_at: string;
  };
  cursor: string;
};

export type UsersLikesProjectsData = {
  likes: { data: ProjectLikedInfo[] };
  meta: Meta;
};
