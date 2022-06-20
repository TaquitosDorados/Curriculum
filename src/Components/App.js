import React from 'react';
import Header from '../shared/layout/Header';
import './App.css';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';


import {element} from 'prop-types';


function App(props) {
  return (
    <div className="App">
      <Header title="El Bicho"/>
      <Content >
        {props.children}
      </Content>
    </div>
  );

}

App.propTypes = {
  children: element.isRequired,
}

export default App;
