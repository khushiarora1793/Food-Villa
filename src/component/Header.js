// import { useEffect, useState } from "react";
// import { LOGO_URL } from "../utils/Contants";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import { useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LOGO_URL } from "../utils/Contants";



// const Header=()=>{
//    const[btnNameReact, setbtnNameReact]=useState("Login");
//       const online=useOnlineStatus();

//       useEffect(()=>{
//          // console.log("useeffect called");
//       }, [btnNameReact])

//      const cartItem=useSelector((store)=>store.cart.items);
//       //  console.log(cartItem);
const Header = () => {
   const [btnNameReact, setBtnNameReact] = useState("Login");
   const cartItems = useSelector((store) => store.cart.items);
 
   useEffect(() => {
     // Uncomment if you need to debug or perform side effects
     // console.log("useEffect called");
   }, [btnNameReact]);
 

    return (
   
   // <div className="flex justify-between bg-[#15605e] text-white p-8 sm:flex-col sm:pb-2 sm:pl-2.5 sm:pr-2.5">
   //    <div className="logo-container">
   //      <img className="w-24 ml-5 mt-5 rounded-md h-24 sm:block sm:mx-auto" src={LOGO_URL} alt="logo" />
   //    </div>
   //    <h2 className="hidden sm:block text-center sm:text-lg">Welcome to Foodvilla</h2>
   //    <div className="flex items-center">
   //      <ul className="flex p-4 m-4 gap-[19px] sm:justify-around">
   //        <li className="px-4">
   //          <Link className="text-xl hover:text-[#aaff00]" to="/">Home</Link>
   //        </li>
   //        <li className="px-4">
   //          <Link className="text-xl hover:text-[#aaff00]" to="/about">About Us</Link>
   //        </li>
   //        <li className="px-4">
   //          <Link className="text-xl hover:text-[#aaff00]" to="/contact">Contact Us</Link>
   //        </li>
   //        <li className="px-4 font-bold">
   //          <Link className="text-xl" to="/cart">Cart ({cartItems.length})</Link>
   //        </li>
   //      </ul>
   //    </div>
   //  </div>
   // <div className="flex justify-between items-center bg-[#15605e] text-white p-8 sm:flex-col sm:pb-2 sm:pl-2.5 sm:pr-2.5">
   //    {/* Logo Container */}
   //    <div className="flex-none">
   //      <img className="w-24 h-24 rounded-md sm:mx-auto" src={LOGO_URL} alt="logo" />
   //    </div>

   //    {/* Heading */}
   //    <h2 className="flex-1 text-center text-lg hidden sm:block">Welcome to Foodvilla</h2>

   //    {/* Navigation Items */}
   //    <div className="flex-none">
   //      <ul className="flex gap-[19px] p-4 m-4 sm:justify-around">
   //        <li className="px-4">
   //          <Link className="text-xl hover:text-[#aaff00]" to="/">Home</Link>
   //        </li>
   //        <li className="px-4">
   //          <Link className="text-xl hover:text-[#aaff00]" to="/about">About Us</Link>
   //        </li>
   //        <li className="px-4">
   //          <Link className="text-xl hover:text-[#aaff00]" to="/contact">Contact Us</Link>
   //        </li>
   //        <li className="px-4 font-bold">
   //          <Link className="text-xl" to="/cart">Cart ({cartItems.length})</Link>
   //        </li>
   //      </ul>
   //    </div>
   //  </div>
   <div className="flex justify-between items-center bg-[#15605e] text-white p-8 sm:flex-col sm:pb-2 sm:pl-2.5 sm:pr-2.5">
      {/* Logo Container on the Left */}
      <div className="flex-none">
        <img className="w-24 h-24 rounded-md" src={LOGO_URL} alt="logo" />
      </div>

      {/* Heading Centered */}
      <h2 className="flex-1 text-center text-lg hidden sm:block">Welcome to Foodvilla</h2>

      {/* Navigation Items on the Right */}
      <div className="flex-none">
        <ul className="flex gap-[19px] p-4 m-4 sm:justify-around">
          <li className="px-4">
            <Link className="text-xl hover:text-[#aaff00]" to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link className="text-xl hover:text-[#aaff00]" to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link className="text-xl hover:text-[#aaff00]" to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link className="text-xl" to="/cart">Cart ({cartItems.length})</Link>
          </li>
        </ul>
      </div>
    </div>
    );
   }
   export default Header;