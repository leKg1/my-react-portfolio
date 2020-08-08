import React, { useState } from 'react';

const Header = () => {
   const [network, setNetwork] = useState([
      {id: 0, name: "instagram", url: "https://www.instagram.com/le_kg", className: "fa fa-instagram"},
      {id: 1, name: "facebook", url: "https://www.facebook.com/kalivoguigouaby", className: "fa fa-facebook"}
   ])
   const [data, setData] = useState([
      {id: 0, occupation: "Web and Blockchain developer", city: "Yekaterinburg, Russia"},
   ])

    const networks2= network.map(network => {
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    })

    const myData= data.map(data => {
      return (
         <div key={data.id}>
         <h3>I'm a <span>{data.occupation}</span> currently based in <span>{data.city}</span>.</h3>
         </div>
      )
    })

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         {/*<li><a className="smoothscroll" href="#resume">Resume</a></li>*/}
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Gouaby Kalivogui.</h1>
            <h3>{myData}</h3>
            <hr />
            <ul className="social">
               {networks2}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );

}

export default Header;
