import { useState, useEffect } from "react"
import { collection, doc, getDoc, getDocs, query, where, getFirestore } from "firebase/firestore";



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

// ----------- Categories

export const useGetCategory = (collect = "categories") => {
    const [category, setCategory] = useState([]);

    useEffect(() => {

        const bbdd = getFirestore();

        const categoryCollection = collection(bbdd, collect);

        getDocs(categoryCollection).then((snapshot) => {
            setCategory(snapshot.docs.map(doc => doc.data()));
        });
    }, []);


    return { category };
};



export const useGetProductsCategory = (category) => {

    const [productsCategory, setProductsCategory] = useState([]);

    useEffect(() => {

        const bbdd = getFirestore();

        const q = query(collection(bbdd, "products"), where("category", "==", `${category}`));

        getDocs(q).then((snapshot) => {
            setProductsCategory(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        })

    }, [category]);

    return { productsCategory };

}