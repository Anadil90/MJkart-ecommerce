import { Container, Col, Row } from "reactstrap";
import './footer.css';

const Footer = () => {
  return (
    <div>
        <footer>
          <Row>
            <Col md='6' >
              {/* link items take users to different pages. Displayed in blocks of 3 next to each other */}
              <div>
                <ul>
                  <li>
                    <a href="/" to="">
                      link item1
                    </a>
                  </li>
                  <li>
                    <a href="/" to="">
                      link item2
                    </a>
                  </li>
                  <li>
                    <a href="/" to="">
                      link item3
                    </a>
                  </li>
                  <li>
                    <a href="/" to="">
                      link item4
                    </a>
                  </li>
                  <li>
                    <a href="/" to="">
                      link item5
                    </a>
                  </li>
                  <li>
                    <a href="/" to="">
                      link item6
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
           
    
            <Col md='6'>
              <div>
                got questions? support@MJKART.com
                <span>
                  <i src="./icons/facebook" />
                  <i src="./icons/instagram" />
                  <i src="./icons/twitter" />
                  <i src="./icons/youtube" />
                </span>
              </div>
            </Col>
           
          </Row>
        </footer>
    </div>
  );
};

export default Footer;
