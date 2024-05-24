import React from 'react';

import style from './Hero.module.css';

const Hero = () => {
  return (
    <section id={style.hero}>
      <div className="container">
        <h1>Hero</h1>
        <img src="/ap.jpg" alt="Abdulaziz Programmer" />
      </div>
    </section>
  )
}

export default Hero

// const Hero = () => {
//   return (
//     <section id='hero'>
//       <div className="container">
//         <h1>Hero</h1>
//       </div>
//     </section>
//   )
// }

// export default Hero