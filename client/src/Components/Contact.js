import React, { useState } from 'react'
import FirstSection from './FirstSection';
import '../css/Contact.css';
function Contact() {
  const [msg,setMsg] = useState({
    FirstName:"",
    LastName:"",
    Email:"",
    Message:""
  })
  const addData = (event) => {
   let name=event.target.name;
   let value=event.target.value;
   setMsg({...msg, [name] : value});
  }
  const submitData = async (event) =>{
    event.preventDefault();
    const {FirstName,LastName,Email,Message} = msg;
    try{
      const result = await fetch("/feedback",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          FirstName,
          LastName,
          Email,
          Message
        })
      })
      console.log(result.status);
      if(result.status===400  || !result){
        window.alert("Data not inserted try again");
      }
      else{
        window.alert("Data inserted");
        setMsg({
          FirstName:"",
          LastName:"",
          Email:"",
          Message:""
        })
      }
     }
     catch(e){
      console.log(e);
     }
  }
  return (
    <>
    <FirstSection title='Contact Us'
    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.'/>

    <div className='contact'>
        <div className='contact1'>
            <form className='contact1-1' onSubmit={submitData}  method="POST">
            <input type='text' name='FirstName' value={msg.FirstName} placeholder='First name' onChange={addData}/>
            <input type='text' name='LastName' value={msg.LastName} placeholder='Last name'onChange={addData}/>
            <input type='email' name='Email' value={msg.Email} placeholder='Email address'onChange={addData}/>
            <textarea rows='5'name='Message' value={msg.Message} placeholder='Write your message'onChange={addData}/>
            <button type='submit'>Send Message</button>
            </form>
        </div>
        <div className='contact2'>
            <h3>Contact Info</h3>
            <h4>Address:</h4>
            <address>34 Street Name, City Name Here, United States</address>
            <h4>Phone:</h4>
            <address>+1 242 4942 290</address>
            <h4>Email:</h4>
            <address>info@yourdomain.com</address>
        </div>
    </div>
    {/* <h1>{msg.FirstName}</h1>
    <h1>{msg.LastName}</h1>
    <h1>{msg.Email}</h1>
    <h1>{msg.Message}</h1> */}
    </>
  )
}

export default Contact