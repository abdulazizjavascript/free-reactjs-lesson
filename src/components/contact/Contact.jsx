import React from 'react'

import style from './Contact.module.css'

const Contact = () => {
  return (
    <section id={style[ 'contact' ]}>
      <div className="container">
        <h1 className={style[ 'contact__title' ]}>Contact</h1>
        <div className={style[ "contact__row" ]}>
          <div className={style[ "contact-card" ]}>
            <h3>Contact title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, culpa sapiente. Rerum quia esse, libero porro voluptatem non quisquam soluta!</p>
          </div>
          <div className={style[ "contact-card" ]}>
            <h3>Contact title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, culpa sapiente. Rerum quia esse, libero porro voluptatem non quisquam soluta!</p>
          </div>
          <div className={style[ "contact-card" ]}>
            <h3>Contact title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, culpa sapiente. Rerum quia esse, libero porro voluptatem non quisquam soluta!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact