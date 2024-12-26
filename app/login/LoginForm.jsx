"use client";
import React, { useState } from "react";

export default function LoginForm({ title }) {
  const [email, setemail] = useState("");
  const [pswrd, setpassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const formValidation = (email, pswrd) =>{
    if(!email){
        setEmailError("Email is required.")
    }else{
        setEmailError("")
    }
        
    if(!pswrd){
        setPasswordError("Password is required.")
    }else{
        setPasswordError("")
    }

    if(email && pswrd){
        alert("Submitted to Dash board.")
    }
  }

  const submitHandle = (e) => {
    e.preventDefault()
    formValidation(email, pswrd)
    
  };

  return (
    <div className="flex bg-white rounded-2xl shadow-2xl dark:border">
      <form onSubmit={submitHandle} className="pr-20 pl-10 py-10">
        <div>
          <h6 className=" text-3xl text-center font-bold text-blue-500">
            {title}
          </h6>
        </div>

        <div className="flex flex-col py-6">
          <label htmlFor="email">Your email</label>

          <input
            className="bg-gray-50 rounded-md border-2 h-10 w-[400px] hover:border-blue-500"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="name@company.com"></input>

          {emailError && <label className="text-red-500 text-sm mt-1 text-end hover:text-green-500 font-serif">
            {emailError}
          </label>}
        </div>

        <div className="flex flex-col py-1">
          <label htmlFor="password">Password</label>

          <input
            className="bg-gray-50 rounded-md border-2 h-10 w-[400px] hover:border-blue-500 "
            type="password"
            name="password"
            id="password"
            value={pswrd}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="• • • • • • • • • • •"></input>

          {passwordError && <label className="text-red-500 text-sm mt-1 text-end  hover:text-green-500 font-serif">
            {passwordError}
          </label>}
        </div>

        <div className="flex flex-row py-2">
          <input name="remember" id="checkbox" type="checkbox"></input>
          <label htmlFor="checkbox" className="px-2 text-md">
            Remember me
          </label>
          <a
            href="#"
            className="items-end pl-32 text-blue-500 hover:underline text-md">
            Forgot Password?
          </a>
        </div>

        <div>
          <button
            type="submit"
            name="signin"
            id="signin"
            className="border text-center bg-blue-500 w-full h-10 rounded-lg font-bold text-white hover:bg-blue-700">
            Sign in
          </button>
        </div>

        <div className="py-5 flex justify-center">
          <label>
            Don't have an account?
            <a className="px-2 text-blue-500 hover:underline">Sign up here</a>
          </label>
        </div>
      </form>
    </div>
  );
}
