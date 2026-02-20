import {cn} from "@/lib/utils.ts";
import {useNavigate} from "react-router";
import {smoothScrollToTop} from "@/helpers/scroll.ts";

interface NavElementProps {
    className?: string
    title: string
    isCollapsed: boolean
    setIsCollapsedFalse: () => void
    navigateTo: string
}

export function NavElement({ className, title, isCollapsed, setIsCollapsedFalse ,navigateTo }: NavElementProps) {
    const navigate = useNavigate();

    return (
        <a
            className={cn(
                "cursor-pointer hover:text-orange-400 transition duration-300 delay-50",
                className,
                isCollapsed && "px-6 py-3 rounded-lg hover:bg-gray-700/40"
            )}
            onClick={(event) => {
                event.preventDefault();
                setIsCollapsedFalse();
                smoothScrollToTop(() => navigate(navigateTo));
            }}
        >
            {title}

        </a>
    );
}
