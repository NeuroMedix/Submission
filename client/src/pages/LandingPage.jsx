import { useState } from "react";
import "./LandingPage.scss";
import Button from "../components/Button";
import NeuroLogo from '../assets/images/NEUROMEDIX_LOGO.svg'

import { Link } from "react-router-dom";
import React from "react";

function LandingPage({props}) {
  return (
    <>
      <main className="main" >
       
        <header className="header">
          <div className="header__container">
          <Link to={'/'}> <img className="header__logo" src={NeuroLogo} alt="NEUROMEDIX LOGO" /> </Link> 

            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-button">About</li>
                <li className="header__nav-button">Contact</li>
              </ul>
            </nav>
          </div>
        </header>
        <section>
        <div className="main-body">

        <h1>NEUROMEDIX</h1>
       <p>Neuromedix addresses the slow, costly drug discovery process for neurodegenerative diseases <br /> to reduce development time and improve accessibility of therapies.</p>
     <Link className="CTA-landing" to={'/search-page'}> <Button props={"GET STARTED"}/> </Link>  
        </div>
        </section>
     <section className='about'>

     </section>

      </main>
    </>
  );
}

export default LandingPage;
