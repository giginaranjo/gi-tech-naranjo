import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from '../components/NavBar/NavBar'
import Home from "../pages/Home"
import Category from "../pages/Category";
import ItemDetailContainer from "../pages/ItemDetailContainer";

const PagesRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PagesRouter;