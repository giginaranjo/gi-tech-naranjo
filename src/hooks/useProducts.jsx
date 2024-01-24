import { useState, useEffect } from "react"
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

import { getCategory, getItemProduct, getProducts, getProductsCategory } from "../services";


export const useGetProducts = (collect = "products") => {

    const [productsData, setProductsData] = useState([]);

    useEffect(() => {

        const bbdd = getFirestore();

        const prodsCollection = collection(bbdd, collect);

        getDocs(prodsCollection).then((snapshot) => {
            setProductsData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });

    }, []);

    return { productsData };

}


export const useGetItemProduct = (collect = "products", id) => {

    const [productData, setProductData] = useState([]);

    useEffect(() => {

        const bbdd = getFirestore();

        const docItem = doc(bbdd, collect, id);

        getDoc(docItem).then((doc) => {
            setProductData({ id: doc.id, ...doc.data() });
        });

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