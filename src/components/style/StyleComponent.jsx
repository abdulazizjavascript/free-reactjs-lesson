import React from 'react';
import "./StyleComponent.css";

const StyleComponent = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'green',
    fontSize: '25px'
  }
  return (
    <section id="style">
      <h1 className='style__title'>StyleComponent</h1>
      <a href="abdulazizprogrammer.uz" style={linkStyle}>Abdulaziz Programmer</a>
      <p className='style__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur esse porro? Harum fuga, consectetur possimus ipsam eius, sint, dignissimos quae quisquam voluptas minus perferendis corrupti ad molestiae. Sequi illo maxime minus ut maiores quia necessitatibus optio temporibus. Dolores ipsum, tempore labore sequi fuga, repellat laudantium porro, reprehenderit pariatur dignissimos nulla sunt culpa consectetur? Facere explicabo expedita aliquam quas labore consequatur repudiandae consequuntur, deserunt modi aut! Natus quae vel eum in obcaecati repellat quaerat quisquam itaque est dignissimos, iste possimus. Alias numquam dignissimos consequatur repellat ea facilis iure nemo, est, quaerat voluptatum nostrum fugit temporibus tempora sunt ratione placeat et?</p>
    </section>
  )
}

export default StyleComponent