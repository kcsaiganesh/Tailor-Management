import React from 'react'
import { useNavigate } from "react-router-dom"
import { RxDashboard } from 'react-icons/rx';
import { BsCart4 } from 'react-icons/bs';
import { FiUserPlus, FiLogOut } from 'react-icons/fi';
import { AiFillShopping } from 'react-icons/ai';


const navbar = () => {

  const navigate = useNavigate;
  const logstyle = {
    padding: "10px 0px 10px 0px",
    display: "block",
    width: "30%",
  }
  const handleLogout = () => {
    localStorage.clear();
    alert("Loged out successfully");
    navigate("/login")

  };
  return (
    <div class="h-full bg-purple-100 flex flex-col ">
      <div class="bg-purple-300 overflow-auto h-16  w-full shadow flex justify-between items-stretch  px-3 align-middle" >
        <a href="home" class="text-purple-900 font-sans font-bold h-12" target="_blank" rel="noreferrer" >
          <img style={logstyle}
            src="https://api.logo.com/api/v2/images?format=webp&logo=logo_6b399deb-08d5-4642-9709-256b8a3864e8&width=1000&background=transparent&fit=contain&u=1671264221" alt="logo" /> </a>
        <div class="hidden sm:flex items-stretch">


          <a href="/"
            class="flex items-center text-gray-800 px-3 m-3 rounded transition-colors hover:text-purple-600 hover:bg-gray-100
        hover:shadow-sm"
          > Home <RxDashboard />
          </a>
          <a href="order"
            class="flex items-center text-gray-800 px-3 m-3 rounded transition-colors hover:text-purple-600 hover:bg-gray-100
        hover:shadow-sm">
            order<BsCart4 />
          </a>
          <a href="market"
            class="flex items-center text-gray-800 px-3 m-3 rounded transition-colors hover:text-purple-600 hover:bg-gray-100
        hover:shadow-sm">
            market<AiFillShopping />
          </a>
          <a href="login"
            class="flex items-center text-gray-800 px-3 m-3 rounded transition-colors hover:text-purple-600 hover:bg-gray-100
        hover:shadow-sm">
            login
          </a>
          <a href="register"
            class="flex items-center text-gray-800 px-2 m-3 rounded transition-colors hover:text-white hover:bg-purple-700 focus:bg-purple-600 focus:text-purple-50  hover:shadow-sm"><FiUserPlus /> Signup
          </a>
          <button onClick={handleLogout} class="flex items-center text-gray-800 px-2 m-3 rounded transition-colors hover:text-white hover:bg-purple-700 focus:bg-purple-600 focus:text-purple-50  hover:shadow-sm"> <FiLogOut />
          </button>

        </div>
      </div>
    </div>
  )
}

export default navbar
