import React, { useState } from 'react';

const Testimonials = () => {
   const [testimonials, setTestimonials] = useState([
      {id: 0, text: "We developed a great partnership with Gouaby and his dedication was just wow.", user: "Nico Kraus"},
    ])

      const testimonials1 = testimonials.map(testimonials => {
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {testimonials1}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
}

export default Testimonials;
