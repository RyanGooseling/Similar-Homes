import React from 'react';
import Home from './Home.jsx';

const TwoHomes = (props) => (
  <div className='duo'>
    <Home home={props.homes[0]} />
    <Home home={props.homes[1]} />
  </div>
);

export default TwoHomes;