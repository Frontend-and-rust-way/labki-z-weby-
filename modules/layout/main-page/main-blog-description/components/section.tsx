"use client"
import { cn } from "@/lib/utils";
import { ReactNode } from "react"

export interface IIntroSection {
    children: ReactNode;
    className?: string;
}

export function IntroSection({children, className}: IIntroSection){
    return ( 
        <section className={cn("absolute inset-0 m-auto flex flex-col items-center justify-between w-[60%] h-[300px] bg-black rounded-2xl", className)}> 
            {children}
        </section>
    )
}


