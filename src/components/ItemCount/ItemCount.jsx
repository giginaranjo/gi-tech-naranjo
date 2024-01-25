import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

import { Toaster, toast } from 'sonner'


const ItemCount = ({ idProduct }) => {

    const [countProduct, setCountProduct] = useState(1);

    const { count, setCount } = useContext(CartContext)


    const handleRemove = () => {
        if (countProduct > 1) {
            setCountProduct(countProduct - 1);
        }

    };

    const handleAdd = () => {
        setCountProduct(countProduct + 1);
    };


    const handleAddToCart = () => {

        const productsAdd = count.find((product) => product.id === idProduct);

        if (productsAdd) {
            setCount(count.map((product) => product.id === idProduct ? { ...product, quantity: product.quantity + countProduct } : product));
        } else {
            setCount([...count, { id: idProduct, quantity: countProduct }]);
        }
        
        toast.success(countProduct + ' Product added to shopping cart.');

        setCountProduct(1);

    }


    return (
        
        <div className="btn-cart">
            <Toaster position="top-right"/>
            <div className='mqp'>
                <button className="minus" onClick={handleRemove} >-</button>
                <span className="quanti">{countProduct}</span>
                <button className="plus" onClick={handleAdd}>+</button>
            </div>
            <button className="add" onClick={handleAddToCart}>Add to cart</button>
        </div>

    );
}

export default ItemCount;




