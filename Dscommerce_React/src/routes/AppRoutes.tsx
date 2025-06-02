import { Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/ClientHome/ProductDetails/ProductDetails";
import ClientHome from "../pages/ClientHome/ClientHome";
import Catalog from "../pages/ClientHome/Catalog/Catalog";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ClientHome />}>
                <Route path="catalog" element={<Catalog />} />
                <Route index element={<Catalog />} />
                <Route path="product-details" element={<ProductDetails />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
