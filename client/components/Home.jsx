import React from 'react';

var key = 0;

const Home = (props) => (
  <div>
    <div>
      <img src={props.home.imageUrl}></img>
      <div style={{ display: props.home.videoTour ? '' : 'none' }}>VIDEO TOUR</div>
      <div style={{ display: props.home['3dWalkthrough'] ? '' : 'none' }}>3D WALKTHROUGH</div>
      <div style={{ display: props.home.age <= 48 ? '' : 'none' }}>NEW LISTING: {props.home.age} hours ago</div>
    </div>
    <div id='price'>${props.home.price}</div>
    <div>
      <div className='ammenities'>{props.home.beds} beds</div>
      <div className='ammenities'>{props.home.baths} baths</div>
      <div className='ammenities'>{props.home.size} Sq. Ft.</div>
    </div>
    <div>{`${props.home.address.number} ${props.home.address.streetName} ${props.home.address.streetSuffix}, ${props.home.address.city}, ${props.home.address.state} ${props.home.address.zipcode}`}</div>
    <div>
      <div>{props.home.realtor}</div>
      <div>{props.home.agency}</div>
      <div>MLS {props.home.listing}</div>
    </div>
    <div>
      {props.home.tags.split(',').map((tag) => (<div key={key++}>{tag}</div>))}
    </div>
  </div>
);

export default Home;