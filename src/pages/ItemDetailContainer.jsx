import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useGetItemProduct } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const {id} = useParams()
  const {productData} = useGetItemProduct(id);

  return (
    <Card key={productData.id} className='tarjeta' style={{ width: '20rem', border: "1px solid #79fd39" }}>
      <Card.Img variant="top" src={productData.thumbnail} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>
          {productData.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ItemDetailContainer

/* productData.images ? productData.images.map((image) => {
  return(
    <Card.Img variant="top" src={image} />
  )
}) : null  */