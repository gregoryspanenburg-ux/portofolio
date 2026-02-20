import { TitlePill } from "@/components/home/TitlePill";
import {Code, GraduationCap, Heart, Rocket, User} from "lucide-react";
import {UnderlinedCenteredTitle} from "@/components/about/UnderlinedCenteredTitle.tsx";
import {MyStoryCard} from "@/components/about/MyStoryCard.tsx";
import {Timeline} from "@/components/about/Timeline.tsx";

const textWhatDrivesMe = [
    "What drives me most in IT is solving problems – from small issues to large-scale challenges. I enjoy making sure clients receive solutions that save them time and effort. It’s not just about looking good; it also has to be practical.",
    "IT technology evolves fast, and not everyone can keep up. That’s why I make sure the applications I develop are clear and user-friendly for everyone!"
]

const textLookingForward = [
    "I’m very excited about the future. With the rise of AI comes both great potential and responsibility. I believe we should learn to use these tools in an ethical way, striking a nice balance between “vibe” and handwritten code.",
    "I’m also looking forward to turning my hobby and passion into my full-time profession."
]



export function AboutMePage() {
    return (
        <div className="pt-50">
            <div className="relative">
                <span className="absolute top-1/3 left-3/6 size-[10em] bg-yellow-500 blur-[150px] animate-float"/>
                <div className="relative z-10 flex items-center justify-center flex-col">
                    <TitlePill Icon={User} text={"Get to Know Me"}/>
                    <h1 className="text-center text-3xl md:text-4xl lg:text-5xl mt-5">About Me :D</h1>
                    <p className="mt-4 text-gray-500 w-[60%]  text-center">
                        A passionate full-stack developer from Antwerp with a love for building elegant solutions to complex problems. I specialize in creating scalable applications using modern technologies and best practices.
                    </p>
                </div>
            </div>

            <UnderlinedCenteredTitle title={"My Story"}/>
            <div className="mt-8 relative z-10 flex flex-wrap w-[80%] mx-auto gap-6">
                <MyStoryCard fromColor="orange" toColor="crimson" Icon={Heart} title={"What Drives Me"} text={textWhatDrivesMe} />
                <MyStoryCard fromColor="fuchsia" toColor="cyan" Icon={Rocket} title={"Looking Forward"} text={textLookingForward} />
            </div>

            <UnderlinedCenteredTitle title={"My Journey"}/>
            <Timeline/>

            <UnderlinedCenteredTitle title={"Core Values"}/>
            <div className="mt-8 relative z-10 flex flex-wrap w-[80%] mx-auto gap-6">
                <MyStoryCard fromColor="orangered" toColor="yellow" Icon={Code} title={"Clean Code"} text={["Writing maintainable, well-documented code that others can easily understand and build upon."]} />
                <MyStoryCard fromColor="orangered" toColor="yellow" Icon={GraduationCap} title={"Continuous Learning"} text={["Staying curious and constantly expanding my knowledge through new technologies and best practices."]} />
                <MyStoryCard fromColor="orangered" toColor="yellow" Icon={Heart} title={"User-Focused"} text={["Always keeping the end user in mind, creating intuitive and accessible experiences."]} />
            </div>
        </div>
    )
}