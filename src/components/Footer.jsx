import { Container, Row } from "reactstrap";

import React from "react";

const Footer = () => {
  return (
    <div>
      <Container>
        <footer>
          <Row>
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
    </div>
  );
};

export default Footer;
