import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to='/home' className="navbar-brand">LOGO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to='/home' className="nav-link" ><button className="btn btn-success">Home</button></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/course' className="nav-link" ><button className="btn btn-success">Course</button></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blog' className="nav-link" ><button className="btn btn-success">Blog</button></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/faq' className="nav-link" ><button className="btn btn-success">FAQ</button></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-link" ><button className="btn btn-success">About</button></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/checkout' className="nav-link" ><button className="btn btn-success">Checkout</button></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login'  className="nav-link" ><button className="btn btn-success" type="submit">Login</button></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/signup' className="nav-link"><button className="btn btn-success" type="submit">Sign Up</button></Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-success" type="submit" >LogOUt</button>
                    </li>
                </ul>
                <div className="d-flex">
                        <button className="btn btn-outline-success" type="submit">Dark Mode</button>      
                </div>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;