import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItemListContainer.css"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({ greeting, productsData }) => {

  return (
    <div className="list-products">

      <div className='welcome'>{greeting}</div>

      <div className='products'>
        {
          productsData.map(products => {
            return (
              <Card key={products.id} className='tarjeta' style={{ width: '20rem', border: "1px solid #79fd39" }}>
                <Card.Img variant="top" src={products.thumbnail} />
                <Card.Body>
                  <Card.Title>{products.title}</Card.Title>
                  <Card.Text>
                    {products.description}
                  </Card.Text>
                  <Button variant="primary">Ver producto</Button>
                </Card.Body>
              </Card>)
          })
        }
      </div>



    </div>
  )
}

export default ItemListContainer;