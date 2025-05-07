import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { IBusket } from "@/modules/layout/catalog-page/basket/types/interfaces";
import { useBasketStore2 } from "./store/store/use-basket-store-2";
import { motion } from "framer-motion";

export function Busket({ className, children }: IBusket) {
    const openBasketModal = useBasketStore2(state=>state.openBasketModal);
    
    return (
        <motion.button
            onClick={openBasketModal}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative w-full text-white gap-4 text-xl flex items-center justify-center",
                "bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl py-4 px-6",
                "shadow-lg hover:shadow-xl transition-all duration-300",
                "transform hover:-translate-y-0.5",
                "before:absolute before:inset-0 before:rounded-2xl before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity",
                className
            )}
        >
            <motion.div
                whileHover={{ rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <ShoppingCart className="w-6 h-6" />
            </motion.div>
            <span className="font-semibold tracking-wide">
                {children || "Кошик"}
            </span>
        </motion.button>
    );
}
