import React, { useState } from "react"
import axios from 'axios';



export default function Register() {
  
  const [user, setUser] = useState({
    fname:'',
    lname:'',
    password:'',
    email:'',
    country:'',
    street:'',
    city:'',
    Province:'',
  });
  
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response= await axios.post('/register',{user},{
        method:"POST",
  
      }
     );
     console.log(response.data);
     
      
      
      setUser({
        fname:user.fname,
      lname:user.lname,
      password:user.password,
      email:user.email,
      country:user.country,
      street:user.street,
      city:user.city,
      Province:user.Province  ,})
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  const handleInputs = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });   
  };

  return (
    <>
          <div className="flex flex-col fix mt-6 mb-5 items-center justify-center ">
         
            <form class="bg-white shadow-2xl shadow-purple-400/50 object-contain rounded px-8 -bottom-2" action="#" method="post">
              
              <h1 class="text-5xl text-purple-700 mb-6 ">Signup</h1>
                  <div class="grid grid-cols-3 gap-3 m-5">
                    <div class="col-span-1">
                      <label htmlFor="first-name" class="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="fname"
                        value={user.fname}
                        onChange={handleInputs}
                        class="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    {/* <div className=" h-4 w-32 left-12 top-0 ">
     <YourSvg className=" w-"/>

                    </div> */}

                    <div className="col-span-1">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lname"
                        id="last-name"
                        value={user.lname}
                        onChange={handleInputs}
                        autoComplete="family-name"
                        class="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                       
                    <div class="col-span-2">
                      <label htmlFor="street-address" class="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={handleInputs}
                        placeholder="                                   ***********"
                        class="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div class="col-span-2">
                      <label htmlFor="email-address" class="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email-address"
                        value={user.email}
                        onChange={handleInputs}
                        autoComplete="email"
                        class="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div class="col-span-2">
                      <label htmlFor="country" class="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        value={user.country}
                        onChange={handleInputs}
                        class="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option>India</option>
                        <option>USA</option>
                        <option>Germany</option>
                      </select>
                    </div>

                    <div class="col-span-2">
                      <label htmlFor="street-address" class="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street"
                        id="street-address"
                        value={user.street}
                        onChange={handleInputs}
                        autoComplete="address-level1"
                        class="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div class=" col-span-2">
                      <label htmlFor="city" class="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={user.city}
                        onChange={handleInputs}
                        class="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div class="col-span-3 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" class="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="Province"
                        id="region"
                        value={user.Province}
                        onChange={handleInputs}
                        autoComplete="address-level1"
                        class="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div class="col-span-2">
                    <button class="bg-purple-500 shadow-lg shadow-purple-500/50 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-purple-400/50 focus:shadow-outline transition ease-in-out delay-50  hover:-translate-y-0.5 hover:scale-110 duration-100  "
                    type="submit" onClick={handleSubmit}>
                          register
                    </button>                  
                    </div>
                  </div>
            </form>
          </div>
    </>
  );
}
