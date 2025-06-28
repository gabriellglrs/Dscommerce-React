import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY } from "../utils/System";

export function save(cart: OrderDTO): void {
    const str = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, str);
}

export function get(): OrderDTO {
    const str = localStorage.getItem(CART_KEY) || "{}";
    const obj = JSON.parse(str) as OrderDTO;
    const cart = new OrderDTO();

    // Garante que obj.items seja um array
    const items = Array.isArray(obj.items) ? obj.items : [];

    items.forEach((x) => {
        cart.items.push(
            new OrderItemDTO(x.productId, x.quantity, x.name, x.price, x.imgUrl)
        );
    });

    return cart;
}

export function clear(): void {
    return localStorage.clear()
}
