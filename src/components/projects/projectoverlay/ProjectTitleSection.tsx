import {cn} from "@/lib/utils.ts";
import type {Category} from "@/model/category.ts";

interface ProjectTitleSectionProps{
    title: string
    projectCategory: Category
    className?: string
}

export function ProjectTitleSection({title, projectCategory, className}: ProjectTitleSectionProps) {
    return (
        <div className={`mt-14 mb-4 flex gap-2 ${className}`}>
            <span className={cn('w-1 rounded-full bg-green-400',
                projectCategory.category === 'Professional' && 'bg-green-400',
                projectCategory.category === 'Personal' && 'bg-blue-400',
                projectCategory.category === 'Student' && 'bg-purple-400',
                )}></span>
            <h3>{title}</h3>
        </div>
    )
}