import react, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap";

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Fname] = useState('');
    const [Lname] = useState('');
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <Container className="my-5 d-flex flex-row justify-content-center">
            <Card  style={{ width: '30rem', height:'35rem' }} className="p-5 m-5">
                <Form className="my-2">
                    <Row>
                        <h1 className="mb-5 text-center">Registration</h1>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as = {Col}  controlId="Fname">
                            <Form.Label>First name</Form.Label>
                        <InputGroup size="sm">
                            <Form.Control type="text" placeholder="First name" />
                        </InputGroup>
                        </Form.Group>
                        <Form.Group as = {Col}  controlId="Lname">
                            <Form.Label>Last name</Form.Label>
                        <InputGroup size="sm">
                            <Form.Control type="text" placeholder="Last name" />
                        </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as = {Col} className="mb-3" controlId="sex">
                            <Form.Label>Sex</Form.Label>
                        <InputGroup size="sm">
                            <Form.Control type="text" placeholder="Male/Female?" />
                        </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as = {Col} className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                        <InputGroup size="sm">
                            <Form.Control type="email" placeholder="Enter email" />
                        </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as = {Col} className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                        <InputGroup size="sm">
                            <Form.Control type="password" placeholder="Password" />
                        </InputGroup>
                        </Form.Group>
                    </Row>
                    <div className="d-flex flex-row justify-content-center gap-4 my-2">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Button variant="secondary" type="submit" onClick={() => props.onFormSwitch('login')}>
                                Log in
                            </Button>
                    </div>
                </Form>
            </Card>
        </Container>
        /*<div className="auth-form-container">
            <h2>register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input value = {email} onChange={(e) => setEmail(e.target.value)} email = "email" id = "email" placeholder="email"/>
        <label htmlFor="First Name">First name</label>
        <input value = {Fname} Fname = "Fname" id= "Fname" placeholder="First Name"/>
        <label htmlFor="Last Name">Last name</label>
        <input value = {Lname} Lname = "Lname" id= "Lname" placeholder="Last Name"/>
        <label htmlFor="Password">Password</label>
        <input value = {password} onChange={(e) => setPassword(e.target.value)} password = "Password" id = "password" placeholder="password"/>
        <button type="submit">Log in</button>
        </form>
        <button className="link-bin" onClick={() => props.onFormSwitch('login')}>Already have an account? login</button>
        </div>*/
    )
}