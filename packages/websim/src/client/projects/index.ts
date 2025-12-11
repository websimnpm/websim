import { get } from "~/api";

import type { ProjectData, ProjectsData } from "~/types";

export * from "./comments";
export * from "./revisions";
export * from "./stats";

/**
 * `https://api.websim.com/api/v1/projects/${projectId}`
 */
export async function getProject(projectId: string): Promise<ProjectData> {
  const path = `/projects/${projectId}`;
  return get<ProjectData>({ path });
}

/**
 * `https://api.websim.com/api/v1/projects/${projectId}/descendants`
 */
export async function getDescendants(projectId: string): Promise<ProjectsData> {
  const path = `/projects/${projectId}/descendants`;
  return get<ProjectsData>({ path });
}

/**
 * `https://api.websim.com/api/v1/projects`
 */
export async function listPublicProjects(params?: {
  first?: number;
  query?: string;
  sort_by?: "updated_at" | "created_at";
  posted?: boolean;
}): Promise<ProjectsData> {
  const path = `/projects`;
  return get<ProjectsData>({ path, params });
}
