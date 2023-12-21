import { useState, useEffect } from "react"
import { getCategory, getItemProduct, getProducts, getProductsCategory } from "../services";


export const useGetProducts = (limit) => {

    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProducts(limit)
            .then((resp) => {
                setProductsData(resp.data.products)
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);

    return { productsData };

}


export const useGetItemProduct = (id) => {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        getItemProduct(id)
            .then((resp) => {
                setProductData(resp.data)
            })
            .catch((err) => {
                console.error(err);
            })
    }, [id]);

    return { productData };

}


export const useGetCategory = () => {

    const [categoria, setCategory] = useState([]);

    useEffect(() => {
        getCategory()
            .then((resp) => {
                setCategory(resp.data)
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);

    let category = [];
    const categOne = categoria.filter((categ) => categ.includes("smartphones"));
    const categTwo = categoria.filter((categ) => categ.includes("laptops"));
    category.push(categOne, categTwo)

    return { category };

}


export const useGetProductsCategory = (id) => {

    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProductsCategory(id)
            .then((resp) => {
                setProductsData(resp.data.products)
            })
            .catch((err) => {
                console.error(err);
            })
    }, [id]);

    return { productsData };

}