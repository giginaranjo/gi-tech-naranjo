// Components
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {useGetProducts} from './hooks/useProducts'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



const App = () => {

  const {productsData} = useGetProducts(10)

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Explora lo último en tecnología con nosotros." productsData={productsData}/>
    </div>
    
  )
}

export default App;
