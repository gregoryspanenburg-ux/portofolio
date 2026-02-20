import {Separator} from "@/components/ui/separator.tsx";
import {GradientIconSquare} from "@/components/GradientIconSquare.tsx";
import {Ampersand, ArrowUp, Code2, GitFork, Heart, Mail, QrCode} from "lucide-react";
import {HoverLink} from "@/components/footer/HoverLink.tsx";

interface FooterProps{
    className?: string;
}

export function Footer( {className}: FooterProps){
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`pb-6 mt-36 relative ${className}`}>
            <span className="absolute bottom-4 size-[10em] bg-primary/60 blur-[120px] animate-glow"/>
            <span className="absolute top-2/8 right-1 size-[10em] bg-secondary/60 blur-[120px] animate-glow"/>

            <Separator className="h-px bg-gray-600/40" />
            <div className="my-16 mx-auto w-[90%] md:w-[70%] ">
                <div className="flex justify-between gap-4 px-4 " >
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <GradientIconSquare Icon={Code2} fromColor={"orange"} toColor={"yellow"}/>
                            <h4>Gregory Spanenburg</h4>
                        </div>
                        <p className="text-gray-500">Full Stack Developer passionate about building innovative solutions with modern technologies. Let's create something amazing together.</p>
                        <div className="flex gap-4">
                            <HoverLink Icon={GitFork}/>
                            <HoverLink Icon={QrCode}/>
                            <HoverLink Icon={Mail}/>
                            <HoverLink Icon={Ampersand}/>
                        </div>
                    </div>

                    <div className="flex-1 hidden md:flex flex-col items-end">
                        <h4>Get In Touch</h4>
                        <p className="mt-4 text-gray-500">gregory.spanenburg@gmail.com</p>
                        <p className="text-gray-500">Antwerp, Belgium</p>
                        <a href="/docs/cv.pdf" className="
                        mt-4 border-1 border-orange-600/40 bg-orange-600/20
                        text-orange-400 px-6 py-2 rounded-lg font-bold text-sm
                        cursor-pointer hover:border-orange-400/60 transition duration-500
                        " download>Download CV</a>
                    </div>
                </div>

                <Separator className="mt-8 h-px bg-gray-600/40" />

                <div className="mt-8 text-gray-500 flex justify-between items-center">
                    <p> © {new Date().getFullYear()} Gregory Spanenburg. Made with{' '}
                        <Heart className="inline size-4 text-orange-400 fill-orange-400 animate-pulse" />{' '}
                        in Belgium</p>
                    <button onClick={scrollToTop} className="hidden md:flex align-center gap-2 border-1 border-gray-600/40 bg-gray-600/20
                        text-gray-600 px-4 py-2 rounded-lg font-bold text-sm
                        cursor-pointer hover:border-orange-400/60 hover:text-orange-400 transition duration-200">
                        Back to Top
                        <ArrowUp size={20}/>
                    </button>
                </div>
            </div>

        </footer>
    )
}