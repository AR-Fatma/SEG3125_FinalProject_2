import React, { useState } from 'react';
import '../App.css'; // Import the App.css file
import backgroundImage from '../assets/Dehydrated.jpg'; // Import the image

const Booking = () => {
  const [coach, setCoach] = useState('');
  const [classType, setClassType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [email, setEmail] = useState('');

  const classTimes = {
    'Nutrition for Weight Loss': ['10:00 AM', '2:00 PM', '4:00 PM'],
    'Strength Training': ['9:00 AM', '11:00 AM', '1:00 PM'],
    'Yoga for Beginners': ['8:00 AM', '12:00 PM', '6:00 PM'],
  };

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${classType} with ${coach} on ${date} at ${time}. Confirmation sent to ${email}.`);
  };

  return (
    <div
      className="booking-container"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      <div className="booking-content">
        <h1 className="booking-title">Booking</h1>
        <form className="booking-form" onSubmit={handleBooking}>
          <label>
            <span>Coach</span>
            <select value={coach} onChange={(e) => setCoach(e.target.value)} className="booking-input">
              <option value="" disabled>Select Coach</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="John Doe">John Doe</option>
              <option value="Emily Davis">Emily Davis</option>
            </select>
          </label>
          <label>
            <span>Class</span>
            <select value={classType} onChange={(e) => setClassType(e.target.value)} className="booking-input">
              <option value="" disabled>Select Class</option>
              <option value="Nutrition for Weight Loss">Nutrition for Weight Loss</option>
              <option value="Strength Training">Strength Training</option>
              <option value="Yoga for Beginners">Yoga for Beginners</option>
            </select>
          </label>
          <label>
            <span>Select Date</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="booking-input"
            />
          </label>
          {classType && (
            <label>
              <span>Select Time</span>
              <select value={time} onChange={(e) => setTime(e.target.value)} className="booking-input">
                <option value="" disabled>Select Time</option>
                {classTimes[classType].map((timeSlot, index) => (
                  <option key={index} value={timeSlot}>{timeSlot}</option>
                ))}
              </select>
            </label>
          )}
          <label>
            <span>Enter Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="booking-input"
            />
          </label>
          <button type="submit" className="booking-button">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
