
interface HoverBoxProps {
    children?: React.ReactNode
    className?: string
    fromColor: string
    toColor: string
}

export function HoverBox({children, className, fromColor, toColor}: HoverBoxProps){
    return (
        <div className={`relative group ${className}`}>
            <div className="h-full relative z-10 bg-card border border-gray-800 rounded-2xl group-hover:border-orange-500/30 transition duration-500">
                {children}
            </div>
            <span
                className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition duration-500 rounded-2xl"
                style={{
                    background: `linear-gradient(to right, ${fromColor}, ${toColor})`
                }}
            />
        </div>
    )
}
