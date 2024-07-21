import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../assets/sweet-summer-citrus.jpg';

const HomePage = () => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={sectionStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center" style={{ backgroundColor: 'rgba(243, 239, 214, 0.8)', padding: '2rem', borderRadius: '10px' }}>
            <h1 style={{ fontFamily: 'Oldenburg', color: '#F05D5D', fontSize: '60px' }}>Welcome to Grapefruit</h1>
            <p style={{ fontFamily: 'Oldenburg', fontSize: '25px', color: '#F05D5D' }}>Your Journey to a Healthier You Starts Here!</p>
            <Button variant="success" size="lg" style={{ backgroundColor: '#97A778', borderColor: '#97A778' }}>Start Your Journey Today</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
