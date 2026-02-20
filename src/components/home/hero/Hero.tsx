import {Atom, Brain, Code, Database, GitCompareArrows, Mail, Sparkles, Users} from "lucide-react"
import { CodePill } from "@/components/home/hero/CodePill.tsx"
import {LinkPill} from "@/components/home/hero/LinkPill.tsx";
import {TitlePill} from "@/components/home/TitlePill.tsx";
import {TechnologyCard} from "@/components/home/hero/TechnologyCard.tsx";

export function Hero(){
    return(
        <header className="pt-40 relative flex flex-col items-center justify-center">
            <span className="absolute top-1/9 left-1/9 size-[10em] bg-primary blur-[120px] animate-float"/>
            <span className="absolute top-4/9 left-4/9 size-[8em] bg-accent blur-[120px] animate-glow"/>
            <span className="absolute top-8/9 left-8/9 size-[10em] bg-secondary blur-[120px] animate-float"/>

            <div className="relative z-10 md:w-full md:h-[70vh]">
                <div className="md:flex md:justify-between md:h-[90%] md:mx-auto md:w-[85%]">
                    <div className="flex md:flex-1 flex-col items-center lg:items-start justify-center">
                        <TitlePill className="animate-float" Icon={Sparkles} text={"Full Stack Developer"} />
                        <h1 className="text-3xl md:text-4xl lg:text-5xl mt-5">Gregory Spanenburg</h1>
                        <p className="mt-5 w-90 md:w-full text-center lg:text-left text-gray-300 ">Building <span className="font-bold text-orange-400">robust</span> and <span className="font-bold text-yellow-400">scalable</span> applications with modern technologies</p>
                        <p className="mt-4 w-90 lg:hidden text-center text-gray-500">
                            Specialized in Java Spring Boot, .NET, Node.js, with a particular passion for React applications
                        </p>
                        <div className="mt-12 flex flex-wrap gap-2 sm:gap-4 lg:hidden">
                            <CodePill Icon={Code} color="text-orange-400" programLanguage="Java Spring Boot"/>
                            <CodePill Icon={Database} color="text-yellow-400" programLanguage="Node.js"/>
                            <CodePill Icon={Code} color="text-purple-400" programLanguage=".NET"/>
                        </div>
                        <div className="mt-12 justify-center flex flex-wrap gap-4">
                            <LinkPill activate={true} Icon={GitCompareArrows} name={"Github"} linkTo="https://github.com/gregoryspanenburg-ux"/>
                            <LinkPill Icon={Users} name={"LinkedIn"} linkTo="https://www.linkedin.com/in/gregory-spanenburg-664b8b1a8/"/>
                            <LinkPill Icon={Mail} name={"Contact"} linkTo="gregory.spanenburg@gmail.com" isMail={true}/>
                        </div>
                    </div>
                    <div className="relative hidden lg:flex items-center justify-center flex-1">
                        <div className="absolute top-0 right-0 w-25 h-25 border-r-2 border-t-2 rounded-tr-xl border-orange-400/40"/>
                        <div className="absolute bottom-0 left-0 w-25 h-25 border-l-2 border-b-2 rounded-bl-xl border-orange-400/40"/>

                        <div className="z-9 relative group">
                            <div className="relative z-10 flex flex-col p-6 rounded-full border-2 border-orange-400/30 items-center justify-center bg-zinc-900">
                                <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent select-none">KdG</div>
                                <p className="text-sm text-gray-400 select-none">Application Dev.</p>
                            </div>
                            <div className="absolute inset-0 bg-orange-400/30 blur-2xl rounded-full group-hover:bg-orange-400/50 transition duration-300"></div>
                        </div>


                        <TechnologyCard
                            locationStyling={"top-0 left-45"}
                            borderColorStyling={"border-orange-400"}
                            Icon={Code}
                            iconStyling={"text-orange-400"}
                            shadowColorStyling={"from-orange-400/80 to-yellow-400/80"}
                            technology={"Java Spring Boot"}
                            description={"Backend"}
                        />

                        <TechnologyCard
                            locationStyling={"top-[35%] left-[-10px]"}
                            borderColorStyling={"border-purple-400"}
                            Icon={Code}
                            iconStyling={"text-purple-400"}
                            shadowColorStyling={"from-purple-400/80 to-violet-400/80"}
                            technology={".NET"}
                            description={"Backend and frontend"}
                        />

                        <TechnologyCard
                            locationStyling={"top-[70%] left-[35%]"}
                            borderColorStyling={"border-red-700"}
                            Icon={Database}
                            iconStyling={"text-red-700"}
                            shadowColorStyling={"from-red-700/80 to-rose-700/80"}
                            technology={"SQL"}
                            description={"Databases"}
                        />

                        <TechnologyCard
                            locationStyling={"top-10 right-15"}
                            borderColorStyling={"border-sky-400"}
                            Icon={Atom}
                            iconStyling={"text-sky-400"}
                            shadowColorStyling={"from-sky-400/80 to-indigo-400/80"}
                            technology={"React - TypeScript"}
                            description={"Frontend"}
                        />

                        <TechnologyCard
                            locationStyling={"bottom-20 right-15"}
                            borderColorStyling={"border-lime-400"}
                            Icon={Brain}
                            iconStyling={"text-lime-400"}
                            shadowColorStyling={"from-lime-400/80 to-green-400/80"}
                            technology={"Python"}
                            description={"Datascience"}
                        />
                    </div>
                </div>

            </div>

        </header>
    )
}