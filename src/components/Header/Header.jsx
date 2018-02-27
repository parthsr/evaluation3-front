import React from 'react';
import './Header.css';

const Header = props => (
  <div className="Header-title-wrapper">
    <p>Quizzy</p>
    <p>{props.name}</p>
  </div>
);

export default Header;
