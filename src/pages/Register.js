import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [data, setData] = useState({ name: "", location: "", email: "", password: "" });
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        if (json.errors) {
          const errorMessage = json.errors.map(error => error.msg).join(", ");
          setError(errorMessage);
        } else {
          setError("Invalid credentials!");
        }
      } else {
        navigate("/login");
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  return (
    <div>
      <Navbar />
      <div className='container register-container' style={{ "maxWidth": "400px !important" }}>
        <h2 className="mb-4 text-center text-danger font-weight-bold">Register Yourself</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group m-1">
            <label htmlFor="exampleInputName1" className='text-danger mb-1'>Name</label>
            <input type="text" className="form-control border-danger" id="exampleInputName1" placeholder="enter name" required minLength={3} name='name' value={data.name} onChange={handleChange} />
          </div>
          <div className="form-group m-1">
            <label htmlFor="exampleInputLocation1" className='text-danger mb-1'>Location</label>
            <input type="text" className="form-control border-danger" id="exampleInputLocation1" placeholder="enter location" required name='location' value={data.location} onChange={handleChange} />
          </div>
          <div className="form-group m-1">
            <label htmlFor="exampleInputEmail1" className='text-danger mb-1'>Email address</label>
            <input type="email" className="form-control border-danger" id="exampleInputEmail1" placeholder="enter email address" required name='email' value={data.email} onChange={handleChange} />
          </div>
          <div className="form-group m-1">
            <label htmlFor="exampleInputPassword1" className='text-danger mb-1'>Password</label>
            <input type="password" className="form-control border-danger" id="exampleInputPassword1" placeholder="enter password" required minLength={8} name='password' value={data.password} onChange={handleChange} />
          </div>
          <div className="text-center mt-2">
            <Link to='/login' style={{ "textDecoration": "none", "color": "grey" }}>Registered already?</Link>
          </div>
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-outline-danger">Register</button>
          </div>
          {error && (
            <div className="text-center mt-2 text-danger fs-5">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Register;
