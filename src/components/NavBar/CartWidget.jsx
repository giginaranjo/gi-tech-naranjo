// imports icono
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

// import css
import "./CartWidget.css"


const CartWidget = () => {
  return (
    <div>
        <FontAwesomeIcon icon={faCartShopping} className="icono"/>{" "}
        <span className="count">0</span>
    </div>
  )
}

export default CartWidget