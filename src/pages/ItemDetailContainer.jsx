import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemDetailContainer.css"

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { useGetItemProduct } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount/ItemCount';


const ItemDetailContainer = () => {

  const { id } = useParams()
  const { productData } = useGetItemProduct("products", id);

  return (
    <div className='tarjetita'>
      <Card className='card-items' key={productData.id}>
        <div className='img-products'>
              <Card.Img className='imagen-detalle' variant="top" src={productData.thumbnail} />
        </div>
        <Card.Body className='info-principal'>
          <Card.Title>{productData.title}</Card.Title>
          <Card.Text>
            {productData.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Category: {productData.category}</ListGroup.Item>
          <ListGroup.Item>Brand: {productData.brand}</ListGroup.Item>
          <ListGroup.Item>Price: ${productData.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body style={{padding: "10px"}}>
          <ItemCount idProduct={productData.id}/>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetailContainer




