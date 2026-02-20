import {Code2} from "lucide-react";
import { GradientIconSquare } from "../GradientIconSquare";
import Hamburger from 'hamburger-react';
import {useNavigate} from "react-router";
import {smoothScrollToTop} from "@/helpers/scroll.ts";

interface NavigationProps{
    children?: React.ReactNode;
    isCollapsed: boolean;
    setIsCollapssed: (b: boolean) => void
}

export function Navigation({children, isCollapsed, setIsCollapssed} : NavigationProps) {
    const navigate = useNavigate();

    return (
        <nav className="fixed z-50 top-0 w-[100%] max-w-[100vw] bg-card/80 border-b-1 border-gray-800 backdrop-blur-md">
            <div className="flex items-center justify-between w-[95%] m-auto py-5">
                <div className="flex gap-3 items-center">
                    <GradientIconSquare Icon={Code2} fromColor={"orange"} toColor={"yellow"}/>
                    <p
                        onClick={() => smoothScrollToTop(() => navigate("/"))}
                        className="font-bold text-lg cursor-pointer hover:scale-102 transition duration-500">Gregory Spanenburg</p>
                </div>
                <div className="flex items-center text-gray-500">
                    <div className="hidden md:flex gap-8">
                        {children}
                    </div>
                    <div className="flex md:hidden">
                        <Hamburger toggled={isCollapsed} onToggle={setIsCollapssed} />
                    </div>

                </div>
            </div>
            { isCollapsed && (
                <div className="flex flex-col gap-4 w-[95%] m-auto py-5 border-t-1 text-gray-500 border-t-slate-500/40">
                    {children}
                </div>
            )
            }

        </nav>
    )
}