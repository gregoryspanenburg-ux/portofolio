import {cn} from "@/lib/utils.ts";

interface FilterPillProps{
    className?: string
    Icon: React.ElementType
    title: string
    amount: number
    isSelected?: boolean
    setSelectedFilter: () => void
}

export function FilterPill({className, Icon, title, amount, setSelectedFilter,isSelected = false} : FilterPillProps){
    return (
        <div
            className={cn(`relative flex items-center gap-4 py-4 px-8 transition duration-400  rounded-2xl ${className}`,
            isSelected ? `text-white bg-gradient-to-r from-orange-500 to-yellow-500 shadow-sm shadow-orange-400 ` : `border-1 group hover:border-orange-400 text-gray-500  bg-card border-slate-700/30`)}
            onClick={ () => {setSelectedFilter() }}
        >
            <Icon size={16} className="group-hover:text-orange-400 transition duration-400"/>
            <p className="group-hover:text-white transition duration-400 font-bold select-none">{title}</p>
            <span className={cn('text-xs  py-1 px-2 rounded-full',
                isSelected ? 'bg-white/30' : 'bg-slate-950')}>{amount}</span>
        </div>
    )
}