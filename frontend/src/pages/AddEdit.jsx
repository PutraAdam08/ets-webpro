import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RecipeForm = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const [RecipeName, setRecipeName] = useState([]);
    const [Ingredients, setIngridient] = useState([]);
    const [Step, setStep] = useState([]);
    const [RecipeType, setRecipeType] = useState([]);
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
            console.log(Name);
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
    return (
      <>
        <div className='container p-5 justify-content-center'>
          <div className='row p-3 bg-primary'>
            <div className='col'>
              <div className='row'>
                <Card
                  bg={'light'}
                  as={Col}
                  className='me-3'
                  style={{
                    height: '18.5em',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${imageSrc})`,
                  }}
                >
                  {/* No need to display the <img> element */}
                </Card>
                <div className='col'>
                  <div className='row'>
                    <Form as={Col}>
                      <Form.Group controlId='FormDishName'>
                        <Form.Label>Dish Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter dish name'
                          style={{ width: '16em' }}
                          onChange={this.handleDishNameChange}
                        />
                      </Form.Group>
                    </Form>

                    <Form as={Col}>
                      <Form.Group controlId='formFile' className='mb-3'>
                        <Form.Label>Input Dish Image</Form.Label>
                        <Form.Control
                          type='file'
                          onChange={this.handleFileChange}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className='row'>
                    <Form as={Col}>
                      <Form.Group controlId='FormIngredient'>
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter ingredients'
                          style={{ height: '11em' }}
                          onChange={this.handleIngredientsChange}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
                <Form className='me-3'>
                  <Form.Group controlId='FormStep'>
                    <Form.Label>How To Do</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Step Here'
                      style={{ height: '12em' }}
                      onChange={this.handleStepsChange}
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className='col'>
                <Button type='submit' className='mt-3' variant='light'>
                  Add
                </Button>{' '}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default RecipeForm;
