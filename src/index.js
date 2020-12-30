import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Chap1 from './App';
import Chap2 from './Chap2';
import reportWebVitals from './reportWebVitals';

import cover from './cover.jpg';

ReactDOM.render(
  <React.StrictMode>
    <div style={{textAlign:'center',}}>
      <h1 style={{color: "White", position: 'center'}}> Detective Conan </h1>

      <img src={cover} alt="Detective Conan Volume 1 Cover" style={{
        width: '300px'
        }}/>
      <p style={{color: "White", textAlign:'center', fontSize: '16px'}}> Shinichi Kudo is a high school detective who sometimes works with the police to solve cases. During an investigation, he is attacked by members of a crime syndicate known as the Black Organization. They force him to ingest an experimental poison, but instead of killing him, the poison transforms him into a child. Adopting the pseudonym Conan Edogawa and keeping his true identity a secret, Kudo lives with his childhood friend Ran and her father Kogoro, who is a private detective.</p>
    </div>

    <div style={{
        position: 'absolute', left: '50%', top: '70%',
        transform: 'translate(-50%, -50%)'}}>    
  <DropdownButton title="Chapter List" key="Info" id={`dropdown-variants-Info`} variant = "info" size = "lg">
      <Dropdown.Item><Chap1></Chap1></Dropdown.Item>
      <Dropdown.Item><Chap2></Chap2></Dropdown.Item>
  </DropdownButton>
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
