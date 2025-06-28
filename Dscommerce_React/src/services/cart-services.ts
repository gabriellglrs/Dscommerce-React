import { clear, get, save } from "../localstorage/cart-repository";
import { OrderDTO, OrderItemDTO } from "../models/order";
import type { Product } from "../models/Product";

export function saveCart(cart: OrderDTO): void {
    save(cart);
}

export function getCart(): OrderDTO {
    return get();
}

export function addProductToCart(product: Product): void {
    const cart = getCart();
    const item = cart.items.find((item) => item.productId === product.id);

    if (!item) {
        // Se não existe, adiciona novo
        const newItem = new OrderItemDTO(
            product.id,
            1,
            product.name,
            product.price,
            product.imgUrl
        );
        cart.items.push(newItem);
    } else {
        // Se já existe, apenas incrementa a quantidade
        item.quantity++;
    }
    saveCart(cart);
}

export function clearCart(): void {
    clear();
}

export function increaseItem(productId: number) {
    const cart = getCart();
    const item = cart.items.find((x) => x.productId === productId);

    if (item) {
        item.quantity++;
        saveCart(cart)
    }
}

export function decrementItem(productId: number) {
    const cart = getCart();
    const item = cart.items.find((x) => x.productId === productId);

    if (item) {
        item.quantity--;
        if (item.quantity <= 0) {
            // Remove o item do array se a quantidade for zero ou menor
            cart.items = cart.items.filter((x) => x.productId !== productId);
        }
        saveCart(cart)
    }
}

