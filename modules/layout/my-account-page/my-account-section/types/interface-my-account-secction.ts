import { ReactNode } from "react";
import { Ref } from "react";
export interface IMyAccountSectionProps {
    className: string;
    children: ReactNode;
    ref?: Ref<HTMLDivElement>;
}