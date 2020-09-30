import React from 'react';
import Home from './Home.jsx';

var key = 0;

const HomesList = (props) => (
  <div>
    {props.homes.map((home) => (<Home home={home} key={key++}/>))}
  </div>
);

export default HomesList;