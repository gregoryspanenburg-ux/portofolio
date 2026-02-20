interface MyStoryCardProps {
    className?: string
    fromColor: string
    toColor: string
    Icon: React.ElementType
    title: string
    text: string[]
}

export function MyStoryCard({className, fromColor, toColor, Icon, title, text} : MyStoryCardProps) {
    return (
        <div className={`relative flex flex-1 ${className} group`}>
            <div className="p-8 relative z-10 flex-1 bg-gradient-to-r from-zinc-950 to-zinc-900 rounded-lg border-1 border-zinc-700/40">
                <div className="relative z-10">
                    <div className="flex items-center gap-4">
                        <div
                            className={`p-3 rounded-2xl`}
                            style={
                                {background: `linear-gradient(to right, ${fromColor}, ${toColor})`}
                            }
                        >
                            <Icon/>
                        </div>
                        <h3>{title}</h3>
                    </div>
                    <div className="mt-4"></div>
                    {text.map(txt => (
                        <p className="mt-3 text-zinc-400">
                            {txt}
                        </p>
                    ))}
                </div>
            </div>
            <div
                className="absolute inset-0 bg-white blur-sm opacity-0 group-hover:opacity-100 transition duration-500"
                style={
                    {background: `linear-gradient(to right, ${fromColor}, ${toColor})`}
                }
            ></div>
        </div>

    )
}