import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

import "./CartWidget.css"

import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



const CartWidget = () => {

  const { count } = useContext(CartContext);

  const cartSummary = count.reduce((total, product) => total + product.quantity, 0);


  return (

    <div>
      <FontAwesomeIcon icon={faCartShopping} className="icono" />{" "}
      <span className="count">{cartSummary}</span>
    </div>

  )
}

export default CartWidget