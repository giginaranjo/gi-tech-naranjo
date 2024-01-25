import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import {useGetProductsCategory } from '../hooks/useProducts'


const Category = () => {

    const { category } = useParams()
    const { productsCategory } = useGetProductsCategory(category);
    

    return (
        <ItemListContainer greeting={category} productsData={productsCategory} />
    )
}

export default Category;