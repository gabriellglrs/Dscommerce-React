import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/ClientHome/ProductDetails/ProductDetails";
import ClientHome from "../pages/ClientHome/ClientHome";
import Catalog from "../pages/ClientHome/Catalog/Catalog";
import Cart from "../pages/ClientHome/Cart/Cart";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ClientHome />}>
                <Route path="catalog" element={<Catalog />} />
                <Route path="cart" element={<Cart />} />
                <Route index element={<Catalog />} />
                <Route path="product-details" element={<ProductDetails />} />
                <Route path="product-details/:id" element={<ProductDetails />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default AppRoutes;
