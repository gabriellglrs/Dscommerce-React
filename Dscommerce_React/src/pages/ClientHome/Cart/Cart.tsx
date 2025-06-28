import { useEffect, useState } from "react";
import "./Cart.css";
import { clearCart, getCart } from "../../../services/cart-services";
import { OrderDTO } from "../../../models/order";
import { save } from "../../../localstorage/cart-repository";
import { Link } from "react-router-dom";
import { CartNotFound } from "../../../components/CartNotFound/CartNotFound";



export default function Cart() {
    const [cart, SetCart] = useState<OrderDTO>(getCart());

    // Calcule o subtotal somando todos os subTotais dos itens
    const subtotal = (cart.items ?? []).reduce(
        (acc, item) => acc + (item.subTotal ?? item.price * item.quantity),
        0
    );

    function handleClearClick(): void {
        clearCart();
        SetCart(getCart())
    }

    if (!cart?.items || cart.items.length === 0) {
        return <CartNotFound />;
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
                                                <div className="dsc-cart-item-quantity-btn">
                                                    -
                                                </div>
                                                <p>{item.quantity}</p>
                                                <div className="dsc-cart-item-quantity-btn">
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
                            <h3>R$ {subtotal.toFixed(2).replace('.', ',')}</h3>
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
