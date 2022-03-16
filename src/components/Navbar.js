import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">{props.aboutText}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/" onClick={props.updateColor('green')}>Green_Template</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about" onClick={props.updateColor('blue')}>Blue_Template</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/" onClick={props.updateColor('yellow')}>Yellow_Template</a>
              </li>


            </ul>
            <form className="d-flex">

              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="checkbox" onClick={props.ToggleMode} role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label text-white" htmlFor="flexSwitchCheckDefault">on/off</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
}