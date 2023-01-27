/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import LoginSvg from './../../assets/login.svg'
import { FcGoogle } from 'react-icons/fc';


const login = () => {


  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  const [success, setSuccess] = useState();
  const handleSubmit = event => {
    event.preventDefault();
    setUser({
      password: user.password,
      email: user.email,
    });
    axios.post('/login', user, {
      method: "POST",
    })
      .then(response => {
        console.log(response);
        // Set the success message
        setSuccess('Logged in successfully');
        window.location.href = "/";

      })
      .catch(error => {
        console.error(error);
        // Set the error message
        setSuccess('Error logging in');
      });
  };
  const handleInputs = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };


  return (


    <div className="flex flex-col ml-4 items-center justify-center h-auto w-9/12 ">
      <h1 className="font-bold text-2xl text-purple-700 m-5">LogIn</h1>
      <form onSubmit={handleInputs} className="bg-white grid grid-cols-2 gap-1  shadow-2xl shadow-purple-400/50 justify-between rounded px-9 pt-6 pb-8 mb-3"
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
            onChange={handleInputs} />
        </div>
        <div className="mb-6 col-span-2">
          <label className="block text-purple-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border  focus:bg-purple-50 border-purple-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="************"
            value={user.password}
            name="password"
            onChange={handleInputs} />
          <br />
          {success && <p style={{ color: 'purple' }}>{success}</p>}

        </div>
        <div className="  flex flex-row-reverse gap-6   px-3 ">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-purple-500/50 focus:shadow-outline transition ease-in-out delay-50  hover:-translate-y-0.5 hover:scale-110 duration-100" type="submit" onClick={handleSubmit}>
            Sign In
          </button>
          <br />

          <a className="col-span-1  bg-purple-500  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-purple-400/50 focus:shadow-outline transition ease-in-out delay-50  hover:-translate-y-0.5 hover:scale-110 duration-100" href='#googleauth'>Sigin with  Google <FcGoogle /></a>
          <br />
          <a className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800" href="forgot">
            clear
          </a>
          <br />
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 LSS Corp. All rights reserved.
      </p>

      <img className="w-2/12   absolute  right-0  top-44 mr-24" src={LoginSvg} alt="loginsvg" />

    </div>
  )
}

export default login;
