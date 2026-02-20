import {useQuery} from "@tanstack/react-query";
import {getAllProjects, getProjectById} from "@/services/projectService.ts";

export function useProjects(){
    const {isLoading, isError, data: projects } = useQuery({
        queryKey: ["projects"],
        queryFn: () => getAllProjects()
    })

    return {
        isLoading,
        isError,
        projects
    };
}

export function useProject(id : number){
    const {isLoading, isError, data: project} = useQuery({
        queryKey: ["projects", id],
        queryFn: () => getProjectById(id)
    })

    return {
        isLoading,
        isError,
        project
    }
}