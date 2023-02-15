import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <div className="bg">
      <Container>
        <Row>
          <Col>
            <p className="text1">
              Built with React & Bootstrap <br></br>
              kameel odi& yousef 2/2023
            </p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;