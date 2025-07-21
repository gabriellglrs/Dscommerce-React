import { Link } from "react-router-dom";
import cartSvg from "../../assets/images/cart.svg";
import "./iconCart.css";
import { ContextCartCount } from "../../utils/contextCartCount";
import { useContext } from "react";

export function IconCart() {
    const { cartCount } = useContext(ContextCartCount);
    return (
        <Link to="/cart" className="icon-cart-container">
            <img src={cartSvg} alt="Carrinho de compras" />
            {
                cartCount > 0 && (
                    <div className="dsc-cart-count">{cartCount}</div>
                ) 
            }
        </Link>
    );
}
