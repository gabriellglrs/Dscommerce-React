import axios, { type AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/System";

export function findAll(page: number, name: string, size = 12, sort = "name") {
    const config: AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        params: {
            page: page,
            name: name,
            size: size,
            sort: sort,
        },
    };

    return axios.get("/products", config);
}

export function findById(id: number) {
    return axios.get(`${BASE_URL}/products/${id}`);
}
