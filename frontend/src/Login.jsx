import react, {Component, useState} from "react";
import { redirect, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Register from "./Register";
 
const Login = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                Email: Email,
                Password: Password
            });
            navigate("/homepages");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    
        return(
            <div className="App login-form">
                <Container className="my-5 d-flex flex-row justify-content-center">
                    <Card style={{ width: '25rem', height:'30rem' }} className="p-5 my-5">
                        <Form onSubmit={Auth}>
                            <Row>
                                <h1 className="mb-5 text-center">Welcome</h1>
                            </Row>
                            <Row>
                                <Form.Group as = {Col} className="mb-3" controlId="formGridEmail">
                                    <Form.Label>Email address</Form.Label>
                                <InputGroup size="sm">
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter email" 
                                        name="Email"
                                        value={Email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as = {Col} className="mb-3" controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                <InputGroup size="sm">
                                <Form.Control type="password" placeholder="Password"
                                    name="Password"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                </InputGroup>
                                </Form.Group>
                            </Row>
                            <div className="d-flex flex-row justify-content-center gap-4 my-2">
                                    <Button variant="secondary" type="submit">
                                        Log in
                                    </Button>
                                    <Button variant="primary" onClick={event =>  window.location.href='/'}>
                                        Sign in
                                    </Button>
                            </div>
                        </Form>
                    </Card>
                </Container>
            </div>
        );
}

export default Login;