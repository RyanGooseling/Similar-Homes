import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.key = 0;
    this.state = {
      items: [ 'hi', 'hello', 'sup', 'bye', ':)', '!!!' ],
      idx: 0
    };
  }

  goRight() {
    this.setState({ idx: this.state.idx + 2 });
  }

  goLeft() {
    this.setState({ idx: this.state.idx - 2 });
  }

  render() {
    return (
      <div className='carousel'>
        <div className='arrow leftarrow' onClick={this.goLeft.bind(this)} style={{ display: this.state.idx === 0 ? 'none' : '' }}>{'<'}</div>
        {this.state.items.slice(this.state.idx, this.state.idx + 2).map((item) => (<div className={`item item-${this.key % 2 === 0 ? 'one' : 'two'}`} key={this.key++}>{item}</div>))}
        <div className='arrow rightarrow' onClick={this.goRight.bind(this)} style={{ display: this.state.idx === this.state.items.length - 2 ? 'none' : '' }}>{'>'}</div>
      </div>
    );
  }
}

export default Carousel;