interface UnderLinedCenteredTitleProps {
    className?: string
    title: string
}

export function UnderlinedCenteredTitle({className, title} : UnderLinedCenteredTitleProps) {
    return (
        <div className={`mt-20 flex flex-col items-center justify-center ${className}`}>
            <h2>{title}</h2>
            <span className="mt-6 h-1 w-[5%] rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500"></span>
        </div>
    )
}