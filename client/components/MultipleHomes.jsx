import React from 'react';
import Home from './Home.jsx';

const MultipleHomes = (props) => (
  <div>
    {props.homes.map((home, i) => (<Home home={home} key={i} />))}
  </div>
);

export default MultipleHomes;