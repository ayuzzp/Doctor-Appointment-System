import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import BackEndUrl from '../utils/BackEndUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SearchByCity = () => {
  const [city, setCity] = useState("");
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = `${BackEndUrl}/doctor/searchbycity`;
      const response = await axios.post(api, { city });
      setDoctors(response.data);
    } catch (error) {
      console.error("Error searching doctor:", error);
    }
  };

  return (
    <>
      <h1 className="text-center my-3">Search By City</h1>
      <Form style={{ width: "400px", margin: "auto" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Enter City Name</Form.Label>
          <Form.Control
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>

      <Row xs={1} md={3} className="g-4 mt-4 px-3">
        {doctors.length > 0 ? (
          doctors.map((doc) => (
            <Col key={doc._id}>
              <Card className="shadow h-100">
                <Card.Img
                  variant="top"
                  src={doc.image || "https://via.placeholder.com/250"}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{doc.name}</Card.Title>
                  <Card.Text>
                    <strong>Specialization:</strong> {doc.speciality} <br />
                    <strong>City:</strong> {doc.city} <br />
                    <strong>Email:</strong> {doc.email}
                  </Card.Text>
                </Card.Body>
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => navigate(`/getappointment/${doc._id}`)}
                >
                  Get Appointment
                </Button>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center mt-3">No doctors found</p>
        )}
      </Row>
    </>
  );
};

export default SearchByCity;
