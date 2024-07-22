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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 0',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '3rem',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
  };

  const titleStyle = {
    fontFamily: 'Oldenburg, sans-serif',
    color: '#F05D5D',
    fontSize: '48px',
    marginBottom: '20px',
  };

  const infoStyle = {
    fontFamily: 'Oldenburg, sans-serif',
    fontSize: '20px',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: '#F05D5D',
    textDecoration: 'none',
  };

  return (
    <div style={sectionStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} style={overlayStyle}>
            <h1 style={titleStyle}>Contact Us</h1>
            <p style={infoStyle}>
              Location: 45278 Hackney Street<br />
              Phone: +13628473908<br />
              Email: <a href="mailto:helphere@fandf.ca" style={linkStyle}>helphere@fandf.ca</a><br />
              Instagram: <a href="https://instagram.com/f&f_salon" style={linkStyle}>@f&f_salon</a>
            </p>
            <Button as={Link} to="/" variant="danger" style={{ backgroundColor: '#F05D5D', borderColor: '#F05D5D' }}>Go back Home</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
