import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <Container>
      <footer>
        <Row>
          {/* link items take users to different pages. Displayed in blocks of 3 next to each other */}
          <div>
            <ul>
              <li>
                <Link to="">link item1</Link>
              </li>
              <li>
                <Link to="">link item2</Link>
              </li>
              <li>
                <Link to="">link item3</Link>
              </li>
              <li>
                <Link to="">link item4</Link>
              </li>
              <li>
                <Link to="">link item5</Link>
              </li>
              <li>
                <Link to="">link item6</Link>
              </li>
            </ul>
          </div>
        </Row>

        <Row>
          got questions? support@MJKART.com
          <span>
            <i src="./icons/facebook" />
            <i src="./icons/instagram" />
            <i src="./icons/twitter" />
            <i src="./icons/youtube" />
          </span>
        </Row>
      </footer>
    </Container>
  );
};

export default Footer;
