import React from 'react';
import '../css/FirstSection.css';

function FirstSection(props) {
  return (
    <>
    <div className='practice'>
        <div className='practice1'>
            <div className='practice2'>
            <h2 className='bold'><strong>{props.title}</strong></h2>
            <p>{props.description}</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default FirstSection