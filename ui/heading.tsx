import { cn } from "@/lib/utils"
import { IHeading } from "@/types/ui-interfaces"

export function Heading({children,className,...props}:IHeading) {
    return ( 
        <span className={cn("items-center w-full text-center justify-center flex text-black",className)} {...props}>
            {children}
        </span>
    )
}

