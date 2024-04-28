import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      const json = await response.json();

      if (!json.success) {
        setError(json.errors || "Invalid credentials!");
      } else {
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
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
      <div className='container register-container'>
        <h2 className="mb-4 text-center text-danger font-weight-bold">Login to Your Account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group m-1">
            <label htmlFor="exampleInputEmail1" className='text-danger mb-1'>Email address</label>
            <input type="email" className="form-control border-danger" name='email' value={data.email} onChange={handleChange} id="exampleInputEmail1" placeholder="Enter email address" required style={{ borderRadius: '5px' }} />
          </div>
          <div className="form-group m-1">
            <label htmlFor="exampleInputPassword1" className='text-danger mb-1'>Password</label>
            <input type="password" className="form-control border-danger" name='password' value={data.password} onChange={handleChange} id="exampleInputPassword1" placeholder="Enter password" required style={{ borderRadius: '5px' }} />
          </div>
          <div className="text-center mt-2">
            <Link to='/register' style={{ "textDecoration": "none", "color": "grey" }}>Do not have an Account?</Link>
          </div>
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-outline-danger" style={{ borderRadius: '5px' }}>Login</button>
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

export default Login;
