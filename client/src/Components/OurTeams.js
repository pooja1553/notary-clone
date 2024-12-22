import React from 'react'
import '../css/OurTeams.css';
function OurTeams(props) {
  return (
    <>
     <div className='team5'>
        {/* <h2>teams Customers</h2> */}
        <div className='team4-1'>
          <div className='team4-2'>
           <img src={props.image1}/>
             <div className='team4-4'>
            <h5>{props.position1}</h5>
            <h3>{props.name1} </h3>
             <p>{props.description1}</p></div>
          </div>

          <div className='team4-2'>
           <img src={props.image2}/>
           <div className='team4-4'>
            <h5>{props.position2}</h5>
            <h3>{props.name2} </h3>
             <p>{props.description2}</p></div>
          </div>

          <div className='team4-2'>
           <img src={props.image3}/>
            <div className='team4-4'>
            <h5>{props.position3}</h5>
            <h3>{props.name3}</h3>
          <p>{props.description3}</p></div>
          </div>
        </div>
        </div>
    </>
  )
}

export default OurTeams