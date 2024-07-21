import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import photo1 from '../assets/Personal Branding Photoshoot for a Nutritionist.jpg';
import photo2 from '../assets/sami clarke x form nutrition — STEFANIEMPHOTO.jpg';
import photo3 from '../assets/Coach Alyssa Chang - Health and Wellness Specialist Branding Photos.jpg';

const HealthCoaches = () => {
  const [selectedCoach, setSelectedCoach] = useState(null);
  const navigate = useNavigate();

  const coaches = [
    {
      name: 'Jane Smith',
      title: 'Certified Nutritionist',
      image: photo1,
      description: `Jane Smith has 10 years of experience in helping clients achieve their health goals through personalized nutrition plans. 
      She specializes in weight management, sports nutrition, and meal planning. Jane is known for her holistic approach to health and wellness, 
      incorporating not just diet but also lifestyle changes to help her clients achieve long-term success. She holds a Master’s degree in Nutrition 
      Science and is a certified dietitian. Jane believes in the power of food as medicine and works closely with her clients to create sustainable 
      and enjoyable eating habits. In her spare time, she enjoys hiking, yoga, and exploring new healthy recipes.`,
    },
    {
      name: 'Emily Johnson',
      title: 'Certified Fitness Trainer',
      image: photo2,
      description: `Emily Johnson is a fitness trainer with a background in kinesiology and over 8 years of experience. 
      She offers personalized training programs tailored to individual needs. Emily’s expertise lies in strength training, functional fitness, 
      and cardiovascular conditioning. She is passionate about helping her clients build strength and endurance, improve mobility, and achieve 
      their fitness goals. Emily holds multiple certifications, including ACE and NASM, and regularly attends workshops to stay updated with 
      the latest fitness trends. Outside of the gym, she enjoys participating in triathlons, practicing mindfulness, and spending time outdoors.`,
    },
    {
      name: 'Sarah Lee',
      title: 'Wellness Coach',
      image: photo3,
      description: `Sarah Lee, a wellness coach with a background in psychology and wellness, helps clients achieve a balanced lifestyle 
      through stress management, mindfulness, and healthy habits. Sarah’s approach combines mental and physical health to support overall well-being. 
      She has a Bachelor’s degree in Psychology and a certification in wellness coaching. Sarah specializes in creating customized wellness plans 
      that include stress reduction techniques, mindfulness practices, and healthy living strategies. She is dedicated to empowering her clients 
      to lead fulfilling lives through positive lifestyle changes. In her free time, Sarah practices meditation, enjoys gardening, and volunteers 
      at community wellness events.`,
    },
  ];

  const handleCoachClick = (coach) => {
    setSelectedCoach(coach);
  };

  const handleBackClick = () => {
    setSelectedCoach(null);
  };

  const handleBookNowClick = () => {
    navigate('/booking');
  };

  return (
    <div style={{ backgroundColor: '#97A778', minHeight: '100vh', padding: '50px 0', color: '#FFFFFF', width: '100vw', margin: '0' }}>
      <Container>
        <h1 className="text-center" style={{ fontFamily: 'Oldenburg', marginBottom: '30px' }}>Health Coaches</h1>
        {!selectedCoach ? (
          <Row className="justify-content-center">
            {coaches.map((coach, index) => (
              <Col md={4} key={index}>
                <div
                  style={{ marginBottom: '20px', overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => handleCoachClick(coach)}
                >
                  <img
                    src={coach.image}
                    alt={coach.name}
                    style={{
                      width: '100%',
                      transition: 'transform 0.3s ease',
                    }}
                    className="hover-effect"
                  />
                  <p style={{ textAlign: 'center', fontFamily: 'Oldenburg', fontSize: '20px', color: '#FFFFFF' }}>{coach.name}</p>
                  <p style={{ textAlign: 'center', fontFamily: 'Oldenburg', fontSize: '16px', color: '#FFFFFF' }}>{coach.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center">
            <Row className="justify-content-center align-items-center">
              <Col md={4}>
                <img src={selectedCoach.image} alt={selectedCoach.name} style={{ width: '100%', marginBottom: '20px' }} />
              </Col>
              <Col md={8}>
                <h2 style={{ fontFamily: 'Oldenburg', color: '#FFFFFF' }}>{selectedCoach.name}</h2>
                <h4 style={{ fontFamily: 'Oldenburg', color: '#FFFFFF', marginBottom: '20px' }}>{selectedCoach.title}</h4>
                <p style={{ fontFamily: 'Oldenburg', color: '#FFFFFF', fontSize: '18px', textAlign: 'left' }}>{selectedCoach.description}</p>
                <Button
                  style={{
                    backgroundColor: '#F05D5D',
                    borderColor: '#F05D5D',
                    borderRadius: '8px',
                    fontFamily: 'Oldenburg',
                    fontSize: '20px',
                    margin: '20px 0',
                  }}
                  onClick={handleBookNowClick}
                >
                  Book Now
                </Button>
                <br />
                <Button
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#FFFFFF',
                    color: '#F05D5D',
                    borderRadius: '8px',
                    fontFamily: 'Oldenburg',
                    fontSize: '20px',
                  }}
                  onClick={handleBackClick}
                >
                  Go Back
                </Button>
              </Col>
            </Row>
          </div>
        )}
      </Container>
      <style>
        {`
          .hover-effect:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default HealthCoaches;
