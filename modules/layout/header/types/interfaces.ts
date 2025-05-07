import { ReactNode } from "react";
import { navItems } from "../mock/mock-navItems";
export interface IHeaderProps { 
    className?:string;
    children:ReactNode;
}

export interface IRegistrationPanelProps {
    className?: string;
}

export interface INavigationLinksProps {
    items: typeof navItems;
    className?: string;
}

export interface IBurgerProps {
    size?: number;
    className?: string;
}

export interface IUseToggleStore {
    modal: boolean;
    openModal: () => void;
    closeModal: () => void;
    toggleModal: () => void;
}

export  interface IHeadingListProps {
    className: string;
    size?: number;
}