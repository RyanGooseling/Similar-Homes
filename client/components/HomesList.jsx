import React from 'react';
import Home from './Home.jsx';

const HomesList = (props) => (
  <div>
    {props.homes.map((home) => (<Home home={home}/>))}
  </div>
);

export default HomesList;