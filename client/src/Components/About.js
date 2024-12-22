import React from 'react'
import FirstSection from './FirstSection'
import BookAppointment from './BookAppointment'
import OurTeams from './OurTeams'

function About() {
  return (
    <>
    <FirstSection title='About Us' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.'/>
    <BookAppointment/>
    <div className='about1'>
      <h2>Meet Our Team</h2>
      <OurTeams image1='https://preview.colorlib.com/theme/notary/images/person_1.jpg.webp' position1='Founder' name1='James Doe' description1='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum'  image2='https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp' position2='Founder' name2='James Doe' description2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum'  image3='https://preview.colorlib.com/theme/notary/images/person_3.jpg.webp' position3='Founder' name3='James Doe' description3='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum'/>
    
    <OurTeams image1='https://preview.colorlib.com/theme/notary/images/person_4.jpg.webp' position1='Founder' name1='James Doe' description1='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum'  image2='https://preview.colorlib.com/theme/notary/images/person_5.jpg.webp' position2='Founder' name2='James Doe' description2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum'  image3='https://preview.colorlib.com/theme/notary/images/person_1.jpg.webp' position3='Founder' name3='James Doe' description3='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum'/>
    </div>
    </>
  )
}

export default About