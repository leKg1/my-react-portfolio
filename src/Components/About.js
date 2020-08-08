import React, { useState } from 'react';
import profilepic from "../assets/myPhoto01.jpg"  

const About = () => {

   const [data, setData] = useState([
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

            <p>In middle of January 2018 i started learning code. It was not easy and my days became:
            Work(code during my free time) -> home -> code -> sleep -> repeat.
            This was my life for almost 2 year, finally in the end of 2019 i quit my job and started working remotely as both web and junior blockchain developer.
            I started my journey because i wanted to use my time to make a change in my life. I think no matter where you are from, black, white, yellow or red, if you use wisely your time you can change your life.
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
