import { Outlet } from "react-router-dom";
import "./ClientHome.css";
import HeaderClient from "../../components/headerClient/headerClient";

export default function ClientHome() {
    return (
        <>
            <HeaderClient />
            <Outlet />
        </>
    );
}
