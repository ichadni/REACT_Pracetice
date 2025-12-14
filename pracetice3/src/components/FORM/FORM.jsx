import React from 'react'
import { useState } from 'react';
import './FORM.css'
export default function FORM() {
  const [name,setname]=React.useState("");
  const [email,setemail]=React.useState("");
  const [password,setpassword]=React.useState("");
  const handlename=(event)=>{
    setname(event.target.value);
  }
  const handleemail=(event)=>{
    setemail(event.target.value);
  }
  const handlepassword=(event)=>{
    setpassword(event.target.value);
  }
  const handlasubmit=(event)=>{
    console.log("form submitted");
    console.log(name,email,password);
    event.preventDefault();
  }

  return (

    <div>
      <h1>Registration</h1>
      <form action=""onSubmit={handlasubmit}>
        <div>
          <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={handlename} name="name"value={name} required/><br/><br/>
        </div>
        
        <div>
          <label htmlFor="email">Email:</label>
         <input type="email" id="email" onChange={handleemail} name="email"value={email} required/><br/><br/>
        </div>
         <div>
          <label htmlFor="password">password:</label>
         <input type="password" id="password"onChange={handlepassword} name="password"value={password} required/><br/><br/>
        </div>
        <div>
          <button type="submit">Submit</button>
          
        </div>
      </form>
    </div>
  )
}
