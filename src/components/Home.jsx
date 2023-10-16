import { Col, Row } from "reactstrap";
import "./home.css";

const Home = () => {
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

        <Col>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.unsplash.com/photo-1517635676447-3a480fbfd8f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.unsplash.com/photo-1617858123189-b26eb62d8eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </Col>
      </Row>

      
    </div>
  );
};

export default Home;
