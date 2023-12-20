import { useState, useEffect } from "react"
import { getProducts } from "../services";


export const useGetProducts = (limit) => {

    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProducts(limit)
            .then((resp) => {
                setProductsData(resp.data)
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);

    return {productsData};

}