import react, {useState} from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap";

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();
 
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            history.push("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <Container className="my-5 d-flex flex-row justify-content-center">
            <Card  style={{ width: '30rem', height:'35rem' }} className="p-5 m-5">
                <Form className="my-2" onSubmit={Register}>
                    <Row>
                        <h1 className="mb-5 text-center">Registration</h1>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as = {Col}  controlId="name">
                            <Form.Label>Name</Form.Label>
                            <InputGroup size="sm">
                                <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as = {Col} className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                        <InputGroup size="sm">
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </InputGroup>
                        <p className="has-text-centered">{msg}</p>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as = {Col} className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                        <InputGroup size="sm">
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as = {Col} className="mb-3" controlId="password">
                            <Form.Label>Confirm password</Form.Label>
                        <InputGroup size="sm">
                            <Form.Control type="password" placeholder="Password"  value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                        </InputGroup>
                        </Form.Group>
                    </Row>
                    <div className="d-flex flex-row justify-content-center gap-4 my-2">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Button variant="secondary" type="submit">
                                Log in
                            </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
}

export default Register;