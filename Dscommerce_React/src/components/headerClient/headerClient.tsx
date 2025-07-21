import { Link } from "react-router-dom";
import "./headerClient.css";
import { IconCart } from "../iconCart/iconCart";

function headerClient() {
    return (
        <>
            <header className="dsc-header-client">
                <nav className="dsc-container">
                    <Link to="/">
                        <h1>Dscommerce</h1>
                    </Link>
                    <div className="dsc-navbar-right">
                        <div className="dsc-menu-items-container">
                            <div className="dsc-menu-item">
                                <IconCart />
                            </div>
                        </div>
                        <Link to="/login">Entrar</Link>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default headerClient;
