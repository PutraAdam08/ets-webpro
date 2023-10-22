import react, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css'
 
export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <>
            <Card style={{ width: '25rem' }} className="p-5">
                <Form >
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
                            <Form.Control type="password" placeholder="Password" />
                        </InputGroup>
                        </Form.Group>
                    </Row>
                    <div className="d-flex flex-row justify-content-center gap-4 my-2">
                            <Button variant="secondary" type="submit">
                                Log in
                            </Button>
                            <Button variant="primary" type="submit" onClick={() => props.onFormSwitch('register')}>
                                Sign in
                            </Button>
                    </div>
                    <Row>
                        <Button className="mt-3 text-left" variant="link">Forget password?</Button>
                    </Row>
                </Form>
            </Card>
        </>
        /*<div className="auth-form-container">
            <h2>login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input value = {email} onChange={(e) => setEmail(e.target.value)} email = "Email" id = "email" placeholder="email"/>
        <label htmlFor="Password">Password</label>
        <input value = {password} onChange={(e) => setPassword(e.target.value)} password = "Password" id = "password" placeholder="password"/>
        <button type="submit">Log in</button>
        </form>
        <button className="link-bin" onClick={() => props.onFormSwitch('register')}>Don't have an account? register</button>
        </div>*/
    )
}