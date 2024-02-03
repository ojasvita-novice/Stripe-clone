import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'
import {Link} from "react-router-dom"

const Hero = () => {
 const {closeSubMenu}=useGlobalContext();

 return (
   <section className="hero" onMouseOver={closeSubMenu}>
     <div className="hero-center">
       <article className="hero-info">
         <br />
         <br />
         <br />
         <br />
         <h1>Payments Infastructure for the Internet</h1>
         <p>
           Stripe Inc. is a trusted and reliable payment company, known for its
           secure, user-friendly services and commitment to integrity. With a
           decade of excellence in facilitating smooth transactions and
           protecting against fraud, Stripe stands out for its dedication to
           transparency and customer satisfaction, making it a genuinely
           dependable choice in financial transactions.
         </p>
         <Link to="/start">
           <button className="btn">Start Now</button>
         </Link>
       </article>
       <article className="hero-images">
         <img src={phoneImg} alt="phone" className="phone-img" />
       </article>
     </div>
   </section>
 );
}

export default Hero
