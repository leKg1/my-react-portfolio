import React, { useState } from 'react';
import portfolio from "../assets/portfolio.png"
import movieDB from "../assets/movieDB.jpeg"
import doiContactsLogo from "../assets/logo512.png"
import { Document, Page } from 'react-pdf/dist/entry.webpack';  
import certificatesPdf from "../assets/GouabyKalivoguiCertificate.pdf"  

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {id: 0, title: "DoiContacts", category: "A blockchain project to reduce email spam", url: "https://github.com/inspiraluna/doiContacts", photo: doiContactsLogo},
    {id: 1, title: "Movie finder App", category: "A simple React Native App to fetch movies info from API", url: "https://github.com/leKg1/simple-react-native-movieDB", photo: movieDB},
    {id: 2, title: "Portfolio site", category: "My react portfolio", url: "https://www.gouaby-kalivogui.tk/", photo: portfolio},
  ])

      const myProjects = projects.map(project => {
        return <div key={project.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={project.url} title={project.title}>
               <img alt={project.title} src={project.photo} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{project.title}</h5>
                     <p>{project.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works and certificates.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
             <div className="bgrid-quarters s-bgrid-thirds cf">
                {myProjects}
              </div>
              <div className="bgrid-quarters s-bgrid-thirds cf">
                <Document file={certificatesPdf}>
                <Page pageNumber={1} />
                </Document>
              </div>
            </div>
          </div>
      </div>
   </section>
    );
}

export default Portfolio;
