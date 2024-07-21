import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import nutritionImage from '../assets/20 Foods High in Antioxidants.jpg';
import strengthImage from '../assets/12 Best Weightlifting Exercises to Help You Lose Weight-2.jpg';
import mindfulnessImage from '../assets/Discover the Best Mindfulness Apps to Transform Your Life.jpg';

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #97A778;
  color: #fff;
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
  height: auto;
  border-radius: 10px;
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

const UpcomingClasses = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
  };

  return (
    <Container>
      <h2>Upcoming Classes</h2>
      <p>These are the different types of classes that we offer:</p>
      <ClassesContainer>
        <ClassCard>
          <ClassImage src={mindfulnessImage} alt="Mindfulness and Stress Management" />
          <h3>Mindfulness and Stress Management</h3>
          <p><strong>Trainer:</strong> Sarah Lee (Wellness Coach)</p>
          <p><strong>Description:</strong> Techniques and practices to manage stress and promote mental well-being.</p>
          <p><strong>Availability:</strong> Mondays and Wednesdays at 8:00 AM and 5:00 PM.</p>
          <BookNowButton onClick={handleBookNow}>Book Now</BookNowButton>
        </ClassCard>
        <ClassCard>
          <ClassImage src={strengthImage} alt="Strength Training 101" />
          <h3>Strength Training 101</h3>
          <p><strong>Trainer:</strong> Emily Johnson (Certified Fitness Trainer)</p>
          <p><strong>Description:</strong> A beginner's guide to strength training, focusing on proper techniques and building a solid foundation.</p>
          <p><strong>Availability:</strong> Mondays and Wednesdays at 9:00 AM and 6:00 PM.</p>
          <BookNowButton onClick={handleBookNow}>Book Now</BookNowButton>
        </ClassCard>
        <ClassCard>
          <ClassImage src={nutritionImage} alt="Nutrition for Weight Loss" />
          <h3>Nutrition for Weight Loss</h3>
          <p><strong>Trainer:</strong> Jane Smith (Certified Nutritionist)</p>
          <p><strong>Description:</strong> Learn how to create a balanced diet plan that helps you lose weight in a healthy and sustainable way.</p>
          <p><strong>Availability:</strong> Mondays and Wednesdays at 10:00 AM and 2:00 PM.</p>
          <BookNowButton onClick={handleBookNow}>Book Now</BookNowButton>
        </ClassCard>
      </ClassesContainer>
    </Container>
  );
};

export default UpcomingClasses;
