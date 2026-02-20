import {useQuery} from "@tanstack/react-query";
import {getAllCategories} from "@/services/categoryService.ts";

export function useCategories(){
    const {isLoading, isError, data: categories} = useQuery({
        queryKey: ["categories"],
        queryFn: () => getAllCategories()
    })

    return {
        isLoading,
        isError,
        categories
    }
}