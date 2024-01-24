import PagesRouter from './router/PagesRouter';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { CartProvider } from './context/CartContext';


const App = () => {

  return (
    <div>
      <CartProvider>
        <PagesRouter />
      </CartProvider>
    </div>

  )
}

export default App;
