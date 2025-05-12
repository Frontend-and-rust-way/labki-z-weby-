"use client"
import { cn } from "@/lib/utils";
import { ReactNode } from "react"

export interface IIntroSection {
    children: ReactNode;
    className?: string;
}

export function IntroSection({children, className}: IIntroSection){
    return ( 
            <section
            className={cn(
                "absolute inset-0 m-auto flex flex-col items-center justify-center",
                "w-[100%] sm:w-[60%] py-[30px] h-[400px] sm:h-[300px]",
                "rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg",
                className
            )}
            >
            {children}
            </section>
    )
}
