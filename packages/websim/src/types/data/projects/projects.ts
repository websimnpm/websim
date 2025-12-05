import type { Project, ProjectRevision, Site } from "@websimai/core-api-types";
import type { WithIncluded } from "../../lib/utils";
import type { Meta } from "../meta";

export type ProjectInfo = {
  project: Project;
  project_revision: ProjectRevision | null;
  site: Site | null;
  token: null;
  cursor: string;
};

export type ProjectData = WithIncluded<ProjectInfo>;

export type ProjectsData = WithIncluded<{
  projects: {
    data: ProjectInfo[];
    meta: Meta;
  };
}>;
