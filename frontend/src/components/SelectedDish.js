// SelectedDish.js
import React from 'react';

const SelectedDish = ({ dish }) => {
  const handleAddToCart = () => {
    // Handle adding dish to cart
  };

  return (
    <div className="container">
      <div className="card mx-auto my-5" style={{ maxWidth: "500px" }}>
        <img className="card-img-top" src={dish.img} alt={dish.name} />
        <div className="card-body">
          <h5 className="card-title">{dish.name}</h5>
          <p className="card-text">{dish.description}</p>
          <div className="text-danger fw-bold">Price: Rs {dish.price}/-</div>
          <div className="d-flex justify-content-between align-items-center">
            <select className="form-select">
              {Array.from(Array(7), (e, i) => (
                <option value={i} key={`${dish.id}-${i}`}>{i}</option>
              ))}
            </select>
            <div className="text-danger fw-bold">Total: Rs {dish.price * 0}/-</div>
          </div>
          <button className="btn btn-danger mt-3" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SelectedDish;
