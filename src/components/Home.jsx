import { Container, Col, Row } from "reactstrap";
import "./home.css";

const Home = () => {
  return (
    <Container>
      This is going to be a component showing 4 information only divs telling
      the user of the advantages of shopping online from MJkart.
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
    </Container>
  );
};

export default Home;
