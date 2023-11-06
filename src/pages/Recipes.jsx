import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Recipes() {
  return (
    <Row xs={1} md={3} className="g-5">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>
          Description
        </Card.Text>
        <Button variant="primary">View Recipe</Button>
      </Card.Body>
    </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Recipes;
