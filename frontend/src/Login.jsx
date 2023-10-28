import react, {useState} from "react";
import { useNavigate } from "react-router-dom";
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
 
const Login = () =>{
   

    return(
        <Container className="my-5 d-flex flex-row justify-content-center">
            <Card style={{ width: '25rem', height:'30rem' }} className="p-5 my-5">
                <Form>
                    <Row>
                        <h1 className="mb-5 text-center">Welcome</h1>
                    </Row>
                    <Row>
                        <Form.Group as = {Col} className="mb-3" controlId="formGridEmail">
                            <Form.Label>Email address</Form.Label>
                        <InputGroup size="sm">
                            <Form.Control type="email" placeholder="Enter email" /> 
                        </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as = {Col} className="mb-3" controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                        <InputGroup size="sm">
                            <Form.Control type="password" placeholder="Password"/>
                        </InputGroup>
                        </Form.Group>
                    </Row>
                    <div className="d-flex flex-row justify-content-center gap-4 my-2">
                            <Button variant="secondary" type="submit">
                                Log in
                            </Button>
                            <Button variant="primary" type="submit">
                                Sign in
                            </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
}

export default Login