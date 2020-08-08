import React, { useState } from 'react';

const Contact = () => {
   const [data, setData] = useState([
      { id: 0, city: "Yekaterinburg", state: "Sverdlovsk Oblast",
        zip: "620000", phone: "+7 912 043 1929",
        email: "gouabyk14@yahoo.fr",
   },
   ])
   const [contactForm, setContactForm] = useState([
      { id: 0, name: "", email: "",
        subject: "",
   },
   ])

      const myData = data.map(data => {
         return <span key={data.id}>
           {data.city}, {data.state} {data.zip}<br />
				<span>{data.phone}</span><br />
				<span>{data.email}</span>
         </span>
      })

      console.log("contactForm", contactForm)

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">Warning: Contact form not yet configured, please contact me via normal email for now</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={(e) => setContactForm({name: e.target.value})}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={(e) => setContactForm({email: e.target.value})}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={(e) => setContactForm({subject: e.target.value})}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
					   <h4>Address and Phone</h4>
					   <p className="address">
						   Gouaby Kalivogui<br />
						   {myData}
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
}

export default Contact;
