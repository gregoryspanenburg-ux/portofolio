interface CodePillProps{
    Icon: React.ElementType;
    color: string;
    programLanguage: string;
}

export function CodePill({Icon, color, programLanguage} : CodePillProps){
    return(
        <div className="flex gap-2 items-center text-gray-300 text-sm bg-card border-1 border-gray-900 py-2 px-4 rounded-md hover:border-orange-500 transition duration-500 select-none">
            <Icon className={color} size={16}/>
            <div>{programLanguage}</div>
        </div>
    )
}