import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import nutritionImage from '../assets/20 Foods High in Antioxidants.jpg';
import strengthImage from '../assets/12 Best Weightlifting Exercises to Help You Lose Weight-2.jpg';
import mindfulnessImage from '../assets/Discover the Best Mindfulness Apps to Transform Your Life.jpg';

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #6B8F71; /* Light Gray background */
  color: #2E8B57; /* Dark Green text */
`;

const ClassesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

const ClassCard = styled.div`
  background-color: #2C5234; 
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
  color: #FF6347; /* Grapefruit Red for the title */
  margin: 10px 0;
`;

const ClassDescription = styled.p`
  color: #FFFFFF; /* White for the description text */
  text-align: left;
`;

const BookNowButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #FF6347; /* Grapefruit Red for the button */
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #B22222; /* Deep Red on hover */
  }
`;

const TranslateButton = styled.button`
  margin: 20px;
  padding: 10px 20px;
  background-color: #FF6347; /* Grapefruit Red for the button */
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #B22222; /* Deep Red on hover */
  }
`;

const Classes = () => {
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();

  const handleBookNow = (className) => {
    navigate('/booking', { state: { className } });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const classesContent = {
    en: {
      title: 'Upcoming Classes',
      description: 'These are the different types of classes that we offer:',
      classes: [
        {
          image: mindfulnessImage,
          title: 'Mindfulness and Stress Management',
          trainer: 'Trainer: Sarah Lee (Wellness Coach)',
          description: 'Techniques and practices to manage stress and promote mental well-being.',
          availability: 'Availability: Mondays and Wednesdays at 8:00 AM and 5:00 PM.',
        },
        {
          image: strengthImage,
          title: 'Strength Training 101',
          trainer: 'Trainer: Emily Johnson (Certified Fitness Trainer)',
          description: "A beginner's guide to strength training, focusing on proper techniques and building a solid foundation.",
          availability: 'Availability: Mondays and Wednesdays at 9:00 AM and 6:00 PM.',
        },
        {
          image: nutritionImage,
          title: 'Nutrition for Weight Loss',
          trainer: 'Trainer: Jane Smith (Certified Nutritionist)',
          description: 'Learn how to create a balanced diet plan that helps you lose weight in a healthy and sustainable way.',
          availability: 'Availability: Mondays and Wednesdays at 10:00 AM and 2:00 PM.',
        },
      ],
    },
    es: {
      title: 'Clases Próximas',
      description: 'Estos son los diferentes tipos de clases que ofrecemos:',
      classes: [
        {
          image: mindfulnessImage,
          title: 'Manejo de Estrés y Mindfulness',
          trainer: 'Entrenadora: Sarah Lee (Coach de Bienestar)',
          description: 'Técnicas y prácticas para manejar el estrés y promover el bienestar mental.',
          availability: 'Disponibilidad: Lunes y Miércoles a las 8:00 AM y 5:00 PM.',
        },
        {
          image: strengthImage,
          title: 'Entrenamiento de Fuerza 101',
          trainer: 'Entrenadora: Emily Johnson (Entrenadora Certificada de Fitness)',
          description: 'Una guía para principiantes sobre entrenamiento de fuerza, enfocándose en técnicas adecuadas y construcción de una base sólida.',
          availability: 'Disponibilidad: Lunes y Miércoles a las 9:00 AM y 6:00 PM.',
        },
        {
          image: nutritionImage,
          title: 'Nutrición para Pérdida de Peso',
          trainer: 'Entrenadora: Jane Smith (Nutricionista Certificada)',
          description: 'Aprende cómo crear un plan de dieta balanceada que te ayude a perder peso de manera saludable y sostenible.',
          availability: 'Disponibilidad: Lunes y Miércoles a las 10:00 AM y 2:00 PM.',
        },
      ],
    },
  };

  const content = classesContent[language];

  return (
    <Container>
      <TranslateButton onClick={toggleLanguage}>
        {language === 'en' ? 'Traducir a Español' : 'Translate to English'}
      </TranslateButton>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      <ClassesContainer>
        {content.classes.map((classInfo, index) => (
          <ClassCard key={index}>
            <ClassImage src={classInfo.image} alt={classInfo.title} />
            <ClassTitle>{classInfo.title}</ClassTitle>
            <ClassDescription>{classInfo.trainer}</ClassDescription>
            <ClassDescription>{classInfo.description}</ClassDescription>
            <ClassDescription>{classInfo.availability}</ClassDescription>
            <BookNowButton 
              onClick={() => handleBookNow(classInfo.title)}
              aria-label={`Book Now for ${classInfo.title}`}
            >
              {language === 'en' ? 'Book Now' : 'Reservar Ahora'}
            </BookNowButton>
          </ClassCard>
        ))}
      </ClassesContainer>
    </Container>
  );
};

export default Classes;
