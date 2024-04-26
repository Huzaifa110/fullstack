// Dummy.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import SelectedDish from './SelectedDish'; // Import SelectedDish properly

const Dummy = () => {
  const history = useNavigagte(); 
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

  const handleCardClick = (dish) => {
    history.push({
      pathname: '/selected-dish',
      state: { dish } 
    });
  };

  return (
    <div>
      <div className="container" style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
        <select
          className="form-select bg-danger text-white my-2"
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
        <input
          type="text"
          className="form-control mb-2 border-danger text-danger"
          placeholder="Search dishes..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </div>
      {foodCategories.map((category, index) => (
        <div key={index}>
          <div className='fs-3 m-3 text-danger fw-bolder'>{category.categoryName}</div>
          <div className="d-flex flex-wrap">
            {filteredItems
              .filter(item => item.categoryName === category.categoryName)
              .map((item, index) => (
                <div key={index} className="card m-4" style={{ width: "18rem", maxHeight: "600px" }} onClick={() => handleCardClick(item)}>
                  <img className="card-img-top" src={item.img} alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title text-danger">{item.name}</h5>
                    <div className="text-danger fw-bolder">Price: Rs {item.price}/-</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dummy;
