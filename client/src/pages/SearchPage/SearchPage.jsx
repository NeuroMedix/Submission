import React from 'react'
import SearchField from '../../components/SearchField/SearchField'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import NeuroLogo from '../../assets/images/NEUROMEDIX_LOGO.svg'
import './SearchPage.scss'

function SearchPage() {
  return (
    <>
    <main className='main-search'>
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
        <section className='section-search'>
            <p>Discover a world of endless possiblities with NeuroMedix</p>
    <SearchField/> 
    <Link className="CTA-landing" to={'/result-page'}> <Button props={"SUBMIT"}/> </Link>  

    <h4>The SMILES generated is not for immediate or commercial use. It needs to be tested in a controlled environment and approved by the FDA.</h4>
    </section>
    </main>
    </>
  )
}

export default SearchPage