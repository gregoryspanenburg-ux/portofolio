import {Skeleton} from "@/components/ui/skeleton.tsx";

interface SkeletonProjectCardProps {
    className?: string
}

export function SkeletonProjectCard({className} : SkeletonProjectCardProps) {
    return (
        <div className={`flex flex-col flex-1 h-full bg-black/40 rounded-lg ${className}`}>
            <Skeleton className="w-full h-50 rounded-b-none bg-orange-400/10"/>
            <div className="flex flex-col flex-1 p-6 ">
                <Skeleton className="mt-2 h-10 w-full bg-orange-400/10"/>
                <Skeleton className="mt-4 h-5 w-full bg-orange-400/10"/>
                <div className="mt-4 flex flex-wrap gap-2">
                    <Skeleton className="h-5 w-15 bg-orange-400/10"/>
                    <Skeleton className="h-5 w-15 bg-orange-400/10"/>
                    <Skeleton className="h-5 w-15 bg-orange-400/10"/>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <Skeleton className="h-5 w-25 bg-orange-400/10"/>
                    <Skeleton className="h-5 w-5 bg-orange-400/10"/>
                </div>
            </div>
        </div>
    )
}