import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import './styles.css';
import { update } from 'lodash';

const HomeProfileEdit = () => {
  const [Name, setName] = useState('');
  const [NewName, setNewName] = useState('');
  const [Email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [msg, setMsg] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
 
    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.Name);
            setEmail(decoded.Email);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("/login");
            }
        }
    }
 
    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setEmail(decoded.Email);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
 
    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    const UpdateUser = async (e) => {
      e.preventDefault();
      try {
          await axios.patch('http://localhost:5000/users/UpdateUser/${Email}', {
              NewName
          });
          navigate('/Profile');

      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg);
          }
      }
  }

    return (
      <div className='App'>
        <div className='container-fluid'>
          <Row className='gap-5 justify-content-center' style={{height: '100vh'}}>
            <Col md={3} className='bg-white'>
              <Row className='px-3 pt-5' style={{position:'fixed'}}>
                <Col className='mx-5 mt-5'>
                <h3 className='text-center'>MyProfile</h3>
                    <Form onSubmit={UpdateUser}>
                      <Form.Group controlId="FormName">
                        <Row>
                          <Col>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder={Name}
                              onChange={(e) =>
                                setNewName( e.target.value )
                              }
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                      <Form.Group controlId="FormEmail">
                        <Row>
                          <Col>
                            <Form.Label>Email</Form.Label>
                            <Form.Control disabled
                              type="email"
                              placeholder={Email}
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                      <div className="text-center">
                      <Button variant="primary" className="mt-2" type='submit'>
                        Submit
                      </Button>
                    </div>
                    </Form>
                </Col>
              </Row>
            </Col>
            <Col  style={{position: 'sticky'}}>
              <Row className='mt-5'></Row>
              <Row xs={1} md={4} className="gap-5 mt-3">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <Col key={idx}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary" type='submit'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
}

export default HomeProfileEdit;
