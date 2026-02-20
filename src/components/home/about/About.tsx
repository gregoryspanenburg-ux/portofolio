import {TitlePill} from "@/components/home/TitlePill.tsx";
import {BookOpenText, Brain, Code, Cpu, Database, GraduationCap, Server, Zap} from "lucide-react";
import {Wrapper} from "@/components/Wrapper.tsx";
import {HoverBox} from "@/components/home/about/HoverBox.tsx";
import {ExpertiseBox} from "@/components/home/about/ExpertiseBox.tsx";

export function About(){
    return(
        <main className="mt-25 flex flex-col items-center justify-center">
            <TitlePill Icon={Zap} text={"About Me"}/>
            <h2 className="text-4xl md:text-5xl mt-8">Background & Skills</h2>
            <p className="mt-5 text-gray-500">A journey through education and technology</p>
            <div className="w-[95%] m-auto">
                <Wrapper className="mt-15">
                    <HoverBox fromColor={"yellow"} toColor={"orange"}>
                        <div className="p-8 flex items-start gap-0 md:gap-8">
                            <div className="relative flex items-center justify-center">
                                <div
                                    className="relative z-50 hidden md:flex items-center justify-center w-[4.5em] h-[4.5em] bg-gradient-to-r from-orange-600 to-yellow-300 rounded-2xl">
                                    <GraduationCap size={42}/>
                                </div>
                                <span
                                    className="hidden md:inline absolute inset-0 w-[4.5em] h-[4.5em] bg-gradient-to-r from-orange-600 to-yellow-300 rounded-md blur-sm opacity-70"/>
                            </div>

                            <div>
                                <h3>Education</h3>
                                <p className="mt-4">Graduated from <span className="font-bold text-orange-400">KdG Antwerp</span> with
                                    a degree in <span
                                        className="font-bold text-yellow-400">Application Development</span></p>
                                <p className="mt-4 text-gray-500">
                                    I graduated from KdG Antwerp with a specialization in Application Development, gaining broad expertise across software and infrastructure. While I have a wide-ranging skill set, I especially enjoy creating clean, user-friendly websites with React that meet users’ expectations.
                                </p>

                            </div>
                        </div>
                    </HoverBox>

                    <h3 className="mt-15 text-center">Technical Expertise</h3>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
                        <ExpertiseBox
                            Icon={Server}
                            fromColor={"red"}
                            toColor={"yellow"}
                            expertise={"Backend Development"}
                            skills={[
                                "Java Spring Boot",
                                ".NET",
                                "Node.js",
                                "REST APIs",
                                "Authentication & Authorization",
                                "Debugging & Testing"
                            ]}/>
                        <ExpertiseBox
                            Icon={Code}
                            fromColor={"cyan"}
                            toColor={"blue"}
                            expertise={"Frontend Development"}
                            skills={[
                                "React",
                                "TypeScript",
                                "TailwindCSS",
                                "Responsive Design",
                                "UI/UX Design"
                            ]}/>
                        <ExpertiseBox
                            Icon={Database}
                            fromColor={"violet"}
                            toColor={"purple"}
                            expertise={"Database & NoSQL"}
                            skills={[
                                "SQL (PostgreSQL, MySQL)",
                                "NoSQL (MongoDB)",
                                "Database Design",
                                "Query Optimization"
                            ]}/>
                        <ExpertiseBox
                            Icon={Brain}
                            fromColor={"lime"}
                            toColor={"green"}
                            expertise={"Data Science"}
                            skills={[
                                "Data Analysis",
                                "Data Visualization",
                                "Python for Data Manipulation"
                            ]}/>
                    </div>

                    <div className="mt-16 flex flex-wrap gap-6">
                        <HoverBox className="flex-1" fromColor={"cyan"} toColor={"blue"}>
                            <div className="p-8">
                                <div className="flex items-center gap-3">
                                    <Cpu className="text-orange-400" />
                                    <h4>Problem Solver</h4>
                                </div>
                                <p className="text-gray-500">Passionate about tackling complex challenges and finding elegant solutions through clean, maintainable code.</p>
                            </div>
                        </HoverBox>
                        <HoverBox className="flex-1" fromColor={"cyan"} toColor={"blue"}>
                            <div className="p-8">
                                <div className="flex items-center gap-3">
                                    <BookOpenText className="text-yellow-400"/>
                                    <h4>Continuous Learner</h4>
                                </div>
                                <p className="text-gray-500">Always exploring new technologies and best practices to stay at the forefront of modern development.</p>
                            </div>
                        </HoverBox>

                    </div>
                </Wrapper>
            </div>
        </main>
    )
}