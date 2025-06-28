import { OrderDTO } from "../models/order";
import { CART_KEY } from "../utils/System";

export function save(cart: OrderDTO): void {
    const str = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, str);
}

export function get(): OrderDTO {
    const str = localStorage.getItem(CART_KEY) || "{}";
    return JSON.parse(str) as OrderDTO;
}