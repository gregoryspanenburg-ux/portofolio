import {X} from "lucide-react";

interface ImageOverlayProps{
    imgUrl: string
    onClose: () => void
    className?: string
}

export function ImageOverlay({imgUrl, onClose, className}: ImageOverlayProps) {
    return (
        <div
            onClick={onClose}
            className={`fixed p-6 inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur ${className}`}
        >
            <div className="relative w-[90%] h-[90%]">
                <img className="w-full h-full object-contain" src={imgUrl} alt=""/>
            </div>

            <X
                onClick={onClose}
                size={32}
                className="absolute cursor-pointer top-10 right-10 text-zinc-800 hover:scale-120 transition duration-500"
            />
        </div>
    )
}