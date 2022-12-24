import React from 'react'
import axios  from 'axios';
import { useState } from 'react';
import{ FcGoogle }from 'react-icons/fc';


const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState({
    email: "",
    password: "",
    error:"",
  },[]);

  const handleInput = (e) => {
    const name  = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const handleSubmit = event => {
    event.preventDefault();

    axios.post('/login', { user })
      .then(response => {
        // If the login is successful, store the JWT token in local storage
        localStorage.setItem('jwt', response.data.token);
        // Redirect to the protected route
        window.location.replace('/protected-route');
      })
      .catch(error => {
        // If the login fails, display an error message
        error('Invalid credentials');
      });
  }
  return (

    
    <div className="flex flex-col items-center justify-center h-screen w-auto ">
      <h1 className="font-bold text-2xl text-purple-700 m-5">LogIn</h1>
    <form className="bg-white grid grid-cols-2 gap-1 shadow-2xl shadow-purple-400/50 justify-between rounded px-9 pt-6 pb-8 mb-3"
    method='POST'>
      <div className="mb-4 col-span-2">
        <label className="block  text-purple-700 text-sm font-bold mb-2" htmlFor="email">
          email
        </label>
        <input className="shadow appearance-none border focus:bg-purple-50 border-purple-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
         id="email" 
         type="mail" 
         placeholder="Email"
         name="email" 
         value={user.email}
         onChange={handleInput}/>
      </div>
      <div className="mb-6 col-span-2">
        <label className="block text-purple-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border focus:bg-purple-50 border-purple-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        id="password" 
        type="password" 
        placeholder="************"
        value={user.password}
        name="password"
        onChange={handleInput}/>
       
      </div>
      <div className="  flex flex-row-reverse gap-6  mb-1 px-3 ">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-purple-500/50 focus:shadow-outline transition ease-in-out delay-50  hover:-translate-y-0.5 hover:scale-110 duration-100" type="button" onClick={handleSubmit}>
          Sign In
        </button>
        <br/>
         
        <a className="col-span-1 flex-row bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-purple-400/50 focus:shadow-outline transition ease-in-out delay-50  hover:-translate-y-0.5 hover:scale-110 duration-100"href='#googleauth'>Sigin with  Google <FcGoogle/></a>
        <br/>
        <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800" href="forgot">
          Forgot Password?
        </a>
        <br/>
        </div>
    </form>
    <p className="text-center text-gray-500 text-xs">
      &copy;2022 LSS Corp. All rights reserved.
    </p>
  </div>
  )
}

export default login
