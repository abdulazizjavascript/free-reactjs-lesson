import React from 'react';

import ap from "../../assets/images/ap.png";

import style from './About.module.css';

const About = () => {
  return (
    <section id={style.about}>
      <div className="container">
        <h1 className='about__title'>About</h1>
        <img src={ap} alt="Abdulaziz Programmer" />
      </div>
    </section>
  )
}

// const About = () => {
//   return (
//     <section id='about'>
//       <div className="container">
//         <h1 className='about__title'>About</h1>
//       </div>
//     </section>
//   )
// }

export default About