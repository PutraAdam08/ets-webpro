import React, { Component } from 'react';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishName: '',
      ingredients: '',
      steps: '',
      imageSrc: null,
    };
  }

  handleDishNameChange = (event) => {
    this.setState({ dishName: event.target.value });
  };

  handleIngredientsChange = (event) => {
    this.setState({ ingredients: event.target.value });
  };

  handleStepsChange = (event) => {
    this.setState({ steps: event.target.value });
  };

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
    const { imageSrc } = this.state;

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
}

export default RecipeForm;
