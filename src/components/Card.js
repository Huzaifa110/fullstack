import React, { useEffect, useState } from 'react';

const Card = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/dishes", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setFoodItems(data.foodItems);
      setFoodCategories(data.foodCategory);

      const initialQuantities = {};
      data.foodItems.forEach(item => {
        initialQuantities[item.id] = 0;
      });
      setQuantities(initialQuantities);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleQuantity = (itemId, event) => {
    const selectedQuantity = parseInt(event.target.value);
    setQuantities({
      ...quantities,
      [itemId]: selectedQuantity
    });
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = foodItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery) &&
    (selectedCategory === '' || item.categoryName.toLowerCase().includes(selectedCategory))
  );

  const handleAddToCart = (itemId, itemName) => {
    alert(`I am ${itemName} with ID: ${itemId}`);
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-2">
          <select
            className="form-select bg-danger text-white my-1"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="">All Categories</option>
            {foodCategories.map((category, index) => (
              <option key={index} value={category.categoryName.toLowerCase()}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control mx-0 border-danger text-danger my-1"
            placeholder="Search dishes..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
      </div>
      {foodCategories.map((category, index) => (
        <div key={index}>
          <div className='fs-3 m-3 text-danger fw-bolder'>{category.categoryName}</div>
          <div className="d-flex flex-wrap">
            {filteredItems
              .filter(item => item.categoryName === category.categoryName)
              .map((item, index) => (
                <div key={index} className="card m-4" style={{ width: "18rem", maxHeight: "600px" }}>
                  <img className="card-img-top" src={item.img} alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title text-danger fst-italic fw-bolder">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    {/* <p className="card-text">{item._id}</p> */}
                    <div className="text-center mb-3 text-danger fw-bolder">Price: Rs {item.price}/-</div>
                    <div className="d-flex justify-content-between align-items-center">
                      <select
                        className='bg-danger rounded text-white fw-bolder'
                        name=""
                        id=""
                        onChange={(e) => handleQuantity(item.id, e)}
                        // value={quantities[item.id]}
                        value={quantities[item.id] || 0}
                      >
                        {Array.from(Array(7), (e, i) => (
                          <option value={i} key={`${item.id}-${i}`}>{i}</option>
                        ))}
                      </select>
                      <div className='text-danger fw-bolder'>Total: Rs {quantities[item.id] * item.price}/-</div>
                    </div>
                    <hr />
                    <div className="text-center">
                      <div className="btn btn-outline-danger justify-right fw-bolder" onClick={() => handleAddToCart(item._id, item.name)}>Add to Cart</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
