import { get, save } from "../localstorage/cart-repository";
import { OrderDTO, OrderItemDTO } from "../models/order";
import type { Product } from "../models/Product";

export function saveCart(cart: OrderDTO): void {
    save(cart);
}

export function getCart(): OrderDTO {
    return get();
}

export function addProductToCart(pruduct: Product): void {
    const cart = get();
    const item = cart.items.find((item) => item.productId === pruduct.id);

    if (!item) {
        const newItem = new OrderItemDTO(pruduct.id, 1, pruduct.name, pruduct.price, pruduct.imgUrl);
        cart.items.push(newItem);
        save(cart);
    }
}


