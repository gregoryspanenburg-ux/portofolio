import {FilterPill} from "@/components/projects/projectoverlay/FilterPill.tsx";
import {SquareArrowOutUpRight, X} from "lucide-react";
import {ProjectTitleSection} from "@/components/projects/projectoverlay/ProjectTitleSection.tsx";
import {TechnologyPill} from "@/components/projects/projectcard/TechnologyPill.tsx";
import {useProject} from "@/hooks/useProject.ts";
import {useCategories} from "@/hooks/useCategory.ts";
import {useTechnologies} from "@/hooks/useTechnology.ts";
import {retrieveCategoryFromId, retrieveTechnologiesFromIds} from "@/helpers/filter.ts";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {ImageOverlay} from "@/components/util/ImageOverlay.tsx";
import {useState} from "react";


interface ProjectOverlayProps {
    projectId: number
    onClose: () => void
    className?: string
}

export function ProjectOverlay({projectId, onClose, className}: ProjectOverlayProps) {
    const {isLoading, isError, project} = useProject(projectId);
    const {categories} = useCategories();
    const {technologies} = useTechnologies();

    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    if(isLoading) {
        return <div>Loading ...</div>
    }

    if(isError){
        return <div>Error occured</div>
    }

    const category = retrieveCategoryFromId(categories, project!.categoryId)
    const usedTechnologies= retrieveTechnologiesFromIds(technologies, project!.usedTechnologies)
    const detail = project!.detail;


    return (
        <div className={`fixed p-1 md:p-6 inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm ${className}`}>
            <div className="relative w-full overflow-x-hidden md:w-[90%] overflow-y-auto h-full max-h-full rounded-2xl md:rounded-l-2xl border-1 border-slate-700/60 bg-zinc-950/70">
                <div className="sticky z-50 top-0 bg-zinc-900/70 backdrop-blur p-6">
                    <div className="flex items-center justify-between">
                        { category && (
                            <FilterPill projectCategory={category}/>
                        )
                        }
                        <X
                            className="text-gray-700 cursor-pointer hover:scale-110 hover:text-gray-400 transition duration-500"
                            onClick={onClose}
                        />
                    </div>
                    <h2 className="mt-4">{project?.title}</h2>
                </div>
                <div className="p-6">
                    <Carousel className="w-[100%] md:w-[50%] mx-auto">
                        <CarouselContent>
                            <CarouselItem>
                                <img onClick={() => {
                                    setSelectedImage(project!.banner)
                                    setShowOverlay(true);
                                }} className="cursor-pointer aspect-video object-contain mx-auto rounded-2xl" src={project?.banner} alt=""/>
                            </CarouselItem>

                            { project?.images.map((img, index) => (
                                <CarouselItem key={index}>
                                    <img onClick={() => {
                                        setSelectedImage(img)
                                        setShowOverlay(true);
                                    }} className="cursor-pointer aspect-video object-contain mx-auto rounded-2xl" src={img} alt=""/>
                                </CarouselItem>
                            ))

                            }
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                    <p className="mt-4 md:mt-0 text-xs text-gray-500">Made on: {project?.madeOn}</p>

                    {category && detail.map((d, index) => (
                        <>
                            <ProjectTitleSection key={index} title={d.title} projectCategory={category}/>
                            { d.paragraphs.map(p => (
                                <p className="mt-4 text-justify">{p}</p>
                            ))
                            }
                        </>

                    ))
                    }

                    <div className="mt-8 flex flex-wrap gap-2">
                        { usedTechnologies?.map((t, index) => (
                            t && (<TechnologyPill key={index} technology={t.technology}/>)
                        ))
                        }

                    </div>
                    <div className="mt-12 flex gap-4">
                        <div className="relative w-fit group">
                            <div className="absolute z-1 inset-0 rounded-2xl bg-gradient-to-l from-yellow-400 to-orange-500 group-hover:blur transition duration-500">qdf</div>
                            <a href={project?.githubUrl} target="_blank">
                                <div className="relative z-2 px-8 py-4  flex items-center justify-center gap-4 bg-gradient-to-l from-orange-500 to-yellow-400 rounded-2xl cursor-pointer group-hover:from-yellow-400 group-hover:to-orange-500 transition duration-500">
                                    <SquareArrowOutUpRight/>
                                    View on GitHub
                                </div>
                            </a>

                        </div>

                        <div
                            className="relative flex items-center justify-center cursor-pointer z-2 px-8 py-4 bg-neutral-950 rounded-2xl border-1 border-slate-700/40  hover:border-orange-700 transition duration-500"
                            onClick={onClose}
                        >
                            Close
                        </div>
                    </div>

                </div>
            </div>

            { showOverlay && (
                <ImageOverlay onClose={() => setShowOverlay(false)} imgUrl={selectedImage}/>
            )
            }

        </div>
    )
}