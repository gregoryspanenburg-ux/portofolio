import {cn} from "@/lib/utils.ts";

interface LinkPillProps{
    Icon: React.ElementType
    name: string
    linkTo: string
    activate?: boolean
}

export function LinkPill({Icon, name, linkTo, activate} : LinkPillProps) {
    if(activate == undefined) activate = false;

    return(
        <a className="relative group" href={linkTo} target="_blank">
            <div className={cn(
                "relative z-10 flex items-center gap-2 py-4 px-8 text-sm font-bold rounded-2xl border-1 cursor-pointer transition duration-500",
                activate ?
                    "border-none bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-400 hover:to-orange-500" :
                    "bg-card border-gray-700/30 group-hover:border-orange-500 transition duration-500")}>
                <Icon size={24}/>
                <div>{name}</div>
            </div>
            { activate &&
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 blur-md group-hover:opacity-100 transition duration-500"/>
            }
        </a>
    )
}