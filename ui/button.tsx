import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface IButton {  
    children: ReactNode;
    className?: string;
    onClick?: ()  => void;
}

export function Button({onClick, children,className,...props}: IButton) {
    return ( 
        <button  
            className={cn("rounded-[20px] bg-black  text-center flex justify-center  items-center  text-white", className)}
            onClick={onClick}
            {...props}
            >
                {children}
        </button>
    )
} 