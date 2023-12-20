import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useGetProducts } from '../hooks/useProducts'

const Home = () => {

    const { productsData } = useGetProducts(10);

    return (
        <ItemListContainer greeting="Explora lo último en tecnología con nosotros." productsData={productsData} />
    )
}

export default Home;