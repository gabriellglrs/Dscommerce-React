import { useContext, useState } from "react";
import "./Cart.css";
import {
    clearCart,
    decrementItem,
    getCart,
    increaseItem,
} from "../../../services/cart-services";
import { OrderDTO } from "../../../models/order";
import { Link } from "react-router-dom";
import { CartNotFound } from "../../../components/CartNotFound/CartNotFound";
import { ContextCartCount } from "../../../utils/contextCartCount";

export default function Cart() {
    const [cart, SetCart] = useState<OrderDTO>(getCart());
    const { setCartCount } = useContext(ContextCartCount);

    // Calcule o subtotal somando todos os subTotais dos itens
    const subtotal = (cart.items ?? []).reduce(
        (acc, item) => acc + (item.subTotal ?? item.price * item.quantity),
        0
    );

    if (!cart?.items || cart.items.length === 0) {
        return <CartNotFound />;
    }

    function handleIncrementItem(productId: number): void {
        increaseItem(productId);
        const newCart = getCart();
        SetCart(newCart);
        setCartCount(
            newCart.items.reduce((acc, item) => acc + item.quantity, 0)
        );
    }

    function handleDecrementItem(productId: number): void {
        decrementItem(productId);
        const newCart = getCart();
        SetCart(newCart);
        setCartCount(
            newCart.items.reduce((acc, item) => acc + item.quantity, 0)
        );
    }

    function handleClearClick(): void {
        clearCart();
        const newCart = getCart();
        SetCart(newCart);
        setCartCount(0);
    }
    return (
        <>
            <main>
                <section id="cart-container-section" className="dsc-container">
                    <div className="dsc-card dsc-mb20">
                        {cart.items.map((item) => (
                            <>
                                <div
                                    key={item.productId}
                                    className="dsc-cart-item-container dsc-line-bottom"
                                >
                                    <div className="dsc-cart-item-left">
                                        <img
                                            src={item.imgUrl}
                                            alt={item.name}
                                        />
                                        <div className="dsc-cart-item-description">
                                            <h3>{item.name}</h3>
                                            <div className="dsc-cart-item-quantity-container">
                                                <div
                                                    onClick={() =>
                                                        handleDecrementItem(
                                                            item.productId
                                                        )
                                                    }
                                                    className="dsc-cart-item-quantity-btn"
                                                >
                                                    -
                                                </div>
                                                <p>{item.quantity}</p>
                                                <div
                                                    onClick={() =>
                                                        handleIncrementItem(
                                                            item.productId
                                                        )
                                                    }
                                                    className="dsc-cart-item-quantity-btn"
                                                >
                                                    +
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dsc-cart-item-right">
                                        R${" "}
                                        {item.price
                                            .toFixed(2)
                                            .replace(".", ",")}
                                    </div>
                                </div>
                            </>
                        ))}
                        <div className="dsc-cart-total-container">
                            <h3>R$ {subtotal.toFixed(2).replace(".", ",")}</h3>
                        </div>
                    </div>
                    <div className="dsc-btn-page-container">
                        <div className="dsc-btn dsc-btn-blue">
                            Finalizar pedido
                        </div>
                        <Link to="/">
                            <div className="dsc-btn dsc-btn-white">
                                Continuar comprando
                            </div>
                        </Link>
                        <div
                            onClick={handleClearClick}
                            className="dsc-btn dsc-btn-white"
                        >
                            Limpar Carrinho
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
