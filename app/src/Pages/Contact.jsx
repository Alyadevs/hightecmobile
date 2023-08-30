
 import "../Styles/Contact.css" ;
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
     const form = useRef();
  
     const sendEmail = (e) => {
       e.preventDefault();
  
       emailjs
         .sendForm(
          "service_w5dr1jj",
           "template_kjmhvmm",
          form.current,
           "CFBad--o4Z_UpjTyN"
        )
         .then(
           (result) => {
             console.log(result.text);
            console.log("message sent");
           },
           (error) => {
             console.log(error.text);
           }
         );
     };
  return (
    <div>
      <h1 style={{fontFamily: "bold"}}>Contact Us</h1>
 <form ref={form} onSubmit={sendEmail} className="form">
        <label className="label">Name</label>
        <input type="text" name="from_name" className="input" />
        <label  className="label">Email</label>
        <input type="email" name="to_name" className="input"  />
        <label  className="label">Message</label>
        <textarea   className="textarea" name="message" />
        <input type="submit" value="Send" className="input"  />
      </form>
      </div>
   
  )
};

export default Contact
// const StyledContactForm = styled.div`
//   width: 400px;

//   
// `;
