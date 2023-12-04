// Components
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = () => {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Explora lo último en tecnología con nosotros." />
    </div>
    
  )
}

export default App
