import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h3 style={{color:'orange'}}>Book & Eat</h3>
            <p>Book & Eat will provide you with the best food recipies and delivery experience.</p>
            <p>123 Main Street, Surampalem</p>
            <p>Adb Road, 521344</p>
          </Col>
          <Col md={4}>
            <h3>Links</h3>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">SignUp</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>Follow Us</h3>
            <p>Stay up-to-date with our latest offers and promotions.</p>
            <ul className="list-unstyled d-flex justify-content-between">
              <li><a href="/"><FaFacebook /></a></li>
              <li><a href="/"><FaTwitter /></a></li>
              <li><a href="/"><FaInstagram /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-secondary text-center py-3">
        <Container>
          <p className="mb-0">&copy; {new Date().getFullYear()} Book & Eat. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
