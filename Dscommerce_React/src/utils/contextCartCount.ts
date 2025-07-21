import { createContext } from "react";

// ...código existente...
export type ContextCartCountType = {
    cartCount: number;
    setCartCount: (count: number) => void;
};

export const ContextCartCount = createContext<ContextCartCountType>({
    cartCount: 0,
    setCartCount: () => {},
});
// ...código existente...