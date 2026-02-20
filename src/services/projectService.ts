import {apiClient} from "@/lib/apiClient.ts";
import type {Project} from "@/model/project.ts";

export async function getAllProjects() {
    const {data: projects} = await apiClient.get<Project[]>('/projects');
    return projects;
}

export async function getProjectById(id: number) {
    const {data: project} = await apiClient.get<Project>(`/projects/${id}`);
    return project;
}