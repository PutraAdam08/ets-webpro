import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css';

class HomeProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: 'path_to_default_image.jpg', // Set a default image source
      name: '',
      email: '',
    };
  }

  handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.setState({ imageSrc: e.target.result });
      };

      reader.readAsDataURL(file);
    }
  };

  render() {
    return (
      <Row>
        <Col md={6}>
          <div className="custom-container">
            <Card style={{ height: '100%' }}>
              <Card.Body style={{ height: '100%' }}>
                <div className="text-center">
                  <h3>MyProfile</h3>
                </div>
                <Form>
                  <Form.Group controlId="FormName">
                    <Row>
                      <Col>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter name"
                          value={this.state.name}
                          onChange={(e) =>
                            this.setState({ name: e.target.value })
                          }
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group controlId="FormEmail">
                    <Row>
                      <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={this.state.email}
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
                <div className="text-center">
                  <Button variant="primary" className="mt-2">
                    Edit
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col md={6}>
          <Row xs={1} md={3} className="g-5">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col key={idx}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    );
  }
}

export default HomeProfile;
