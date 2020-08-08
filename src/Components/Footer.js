import React, { useState } from 'react';

const Footer = () => {
  const [network, setNetwork] = useState([
    {id: 0, name: "instagram", url: "https://www.instagram.com/le_kg", className: "fa fa-instagram"},
    {id: 1, name: "facebook", url: "https://www.facebook.com/kalivoguigouaby", className: "fa fa-facebook"}
 ])

      const networks= network.map(network => {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2020 Gouaby Kalivogui</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
}

export default Footer;
