import React, {useState} from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export const Register = () =>{
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const submit = async (e) =>{
        e.preventDefault();
        await axios.post('http://127.0.0.1:8000/register', {
            first_name : firstName,
            last_name: lastName,
            email,
            password,
            confirm_password: confirmPassword
        });

        setRedirect(true);
        
    }

    if (redirect){
        return <Navigate to="/home" />
    }


    return <main className="form-signin w-100 m-auto">
    <form onSubmit={submit}>
      
      <h1 className="h3 mb-3 fw-normal">Please Register</h1>
      <div className="form-floating">
        <input type="text" className="form-control"  placeholder="First Name"
            onChange={e=>setFirstName(e.target.value)}
        />
        <label htmlFor="floatingInput">First Name</label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control"  placeholder="Last Name" 
            onChange={e=>setLastName(e.target.value)}
        />
        <label htmlFor="floatingPassword">Last Name</label>
      </div>


      <div className="form-floating">
        <input type="email" className="form-control"  placeholder="name@example.com"
            onChange={e=>setEmail(e.target.value)}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control"  placeholder="Password" autoComplete='password'
            onChange={e=>setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control"  placeholder="Confirm Password" autoComplete='confirm password'
            onChange={e=>setConfirmPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Confirm Password</label>
      </div>
  
      
      <button className="btn btn-primary w-100 py-2" type="submit">Submit</button>
      <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
    </form>
    </main>
};