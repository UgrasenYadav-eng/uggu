import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  

    return (
        
      <nav className={`navbar navbar-expand-lg {props.letr} ${props.mode} bg-${props.mode} `} >
      <div className="container-fluid" >
        <strong><a className={`navbar-brand text-${props.mode === 'light' ? 'dark' :  'light'}`} href="/#" > {props.title} </a> </strong>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light' }`} aria-current="page" href="/#">Home</a>
            </li>
            <li className="nav-item">
              <a className= {`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/#">{props.aboutText}</a>
            </li>
            
          </ul>
          
        </div>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`} >
                <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
        </div>
      </div>
    </nav>

    )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  letr: PropTypes.string.isRequired,
};