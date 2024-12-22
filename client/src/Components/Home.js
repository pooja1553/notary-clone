import React, { useState } from 'react';
import '../css/Home.css'

import '../App.css';
function Home() {
  const [appointment,setAppointment] = useState({
   Name:"",
   Email:"",
   Date:""
  })
  const addData =  (event) =>{
    let name=event.target.name;
    let value=event.target.value;
    setAppointment({...appointment,[name]:value});
  }
  const submitData = async (event) =>{
    event.preventDefault();
    const {Name,Email,Date} = appointment;
    try{
       let result = await fetch('/appointment',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          Name,
          Email,
          Date
        })
       });
       console.log(result.status);
       if(result.status===400 || !result){
        window.alert("Data not inserted try again");
       }
       else{
        window.alert("Data inserted");
        setAppointment({
          Name:"",
          Email:"",
          Date:""
        })
       }
    }
    catch(e){
      console.log(e);
    }
  }
   return (
    <>
    <div className='main'>
        <div className='main1'>
            <div className='main1-1'>
                <h1><strong>Notary Public &</strong> Legal Solutions</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.</p>
            </div>
            <div className='main1-2'>
                <form className='main-form' onSubmit={submitData} method="POST">
                    <h3>Book an Appointment</h3>
                    <input type='text' value={appointment.Name} name='Name' placeholder='Name' onChange={addData}/>
                    <input type='email' name='Email' value={appointment.Email} placeholder='Email' onChange={addData}/>
                    <input type='date' name='Date' value={appointment.Date} placeholder='Select Date' onChange={addData}/>
                    <button type='submit'>Book Appointment</button>
                </form>
            </div>
        </div>
        {/* Practice Area */}
        <div className='main2'>
            <div className='main2-1'>
            <h2><strong>Practice</strong>Area</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='main2-2'>
                <div className='card'>
                <i className="fa-solid fa-landmark icolor"></i>
                 <h4>Bankruptcy Law</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
                <div className='card'>
                <i className="fa-solid fa-shield-halved icolor"></i>
                  <h4>Business Law</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
                <div className='card'>
                <i className="fa-solid fa-hand-holding-heart icolor"></i>
                  <h4>Civil Rights Law</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
              </div>
              <div className='main2-2'>
                <div className='card'>
                <i className="fa-solid fa-gun icolor"></i>
                  <h4>Criminal Law</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
                <div className='card'>
                <i className="fa-solid fa-plane-up icolor"></i>
                  <h4>Immigration Law</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
                <div className='card'>
                <i className="fa-solid fa-house-chimney-window icolor"></i>
                  <h4>Family Law</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                </div>
              </div>
        </div>
        {/* Book Appointment */}
        <div className='main3'>
            <img src='https://preview.colorlib.com/theme/notary/images/atty_1.jpg.webp'/>
            <img src='https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp'/>
            <div className='main4'><h3>We Provide Highly <strong>Reliable & Effective </strong> Legal Solutions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
            <button>Book Appointment</button></div>
        </div>

        {/* Happy customers */}
        <div className='main5'>
        <h2>Happy Customers</h2>
        <div className='main4-1'>
          <div className='main4-2'>
          <div className='main4-3'>
            <div>
            <img src='https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp'/>
            </div>
            <div>
            <p className='happy-p'>Lina Gold</p>
            <p>Owner, Ford
            </p>
            </div>
            </div>
            <div className='main4-4'><p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p></div>
          </div>

          <div className='main4-2'>
          <div className='main4-3'>
            <div>
            <img src='https://preview.colorlib.com/theme/notary/images/person_1.jpg.webp'/>
            </div>
            <div>
            <p className='happy-p'>Mike Fisher</p>
            <p>Owner, Ford
            </p>
            </div>
            </div>
            <div className='main4-4'><p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p></div>
          </div>

          <div className='main4-2'>
          <div className='main4-3'>
            <div>
            <img src='https://preview.colorlib.com/theme/notary/images/person_3.jpg.webp'/>
            </div>
            <div>
            <p className='happy-p'>Sheen Yu</p>
            <p>Owner, Ford
            </p>
            </div>
            </div>
            <div className='main4-4'><p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p></div>
          </div>
        </div>
        </div>

        {/* legal Solutions */}
        <div className='main6'>
          <div className='main6-1'><img src='https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp'/></div>
          <div className='main6-1'><h4> We Have <strong>Legal Solutions</strong></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?</p>
          <p>Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.</p>
          <ul>
            <li>&#10004; Aperiam iste nam molestias</li>
            <li>&#10004; Modi perferendis ipsa</li>
            <li>&#10004; Perspic iste culpa</li></ul>
            </div>
          <div className='main6-1'>
            <details open><summary>How to domnload and register?</summary>
            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
             </details>
             <details>
              <summary>How to create your paypal account</summary>
              <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              </p>
             </details>
             <details>
              <summary>How to link your paypal and bank account</summary>
              <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              </p>
             </details>
          </div>
        </div>
    </div>
    {/* <h1>{appointment.Name}</h1>
    <h1>{appointment.Email}</h1>
    <h1>{appointment.Date}</h1> */}
    </>
  )
}

export default Home