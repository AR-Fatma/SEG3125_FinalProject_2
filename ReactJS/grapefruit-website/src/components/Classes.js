import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import nutritionImage from '../assets/20 Foods High in Antioxidants.jpg';
import strengthImage from '../assets/12 Best Weightlifting Exercises to Help You Lose Weight-2.jpg';
import mindfulnessImage from '../assets/Discover the Best Mindfulness Apps to Transform Your Life.jpg';

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #F9F9F6;
  color: #333;
`;

const ClassesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

const ClassCard = styled.div`
  background-color: #8B8B8B;
  padding: 20px;
  border-radius: 10px;
  width: 30%;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ClassImage = styled.img`
  width: 100%;
  height: 250px; /* Fixed height for uniform image sizes */
  object-fit: cover;
  border-radius: 10px;
`;

const ClassTitle = styled.h3`
  color: #F05D5D;
  margin: 10px 0;
`;

const ClassDescription = styled.p`
  color: #fff;
  text-align: left;
`;

const BookNowButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #F05D5D;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #D04C4C;
  }
`;

const Classes = () => {
  const navigate = useNavigate();

  const handleBookNow = (className) => {
    navigate('/booking', { state: { className } });
  };

  return (
    <Container>
      <h1>Upcoming Classes</h1>
      <p>These are the different types of classes that we offer:</p>
      <ClassesContainer>
        <ClassCard>
          <ClassImage src={mindfulnessImage} alt="Person practicing mindfulness by a lake" />
          <ClassTitle>Mindfulness and Stress Management</ClassTitle>
          <ClassDescription><strong>Trainer:</strong> Sarah Lee (Wellness Coach)</ClassDescription>
          <ClassDescription><strong>Description:</strong> Techniques and practices to manage stress and promote mental well-being.</ClassDescription>
          <ClassDescription><strong>Availability:</strong> Mondays and Wednesdays at 8:00 AM and 5:00 PM.</ClassDescription>
          <BookNowButton 
            onClick={() => handleBookNow('Mindfulness and Stress Management')}
            aria-label="Book Now for Mindfulness and Stress Management"
          >
            Book Now
          </BookNowButton>
        </ClassCard>
        <ClassCard>
          <ClassImage src={strengthImage} alt="Person performing strength training in a gym" />
          <ClassTitle>Strength Training 101</ClassTitle>
          <ClassDescription><strong>Trainer:</strong> Emily Johnson (Certified Fitness Trainer)</ClassDescription>
          <ClassDescription><strong>Description:</strong> A beginner's guide to strength training, focusing on proper techniques and building a solid foundation.</ClassDescription>
          <ClassDescription><strong>Availability:</strong> Mondays and Wednesdays at 9:00 AM and 6:00 PM.</ClassDescription>
          <BookNowButton 
            onClick={() => handleBookNow('Strength Training 101')}
            aria-label="Book Now for Strength Training 101"
          >
            Book Now
          </BookNowButton>
        </ClassCard>
        <ClassCard>
          <ClassImage src={nutritionImage} alt="Various nutritious foods arranged on a table" />
          <ClassTitle>Nutrition for Weight Loss</ClassTitle>
          <ClassDescription><strong>Trainer:</strong> Jane Smith (Certified Nutritionist)</ClassDescription>
          <ClassDescription><strong>Description:</strong> Learn how to create a balanced diet plan that helps you lose weight in a healthy and sustainable way.</ClassDescription>
          <ClassDescription><strong>Availability:</strong> Mondays and Wednesdays at 10:00 AM and 2:00 PM.</ClassDescription>
          <BookNowButton 
            onClick={() => handleBookNow('Nutrition for Weight Loss')}
            aria-label="Book Now for Nutrition for Weight Loss"
          >
            Book Now
          </BookNowButton>
        </ClassCard>
      </ClassesContainer>
    </Container>
  );
};

export default Classes;
