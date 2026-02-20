import {HoverBox} from "@/components/home/about/HoverBox.tsx";
import type {ElementType} from "react";

interface ExpertiseBoxProps {
    Icon: ElementType
    fromColor: string
    toColor: string
    expertise: string
    skills: string[]
}

export function ExpertiseBox({Icon, fromColor, toColor, expertise, skills} : ExpertiseBoxProps) {
    return(
        <HoverBox fromColor={fromColor} toColor={toColor} >
            <div className="p-6 flex flex-col">
                <div>
                    <div
                        className="relative z-50 flex items-center justify-center w-[3em] h-[3em] rounded-xl"
                        style={{
                            background: `linear-gradient(to right, ${fromColor}, ${toColor})`
                        }}
                    >
                        <Icon />
                    </div>

                    <h4 className="mt-4">{expertise}</h4>
                    <ul className="mt-3 list-disc pl-5 text-gray-500 marker:text-orange-400">
                        { skills.map(skill => (
                            <li>{skill}</li>
                        ))
                        }
                    </ul>
                </div>

            </div>
        </HoverBox>
    )
}