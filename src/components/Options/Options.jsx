import React from 'react';

const options = props => (
  <div>
    <input type="radio" value={props.option} name="same" />
    <label>{props.option}</label>
  </div>
);
export default options;
