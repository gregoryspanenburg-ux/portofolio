import { TechnologyPill } from "./TechnologyPill";
import {ArrowRight, SquareArrowOutUpRight} from "lucide-react";
import {FilterLabel} from "@/components/projects/projectcard/FilterLabel.tsx";
import type {Project} from "@/model/project.ts";
import {useCategories} from "@/hooks/useCategory.ts";
import {useTechnologies} from "@/hooks/useTechnology.ts";
import {retrieveCategoryFromId, retrieveTechnologiesFromIds} from "@/helpers/filter.ts";


interface ProjectCardProps {
    onClick: () => void
    project: Project
    className?: string
}

export function ProjectCard({onClick, project, className} : ProjectCardProps) {
    const {categories} = useCategories();
    const {technologies} = useTechnologies();

    const category = retrieveCategoryFromId(categories, project.categoryId)
    const usedTechnologies= retrieveTechnologiesFromIds(technologies, project.usedTechnologies)

    return (
        <div
            className={`flex flex-col rounded-lg bg-gray-900/70 border-1 cursor-pointer group hover:bg-zinc-900/70 hover:border-orange-500 hover:scale-101 transition duration-400 ${className}`}
            onClick={onClick}
        >
                <div className="relative overflow-hidden rounded-t-lg">
                    { category &&
                        <FilterLabel projectCategory={category}/>
                    }
                    <img className="w-full relative z-9 h-50 aspect-video object-cover group-hover:scale-110 transition duration-500" src={project.banner} alt=""/>
                </div>
            <div className="flex flex-col flex-1 p-6">
                <h3 className="mt-2 group-hover:text-orange-400 transition duration-400">{project.title}</h3>
                <p className="mt-4 text-gray-400">{project.description}</p>
                <div className="mt-4 mb-8 flex flex-wrap gap-2">
                    { usedTechnologies.slice(0,3).map(t => (
                        t && (<TechnologyPill technology={t.technology} key={t.id}/>)
                    ))}

                    { usedTechnologies.length > 3 &&
                        <p className="text-gray-600">+ {usedTechnologies.length - 3}</p>
                    }
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <div className="text-orange-400 flex items-center gap-2">
                        <p className="text-sm">View Details</p>
                        <ArrowRight className="group-hover:translate-x-3 transition-transform duration-400" size={16} />
                    </div>
                    <SquareArrowOutUpRight className="text-gray-500 group-hover:text-orange-400 transition duration-400" size={16} />
                </div>
            </div>
        </div>
    )
}