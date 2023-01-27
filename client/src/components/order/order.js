import React from 'react'
import { Link } from 'react-router-dom';
import Measurements from './../../assets/gender.svg'

const order = () => {

  return (
    <div>
      <div class="max-w-lg  mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div class="flex flex-row justify-between items-center">
          <Link to="/men" >
            <div class="each flex hover:shadow-lg hover:shadow-purple-500/50  select-none p-10 rounded-md border-purple-300 border mb-3 hover:border-purple-500 cursor-pointer">
              <div class="left">
                <div class="header text-purple-600 font-semibold text-2xl">Men</div>
                <div class="desc text-purple-600">Order for men </div>
              </div>
              <div class="right m-auto mr-0">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/women" >
            <div class="each flex hover:shadow-lg hover:shadow-purple-500/50  select-none p-10 rounded-md border-purple-300 border mb-3 hover:border-purple-500 cursor-pointer">
              <div class="left">
                <div class="header text-purple-600 font-semibold text-2xl">women</div>
                <div class="desc text-purple-600">Order for women </div>
              </div>
              <div class="right m-auto mr-0">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
      <img src={Measurements} alt="gender" className='absolute w-56  h-96 left-12 top-0 rounded-x  ' />

    </div>
  )
}

export default order
