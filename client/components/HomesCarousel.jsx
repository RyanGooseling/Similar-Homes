import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Home from './Home.jsx';
import TwoHomes from './TwoHomes.jsx';

class HomesCarousel extends React.Component {
  constructor(props) {
    super(props);
    var duos = [];
    for (var i = 0; i < this.props.homes.length; i += 2) {
      duos.push(props.homes.slice(i, i + 2));
    }
    this.state = { duos: duos };
  }

  render() {
    return (
      <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={false} autoPlay={false}>
        {this.props.homes.map((home, i) => (<Home home={home} key={i} />))}
      </Carousel>
    );
  }

  // render() {
  //   return (
  //     <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={false} autoPlay={false}>
  //       {this.state.duos.map((duo, i) => (<TwoHomes homes={duo} key={i} />))}
  //     </Carousel>
  //   );
  // }
}

export default HomesCarousel;