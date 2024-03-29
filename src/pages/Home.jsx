import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useGetProducts } from '../hooks/useProducts'

const Home = () => {

    const { productsData } = useGetProducts("products");

    return (
        <ItemListContainer greeting="Explore the latest in technology with us." productsData={productsData} />
    )
}

export default Home;