import {cn} from "@/lib/utils.ts";
import type {Category} from "@/model/category.ts";

interface FilterLabelProps{
    projectCategory: Category
}

export function FilterLabel({projectCategory} : FilterLabelProps){
    return(
        <div className={cn("absolute top-4 left-4 z-10 text-xs font-bold py-2 px-4 rounded-full border-1",
            projectCategory.category === 'Professional' && 'border-green-500 bg-green-500/20 text-green-600',
            projectCategory.category === 'Personal' && 'border-blue-500 bg-blue-500/20 text-blue-600',
            projectCategory.category === 'Student' && 'border-purple-500 bg-purple-500/20 text-purple-600',)}>
            {projectCategory.category}
        </div>
    )
}