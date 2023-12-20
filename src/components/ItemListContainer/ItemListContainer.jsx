import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import "./ItemListContainer.css"
import { Link } from 'react-router-dom';

const ItemListContainer = ({ greeting, productsData }) => {

  return (
    <div className="list-products">

      <div className='welcome'>{greeting}</div>

      <div className='products'>
        {
          productsData.map(products => {
            return (
              <Card key={products.id} className='tarjeta' style={{ width: '20rem', border: "1px solid #79fd39" }}>
                <Link to={`/item/${products.id}`}>
                  <Card.Img variant="top" src={products.thumbnail} />
                </Link>
                <Card.Body>
                  <Card.Title>{products.title}</Card.Title>
                  <Card.Text>
                    {products.description}
                  </Card.Text>
                  <Link to={`/item/${products.id}`}>
                    Ver producto
                  </Link>
                </Card.Body>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default ItemListContainer;