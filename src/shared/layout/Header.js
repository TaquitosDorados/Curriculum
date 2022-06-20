import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../images/bicho.jpg';

const Header = (props) => {

    const {title, url} = props;

    return ( 
        <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />
            <h1>{title}</h1>
            <div className="Links">
            <Link to={`/`} className= 'Link'>Curriculum Vitae</Link>
            <Link to={`/portafolio`} className= 'Link'>Portafolio</Link>
            <Link to={`/contact`} className= 'Link'>Contacto</Link>
            </div>
        </header>
    );
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;