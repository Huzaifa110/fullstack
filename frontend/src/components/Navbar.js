// import React from 'react';
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Navbar = () => {

//     const location = useLocation();
//     const navigate = useNavigate();

//     const isLogin = location.pathname === '/login';
//     const isRegister = location.pathname === '/register';


//     const handleLogout = (e) => {
//         const confirmed = window.confirm("Are you sure you want to logout?");
//         if (confirmed) {
//             localStorage.removeItem("authToken");
//             navigate("/login");
//         }
//     }

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
//             <div className="container-fluid">
//                 <Link className="navbar-brand btn fs-1 fst-italic fw-bolder" to="/">Food</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse justify-content-start">
//                     <ul className="navbar-nav">
//                         {(localStorage.getItem("authToken")) ?
//                             <li className="nav-item">
//                                 <Link className="btn bg-white text-danger mx-1 fs-5 fw-bolder" to="/">My Orders</Link>
//                             </li>
//                             : ""}
//                     </ul>
//                 </div>
//                 <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//                     {(!localStorage.getItem("authToken")) ?
//                         <ul className="navbar-nav">  
//                             {isLogin && (
//                                 <li className="nav-item">
//                                     <Link className="btn bg-white text-danger mx-1 fs-5 fw-bolder" to="/register">Register</Link>
//                                 </li>
//                             )}
//                             {isRegister && (
//                                 <li className="nav-item">
//                                     <Link className="btn bg-white text-danger mx-1 fs-5 fw-bolder" to="/login">Login</Link>
//                                 </li>
//                             )}
//                         </ul>
//                         :
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link className="btn bg-white text-danger mx-1 fs-5 fw-bolder" to="/">My Cart</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="btn bg-white text-warning mx-1 fs-5 fw-bolder" onClick={handleLogout}>Logout</Link>
//                             </li>
//                         </ul>
//                     }
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar;


import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isLogin = location.pathname === '/login';
    const isRegister = location.pathname === '/register';
    const isHome = location.pathname === '/';

    const handleLogout = (e) => {
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
            localStorage.removeItem("authToken");
            navigate("/login");
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
                <Link className="navbar-brand btn fs-1 fst-italic fw-bolder" to="/">Food</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {(localStorage.getItem("authToken")) &&
                            <li className="nav-item">
                                <Link className="btn bg-white text-danger mx-1 fs-5 fw-bolder" to="/">My Orders</Link>
                            </li>
                        }
                    </ul>
                    <ul className="navbar-nav">
                        {(!localStorage.getItem("authToken")) ?
                            <>
                                {isLogin &&
                                    <li className="nav-item">
                                        <Link className="btn bg-white text-danger mx-1 fs-5 fw-bolder" to="/register">Register</Link>
                                    </li>
                                }
                                {isRegister &&
                                    <li className="nav-item">
                                        <Link className="btn bg-white text-danger mx-1 fs-5 fw-bolder" to="/login">Login</Link>
                                    </li>
                                }
                                {isHome &&
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="btn btn-outline-light bg-white text-danger mx-1 fs-5 fw-bolder" to="/register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="btn bg-white text-danger mx-1 fs-5 fw-bolder" to="/login">Login</Link>
                                    </li>
                                </ul>
                                }
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link className="btn bg-white text-danger mx-1 fs-5 fw-bolder" to="/">My Cart</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="btn bg-white text-warning mx-1 fs-5 fw-bolder" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
