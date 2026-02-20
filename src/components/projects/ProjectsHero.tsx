import {TitlePill} from "@/components/home/TitlePill.tsx";
import {Layers} from "lucide-react";

interface ProjectsHeroProps {
    className?: string;
}

export function ProjectsHero({className} : ProjectsHeroProps) {
    return (
        <div className={`relative ${className}`}>
            <span className="absolute top-3/9 left-4/9 size-[8em] bg-primary blur-[120px] animate-glow"/>
            <span className="absolute top-9/9 left-1/9 size-[8em] bg-secondary blur-[120px] animate-glow"/>
            <span className="absolute top-1/9 right-1/9 size-[8em] bg-accent blur-[120px] animate-glow"/>

            <div className="relative z-10 flex flex-col items-center justify-center">
                <TitlePill Icon={Layers} text={"Portfolio"} />
                <h1 className="text-3xl md:text-4xl lg:text-5xl mt-5">Featured Projects</h1>
                <p className="mt-4 w-90 md:w-full text-center text-gray-500">
                    A collection of my work across professional, personal, and academic projects
                </p>
            </div>
        </div>
    )
}