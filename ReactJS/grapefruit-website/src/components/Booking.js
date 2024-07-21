import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
  const [startDate, setStartDate] = React.useState(new Date());

  const datePickerStyles = {
    width: '100%',
    height: 'auto',
  };

  return (
    <div style={{ backgroundColor: '#97A778', minHeight: '100vh', padding: '50px 0' }}>
      <Container>
        <h1 className="text-center mb-4" style={{ fontFamily: 'Oldenburg', color: '#fff' }}>Booking</h1>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={5}>
            <div className="mb-4" style={datePickerStyles}>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                inline
              />
            </div>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <Form>
              <Form.Group controlId="formCoach" className="mb-3">
                <Form.Label style={{ color: '#fff' }}>Select Coach</Form.Label>
                <Form.Control as="select">
                  <option>Jane Smith</option>
                  <option>Emily Johnson</option>
                  <option>Sarah Lee</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formClass" className="mb-3">
                <Form.Label style={{ color: '#fff' }}>Select Class</Form.Label>
                <Form.Control as="select">
                  <option>Nutrition for Weight Loss</option>
                  <option>Strength Training 101</option>
                  <option>Mindfulness and Stress Management</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label style={{ color: '#fff' }}>Enter Email</Form.Label>
                <Form.Control type="email" placeholder="example@fandf.com" />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="danger" size="lg" style={{ backgroundColor: '#F05D5D', borderColor: '#F05D5D' }}>
                  Book Now
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
