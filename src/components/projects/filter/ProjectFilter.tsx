import {FilterPill} from "@/components/projects/filter/FilterPill.tsx";

export interface FilterPill{
    id: number
    icon: React.ElementType;
    title: string
    amount: number
}

interface ProjectFilterProps{
    className?: string
    pills: FilterPill[]
    selectedFilter: number
    setSelectedFilter: (index: number) => void;
    countedProjects: number[];
}

export function ProjectFilter({selectedFilter, pills,setSelectedFilter, countedProjects, className} : ProjectFilterProps) {

    pills.forEach((p) => {
        p.amount = countedProjects[(p.id)]
    })

    console.log(countedProjects);

    return (
        <div className={`z-49 relative mt-16 flex items-center justify-center gap-4 flex-wrap ${className}`}>
            { pills.map((pill, index) => (
                <FilterPill key={index} Icon={pill.icon} title={pill.title} amount={pill.amount} isSelected={index === selectedFilter} setSelectedFilter={() => {setSelectedFilter(index)}} />
            ))
            }
        </div>
    )
}