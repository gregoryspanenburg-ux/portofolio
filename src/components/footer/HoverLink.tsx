import {type ElementType} from "react";

interface HoverLinkProps {
    Icon: ElementType
}

export function HoverLink({Icon} : HoverLinkProps) {
    return(
        <div className="group">
            <div className="p-2 bg-card rounded-xl border-1 border-slate-700/40 cursor-pointer group-hover:bg-orange-700/20 group-hover:border-orange-400 transition duration-500">
                <Icon size={22} className=" text-gray-500 group-hover:text-orange-400 transition duration-500" />
            </div>
        </div>
    )
}