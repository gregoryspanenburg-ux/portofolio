interface TechnologyPillProps {
    technology: string
    className?: string
}

export function TechnologyPill({technology, className} : TechnologyPillProps){
    return (
        <span className={`text-xs py-1 px-3 text-gray-400 bg-slate-950 rounded-lg border-1 border-slate-800/60 ${className}`}>
            {technology}
        </span>
    )
}