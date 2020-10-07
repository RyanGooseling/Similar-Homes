import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const id = window.location.pathname.slice(7, -1);

ReactDOM.render(<App id={id} />, document.getElementById('similar-homes-app'));