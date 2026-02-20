import {Briefcase, GraduationCap, Heart} from "lucide-react";
import {cn} from "@/lib/utils.ts";
import type {Category} from "@/model/category.ts";


interface FilterPillProps{
    projectCategory: Category;
    className?: string
}

export function FilterPill({projectCategory, className} : FilterPillProps) {
    return (
        <div className={cn(`flex items-center gap-2 text-xs py-1 px-3 border-1 rounded-full w-fit ${className}`,
            projectCategory.category === 'Professional' && 'border-green-500 bg-green-500/10 text-green-400',
            projectCategory.category === 'Personal' && 'border-blue-500 bg-blue-500/10 text-blue-400',
            projectCategory.category === 'Student' && 'border-purple-500 bg-purple-500/10 text-purple-400',
            )}>
            {iconByFilterCategory(projectCategory.category)}
            {projectCategory.category} Project
        </div>
    )
}

function iconByFilterCategory(category: string){

    switch(category){
        case 'Professional':
            return (<Briefcase size={12}/>)
        case 'Personal':
            return (<Heart size={12}/>)
        case 'Student':
            return (<GraduationCap size={12}/>)
    }
}