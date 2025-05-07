import { cn } from "@/lib/utils";
import { IDescription } from "@/types/ui-interfaces";

export function Description({ children, className, ...props }: IDescription) {
  return (
    <span
      className={cn("text-justify", className)}
      {...props}
    >
      {children}
    </span>
  );
}
