import React from 'react';
import HomesList from './HomesList.jsx';

const App = (props) => (
  <HomesList homes={props.homes} />
);

export default App;