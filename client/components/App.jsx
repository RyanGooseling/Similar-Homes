import React from 'react';
import HomesList from './HomesList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { homes: [] };
  }

  componentDidMount() {
    const app = this;
    const options = {
      method: 'get',
      url: `http://localhost:3001/data/homes/${this.props.id}`
    };
    axios(options)
      .then((results) => {
        app.setState({ homes: results.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <HomesList homes={this.state.homes} />
    );
  }
}

export default App;