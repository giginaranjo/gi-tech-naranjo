import axios from "axios";

export async function getProducts(limit = 10) {
    return await axios.get(`https://6582515b02f747c8367935a7.mockapi.io/catalogo/products?limit=${limit}`)
}