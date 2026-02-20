
interface WrapperProps{
    width?: number
    className?: string
    children?: React.ReactNode
}

export function Wrapper({width, className,children}:WrapperProps){
    return (
        <div className={`w-[${!width ? width : "95%"}] ${className}`}>
            {children}
        </div>
    )
}