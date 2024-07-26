import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { LazyLoadImage } from 'react-lazy-load-image-component';
//import 'react-lazy-load-image-component/src/effects/blur.css';
import { Button } from 'react-bootstrap';
//*import './CardList.css'; // Import the CSS file

function CardList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get('https://dummyjson.com/products/')
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="card-container">
      {products.map((product) => (
        <Card key={product.id} className="card-item">
          {/* <LazyLoadImage
            alt={product.title}
            src={product.thumbnail}
            effect="blur"
            width="100%"
            height="auto"
          /> */}
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Title>Price: ₹{product.price}</Card.Title>
            <Button variant="dark">Buy Now</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardList;