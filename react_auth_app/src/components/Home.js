import React, {useEffect, useState} from "react";
import {axios} from "axios";

export const Home =() =>{
    const [message, setMessage] = useState('Hello Wold..!');
    return <div className="container mt-5 text-center">
    <h1>{message}</h1>
</div>
  
};