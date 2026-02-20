import type {ElementType} from "react";

interface GradientIconSquareProps {
    Icon: ElementType
    fromColor?: string
    toColor?: string
}

export function GradientIconSquare({Icon , fromColor, toColor}: GradientIconSquareProps) {
    return (
        <div className="relative flex items-center justify-center">
            <div
                className={`relative z-45 flex items-center justify-center size-[2.5em] bg-gradient-to-r from-${fromColor}-600 to-${toColor}-300 rounded-xl`}>
                <Icon/>
            </div>
            <span className={`absolute inset-0 size-[2.5] bg-gradient-to-r from-${fromColor}-600 to-${toColor}-300 rounded-md blur-sm opacity-70`}/>
        </div>

    )
}