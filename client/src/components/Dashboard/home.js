import React from "react";

export default function home() {
    // const bag1="https://wallpaper.dog/large/5547551.jpg"
    return (

        <div className="2xl:container backdrop-blur-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-white/30 flex justify-center  items-center w-full 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="w-80 md:w-auto  grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6">
                <div className="relative group  ">
                    <img className="lg:block hidden w-full grayscale web-filter" src="https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Women" />
                    <div className="opacity-0 bg-gradient-to-t from-purple-800 via-purple-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
                        <p className=" font-semibold text-2xl leading-6 text-white">Women</p>
                    </div>
                </div>
                <div className=" lg:px-6  lg:py-0 md:py-16 md:px-24 py-16 px-6 flex flex-col justify-center items-center text-center bg-purple-100">
                    <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-10 leading-9 text-purple-800 lg:w-full md:w-7/12 w-full">Wear Which Suits You </h2>
                    <p className=" font-medium text-base leading-6 text-purple-600 mt-4 lg:w-full md:w-7/12 w-full">“Fashion hides, or diverts attention away from, our uniqueness.”</p>
                    <button onClick={() => { window.location.href = '/order' }} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-800 hover:bg-purple-700 text-white text-base leading-4 bg-purple-800 lg:px-10 py-4 lg:w-auto w-72 mt-16">Order Now</button>
                </div>
                <div className=" rounded relative group">
                    <img className="lg:block grayscale hidden w-full" src="https://images.pexels.com/photos/13100882/pexels-photo-13100882.jpeg" alt="Man" />
                    <div className="opacity-0 bg-gradient-to-t from-purple-800 via-purple-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
                        <p className=" font-semibold text-2xl leading-6 text-white">Men</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
