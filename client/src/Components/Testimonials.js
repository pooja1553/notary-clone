import React from 'react'
import FirstSection from './FirstSection';
import HappyCustomers from './HappyCustomers';
import Test from '.././css/Test.css';
import BookAppointment from './BookAppointment';

function Testimonials() {
  return (
    <>
    <FirstSection title='Happy Customers Testimonials' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.'/>
    <div className='test'>
    <HappyCustomers/>
    <HappyCustomers/>
    </div>
    <BookAppointment/>
    
    </>
  )
}

export default Testimonials