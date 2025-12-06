import type {
  Project,
  ProjectAsset,
  ProjectRevision,
  Screenshot,
  Site,
} from "@websimai/core-api-types";
import { get } from "~/api";
import type { ProjectData } from "~/types";
import type { DataWithMeta, Expand } from "~/types/utils";

export type ProjectsRevisionData = {
  readonly cursor: string;
  readonly project_revision: ProjectRevision;
  readonly site: Site;
};

export type ProjectsRevisionsData = Expand<
  DataWithMeta<"revisions", ProjectsRevisionData[]> & {
    readonly project: Project;
    readonly token: null;
  }
>;

/**
 * https://api.websim.com/api/v1/projects/${projectId}/revisions
 */
export async function getProjectRevisions(
  projectId: string,
  params?: { first?: number },
) {
  const path = `/projects/${projectId}/revisions`;
  return get<ProjectsRevisionsData>({ path, params });
}

/**
 * https://api.websim.com/api/v1/projects/${projectId}/revisions/${version}
 */
export async function getProjectRevision(projectId: string, version: string) {
  const path = `/projects/${projectId}/revisions/${version}`;
  return get<ProjectData>({ path });
}

export type ProjectsAssetsData = {
  readonly assets: readonly ProjectAsset[];
};

/**
 * https://api.websim.com/api/v1/projects/${projectId}/revisions/${version}/assets
 */
export async function getProjectRevisionAssets(
  projectId: string,
  version: string,
) {
  const path = `/projects/${projectId}/revisions/${version}/assets`;
  return get<ProjectsAssetsData>({ path });
}

export type ProjectsScreenshotsData = {
  readonly screenshots: readonly Screenshot[];
};

/**
 * https://api.websim.com/api/v1/projects/${projectId}/revisions/${version}/screenshots
 */
export async function getProjectRevisionScreenshots(
  projectId: string,
  version: string,
) {
  const path = `/projects/${projectId}/revisions/${version}/screenshots`;
  return get<ProjectsScreenshotsData>({ path });
}

/**
 * https://api.websim.com/api/v1/projects/${projectId}/revisions/${version}/html
 */
export async function getProjectRevisionHTML(
  projectId: string,
  version: string,
) {
  const path = `/projects/${projectId}/revisions/${version}/html`;
  return get<string>({ path });
}
