import React from 'react';
import Form from 'react-bootstrap/Form';

function SelectBasicExample() {
    return (
      <Form.Select aria-label="Default select example">
        <option>Sort by</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    );
  }

const FoodCardsList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src="food1.jpg" className="card-img-top" alt="Food 1" />
            <div className="card-body">
              <h5 className="card-title">Food 1</h5>
              <p className="card-text">Description of Food 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="food2.jpg" className="card-img-top" alt="Food 2" />
            <div className="card-body">
              <h5 className="card-title">Food 2</h5>
              <p className="card-text">Description of Food 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="food3.jpg" className="card-img-top" alt="Food 3" />
            <div className="card-body">
              <h5 className="card-title">Food 3</h5>
              <p className="card-text">Description of Food 3.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="food4.jpg" className="card-img-top" alt="Food 4" />
            <div className="card-body">
              <h5 className="card-title">Food 4</h5>
              <p className="card-text">Description of Food 4.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src="food5.jpg" className="card-img-top" alt="Food 5" />
            <div className="card-body">
              <h5 className="card-title">Food 5</h5>
              <p className="card-text">Description of Food 5.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="food6.jpg" className="card-img-top" alt="Food 6" />
            <div className="card-body">
              <h5 className="card-title">Food 6</h5>
              <p className="card-text">Description of Food 6.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="food7.jpg" className="card-img-top" alt="Food 7" />
            <div className="card-body">
              <h5 className="card-title">Food 7</h5>
              <p className="card-text">Description of Food 7.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="food8.jpg" className="card-img-top" alt="Food 8" />
            <div className="card-body">
              <h5 className="card-title">Food 8</h5>
              <p className="card-text">Description of Food 8.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardsList;
