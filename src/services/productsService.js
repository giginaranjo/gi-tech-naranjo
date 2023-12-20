import axios from "axios";

export async function getProducts(limit = 10) {
    return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
}

export async function getItemProduct(id = 1) {
    return await axios.get(`https://dummyjson.com/products/${id}`)
}

export async function getCategory() {
    return await axios.get('https://dummyjson.com/products/categories')
}

export async function getProductsCategory(id = "smartphones") {
    return await axios.get(`https://dummyjson.com/products/category/${id}`)
}