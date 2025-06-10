import axios from "axios";
import { BASE_URL } from "../utils/System";

export function findAll() {
    return axios.get(`${BASE_URL}/products`);
}

export function findById(id: number) {
    return axios.get(`${BASE_URL}/products/${id}`);
}

