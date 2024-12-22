import React from 'react';
import '../css/PracticeArea.css';
import FirstSection from './FirstSection';
import Law from './Law';
import BookAppointment from './BookAppointment';

function PracticeArea() {
  return (
    <>
       <FirstSection title='Practice Areas' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.'/>
       <Law />
       <BookAppointment/>
    </>
  )
}

export default PracticeArea;