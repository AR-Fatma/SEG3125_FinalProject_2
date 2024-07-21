import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../assets/Citrus.jpg';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 0',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(243, 239, 214, 0.8)',
    padding: '2rem',
    borderRadius: '10px',
    textAlign: 'center',
  };

  return (
    <div style={sectionStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} style={overlayStyle}>
            <h1 style={{ fontFamily: 'Oldenburg', color: '#F05D5D', fontSize: '60px' }}>Contact Us</h1>
            <p style={{ fontFamily: 'Oldenburg', fontSize: '20px', color: '#F05D5D' }}>
              Location: 45278 Hackney Street<br />
              Phone: +13628473908<br />
              Email: <a href="mailto:helphere@fandf.ca" style={{ color: '#F05D5D' }}>helphere@fandf.ca</a><br />
              Instagram: <a href="https://instagram.com/f&f_salon" style={{ color: '#F05D5D' }}>@f&f_salon</a><br />
            </p>
            <Button as={Link} to="/" variant="danger" style={{ backgroundColor: '#F05D5D', borderColor: '#F05D5D' }}>Go back Home</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
