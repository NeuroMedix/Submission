import React from 'react'
import { Link } from 'react-router-dom'
import Result from '../../components/Result/Result'
import './ResultPage.scss'
import NeuroLogo from '../../assets/images/NEUROMEDIX_LOGO.svg'


function ResultPage({MolWeight, LogP, QED}) {
  return (
    <main className='main-result'>
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
        <section className='section'>
      <Result  MolWeight={'245.285'} LogP={'3.555200000000002'} QED={'0.6571334132234489'}  />
      </section>
    </main>
  )
}

export default ResultPage