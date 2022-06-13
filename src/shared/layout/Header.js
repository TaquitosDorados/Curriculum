import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

const Header = (props) => {

    const {title, url} = props;

    return ( 
        <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />
            <h1>{title}</h1>
            <div>
            <Link to={`/`} className= 'Link'>Home</Link>
            <Link to={`/about`} className= 'Link'>About</Link>
            <Link to={`/notes`} className= 'Link'>Notes</Link>
            <Link to={`/contact`} className= 'Link'>Contact</Link>
            </div>
        </header>
    );
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;