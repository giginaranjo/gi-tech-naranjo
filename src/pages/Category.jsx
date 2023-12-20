import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import {useGetProductsCategory } from '../hooks/useProducts'


const Category = () => {

    const { id } = useParams()
    const { productsData } = useGetProductsCategory(id);
    

    return (
        <ItemListContainer greeting="" productsData={productsData} />
    )
}

export default Category;



