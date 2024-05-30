import React from "react";
import {Link} from 'react-router-dom';

export const Nav =()=>{
    return <header className="p-3 text-bg-dark">
    <div className="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          
          <li><Link to="/home" class="nav-link px-2 text-white">Home</Link></li>
          
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
        </form>

        <div class="text-end">
          <Link to="/login" class="btn btn-outline-light me-2">Login</Link>
          <Link to="/register" class="btn btn-outline-light me-2">Register</Link>
        </div>
      </div>
    </div>
  </header>
}