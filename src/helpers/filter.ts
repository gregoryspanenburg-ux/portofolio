import type {Category} from "@/model/category.ts";
import type {Technology} from "@/model/technology.ts";

export function retrieveCategoryFromId(categories: Category[] | undefined, categoryId: number){
    return categories?.find(c => c.id === categoryId);
}

export function retrieveTechnologiesFromIds(technologies: Technology[] | undefined, technologyIds: number[]){
    return technologyIds?.map((technologyId) => {
        return technologies?.find(t => t.id === technologyId)
    })
}