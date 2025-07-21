import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import { ContextCartCount } from "./utils/contextCartCount";

export default function App() {
    const [cartCount, setCartCount] = useState<number>(0);

    return (
        <ContextCartCount.Provider value={{ cartCount, setCartCount }}>
            <AppRoutes />
        </ContextCartCount.Provider>
    );
}