import {useQuery} from "@tanstack/react-query";
import {getAllTechnologies} from "@/services/technologyService.ts";

export function useTechnologies(){
    const {isLoading, isError, data: technologies} = useQuery({
        queryKey: ["technologies"],
        queryFn: () => getAllTechnologies()
    });

    return {
        isLoading,
        isError,
        technologies
    }
}