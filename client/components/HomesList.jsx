import React from 'react';
import Home from './Home.jsx';

class HomesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { idx: 0 };
  }

  goLeft() {
    this.setState({ idx: this.state.idx - 1 });
  }

  goRight() {
    this.setState({ idx: this.state.idx + 1 });
  }

  render() {
    if (!this.props.homes.length) {
      return (<div></div>);
    }
    return (
      <Home home={this.props.homes[this.state.idx]} idx={this.state.idx} goLeft={this.goLeft.bind(this)} goRight={this.goRight.bind(this)} max={this.props.homes.length - 1}/>
    );
  }
}

export default HomesList;