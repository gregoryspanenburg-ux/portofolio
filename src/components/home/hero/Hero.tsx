import {Code, Database, GitCompareArrows, Sparkles, Users} from "lucide-react"
import { CodePill } from "@/components/home/hero/CodePill.tsx"
import {LinkPill} from "@/components/home/hero/LinkPill.tsx";
import {TitlePill} from "@/components/home/TitlePill.tsx";

export function Hero(){
    return(
        <header className="pt-50 relative flex flex-col items-center justify-center">
            <span className="absolute top-1/9 left-1/9 size-[10em] bg-primary blur-[120px] animate-float"/>
            <span className="absolute top-4/9 left-4/9 size-[8em] bg-accent blur-[120px] animate-glow"/>
            <span className="absolute top-8/9 left-8/9 size-[10em] bg-secondary blur-[120px] animate-float"/>

            <div className="relative z-10 flex flex-col items-center justify-center">

                <TitlePill Icon={Sparkles} text={"Full Stack Developer"} />

                <h1 className="text-3xl md:text-4xl lg:text-5xl mt-5">Gregory Spanenburg</h1>
                <p className="mt-5 w-90 md:w-full text-center text-gray-300 ">Building <span className="font-bold text-orange-400">robust</span> and <span className="font-bold text-yellow-400">scalable</span> applications with modern technologies</p>
                <p className="mt-4 w-90 md:w-full text-center text-gray-500">
                    Specialized in Java Spring Boot, .NET, Node.js, with a particular passion for React applications
                </p>
                <div className="mt-12 flex flex-wrap gap-2 md:gap-4">
                    <CodePill Icon={Code} color="text-orange-400" programLanguage="Java Spring Boot"/>
                    <CodePill Icon={Database} color="text-yellow-400" programLanguage="Node.js"/>
                    <CodePill Icon={Code} color="text-purple-400" programLanguage=".NET"/>
                </div>
                <div className="mt-12 justify-center flex flex-wrap gap-4">
                    <LinkPill activate={true} Icon={GitCompareArrows} name={"Github"} linkTo="https://github.com/gregoryspanenburg-ux"/>
                    <LinkPill Icon={Users} name={"LinkedIn"} linkTo="https://www.linkedin.com/in/gregory-spanenburg-664b8b1a8/"/>
                </div>
            </div>

        </header>
    )
}