import React from 'react';
import HomesList from './HomesList.jsx';
import Carousel from './Carousel.jsx';
import axios from 'axios';

const App = (props) => (
  <HomesList homes={props.homes} />
);

export default App;