import {type ElementType} from "react";

interface TitlePillProps {
    Icon: ElementType
    className?: string
    text: string
}

export function TitlePill({Icon, text, className} : TitlePillProps){
    return(
        <div className={`relative z-10 bg-orange-500/30 py-1 px-3 text-sm rounded-full border-[1px] border-orange-800 ${className}`}>
            <div className="flex items-center gap-2 text-orange-300">
                <Icon className="text-orange-400" size={16} />
                <p>{text}</p>
            </div>
        </div>
    )
}