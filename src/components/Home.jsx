import { Col, Row } from "reactstrap";
import "./home.css";
import { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap';

const Home = () => {
  //create a state to store the products
// create a useEfect that fethces the data when the component loads
const [products, setProductsList] = useState([]) 

useEffect(() => {
  fetch('https://fakestoreapi.com/products?limit=15')
    .then((response) => response.json())
    .then((data) => setProductsList(data));
}, []);
  
  return (
    <div>
      
      <Row>
        <Col md="3">
          <div className="shopper-info">
            <p className="info-text">Reliable online shopping</p>
          </div>
        </Col>

        <Col md="3">
          <div className="shopper-info">
            <p className="info-text">
              Super customer support team ready to answer your inquiries
            </p>
          </div>
        </Col>

        <Col md="3">
          <div className="shopper-info">
            <p className="info-text">
              Fast delivery with an internal package tracking feature to know
              where your ordered products are.
            </p>
          </div>
        </Col>

        <Col md="3">
          <div className="shopper-info">
            <p className="info-text">
              No bogus products! We only list products that will gain your
              satisfaction
            </p>
          </div>
        </Col>
      </Row> 

      <Row>
        {
          products.map((item) => (
            <Col md='3'>
              <Card style={styles.card}>
                <CardTitle>{item.title}</CardTitle>
                  <CardBody style={styles.cardBody}>
                    <span style={styles.callToActionSpan}>
                      <Button>Buy Now</Button>
                      <CardText>Price ${item.price}</CardText>
                    </span>
                      
                    <CardImg src={item.image} style={styles.cardImg} className='img-fluid' />
                  </CardBody>
              </Card>
            </Col>          
          ))
        }
      </Row>
    </div>
  );
};

const styles = {
  card: {
    width: '18rem',
    margin: '30px 30px' 
  },
  cardBody: {
    border: '2px solid aliceblue',
    margin: '10px'
  },
  cardImg: {
    width: '300px',
    height: '230px'
  },
  callToActionSpan: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

}

export default Home;
