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
      url: `/data/homes/${this.props.id}`
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
      <div className='nssh-main'>
        <h1 className='nssh-h1'>Nearby Similar Homes</h1>
        <HomesList homes={this.state.homes} />
      </div>
    );
  }
}

export default App;