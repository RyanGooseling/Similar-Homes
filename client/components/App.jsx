import React from 'react';
import HomesList from './HomesList.jsx';
import HomesCarousel from './HomesCarousel.jsx';
import MultipleHomes from './MultipleHomes.jsx';

const App = (props) => (
  // <HomesList homes={props.homes} />
  // <MultipleHomes homes={props.homes} />
  <HomesCarousel homes={props.homes} />
);

export default App;