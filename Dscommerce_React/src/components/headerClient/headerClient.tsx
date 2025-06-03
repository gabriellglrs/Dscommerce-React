import { Link } from "react-router-dom";
import cartSvg from "../../assets/images/cart.svg";
import "./headerClient.css";

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
                                <Link to="/cart">
                                    <img
                                        src={cartSvg}
                                        alt="Carrinho de compras"
                                    />
                                </Link>
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
