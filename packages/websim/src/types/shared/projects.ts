import type { Project, ProjectRevision, Site } from "@websimai/core-api-types";
import type { DataWithMeta, WithIncluded } from "../utils";

export type ProjectInfo = {
  readonly project: Project;
  readonly project_revision: ProjectRevision | null;
  readonly site: Site | null;
  readonly token: null;
  readonly cursor: string;
};

export type ProjectData = WithIncluded<ProjectInfo>;

export type ProjectsData = WithIncluded<
  DataWithMeta<"projects", ProjectInfo[]>
>;
