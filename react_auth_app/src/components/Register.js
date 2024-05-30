import React, {useState} from 'react';


export const Register = () =>{
    return <main className="form-signin w-100 m-auto">
    <form>
      
      <h1 className="h3 mb-3 fw-normal">Please Register</h1>
      <div className="form-floating">
        <input type="text" className="form-control"  placeholder="First Name"/>
        <label htmlFor="floatingInput">First Name</label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control"  placeholder="Last Name" />
        <label htmlFor="floatingPassword">Last Name</label>
      </div>


      <div className="form-floating">
        <input type="email" className="form-control"  placeholder="name@example.com"/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control"  placeholder="Password" autoComplete='password'/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control"  placeholder="Confirm Password" autoComplete='confirm password'/>
        <label htmlFor="floatingPassword">Confirm Password</label>
      </div>
  
      
      <button className="btn btn-primary w-100 py-2" type="submit">Submit</button>
      <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
    </form>
    </main>
};