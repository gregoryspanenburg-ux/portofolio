

interface TechnologyProps {
    className?: string
    locationStyling: string
    borderColorStyling: string
    Icon: React.ElementType
    iconStyling: string
    shadowColorStyling: string
    technology: string
    description: string
}


export function TechnologyCard( {className, locationStyling,borderColorStyling, Icon, iconStyling, shadowColorStyling, technology, description} : TechnologyProps ){
    return (
        <div className={`z-10 absolute ${locationStyling} group ${className}`}>
            <div className={`relative z-10 flex flex-col bg-zinc-900 border-1 rounded-xl ${borderColorStyling} p-6 group-hover:scale-105 transition duration-300`}>
                <Icon className={iconStyling}/>
                <p className="mt-3 text-lg font-semibold select-none">{technology}</p>
                <p className="text-sm text-gray-400 select-none">{description}</p>
            </div>
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${shadowColorStyling} group-hover:blur-xl transition duration-500`}></div>
        </div>
    )
}