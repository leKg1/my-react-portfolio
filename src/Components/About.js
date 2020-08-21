import React, { useState } from 'react';
import profilepic from "../assets/myPhoto01.jpg"  

const About = () => {

   const [data] = useState([
      { id: 0, city: "Yekaterinburg", state: "Sverdlovsk Oblast",
        zip: "620000", phone: "+7 912 043 1929",
        email: "gouabyk14@yahoo.fr",
   },
   ])

    const myData = data.map(data => {
      return ( <span key={data.id}>
         <span>Gouaby Kalivogui</span><br />
         <span>
         {data.city}, {data.state}, {data.zip}
       </span><br />
         <span>{data.phone}</span><br />
         <span>{data.email}</span>
      </span>
      )
    })

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Gouaby Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
            I am a determined and productive developer with a passion for creative solutions.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   {myData}
					   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
}

export default About;
