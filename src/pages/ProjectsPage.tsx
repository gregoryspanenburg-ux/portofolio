import {ProjectsHero} from "@/components/projects/ProjectsHero.tsx";
import {useEffect, useState} from "react";
import {type FilterPill, ProjectFilter} from "@/components/projects/filter/ProjectFilter.tsx";
import {ProjectCard} from "@/components/projects/projectcard/ProjectCard.tsx";
import {ProjectOverlay} from "@/components/projects/projectoverlay/ProjectOverlay.tsx";
import {useProjects} from "@/hooks/useProject.ts";
import {BriefcaseBusiness, GraduationCap, Heart, Layers} from "lucide-react";
import type {Project} from "@/model/project.ts";
import {SkeletonProjectCard} from "@/components/projects/projectcard/SkeletonProjectCard.tsx";



const pills: FilterPill[] = [
    { id:0, icon: Layers, title: "All Projects", amount: 0 },
    { id:1, icon: BriefcaseBusiness, title: "Professional", amount: 0 },
    { id:2, icon: Heart, title: "Personal", amount: 0 },
    { id:3, icon: GraduationCap, title: "Student Years", amount: 0 },
]


export function ProjectsPage() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(0);
    const [selectecProject, setSelectecProject] = useState(0);
    const {projects, isLoading} = useProjects();

    useEffect(() => {
        if(showOverlay){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return  () => {
            document.body.style.overflow = "";
        }
    }, [showOverlay]);

    console.log(isLoading);
    console.log("projects", projects);


    if(isLoading) return <LoadingProjectPage/>


    return(
        <div className="pt-50 relative">
            <ProjectsHero/>
            <ProjectFilter pills={pills} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}
                           countedProjects={countProjectPerCategory(projects!)} />
            <div className="mt-16 px-4 md:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {projects?.filter(p => {
                    if(selectedFilter == 0){
                        return true
                    } else{
                        return p.categoryId == selectedFilter
                    }
                }).map(p => (
                    <ProjectCard
                        project={p}
                        onClick={() => {
                            setSelectecProject(p.id)
                            setShowOverlay(true);
                    }}/>
                ))}


            </div>
            { showOverlay && (
                <ProjectOverlay projectId={selectecProject} onClose={() => {
                    setShowOverlay(false);
                }}/>
            )
            }


        </div>
    )
}

function LoadingProjectPage(){
    return (
        <div className="pt-50 relative">
            <ProjectsHero/>
            <div className="mt-16 px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <SkeletonProjectCard/>
                <SkeletonProjectCard/>
                <SkeletonProjectCard/>
            </div>
        </div>
    )
}

function countProjectPerCategory(projects: Project[]) {
    const countedProjects: number[] = pills.map((fp) => {
        return projects?.filter(p => p.categoryId == fp.id).length;
    })

    countedProjects[0] = projects?.length

    return countedProjects;
}
