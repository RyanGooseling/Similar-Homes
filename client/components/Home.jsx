import React from 'react';

const Home = (props) => (
  <div className='home'>
    <div className='container'>
      <img src={props.home.imageUrl}></img>
      <div className='notes'>
        <div className='new' style={{ display: props.home.age <= 48 ? '' : 'none' }}>NEW {props.home.age} {props.home.age === 1 ? 'HOUR AGO' : 'HOURS AGO'}</div>
        <div style={{ display: props.home.videoTour ? '' : 'none' }}>VIDEO TOUR</div>
        <div style={{ display: props.home['3dWalkthrough'] ? '' : 'none' }}>3D WALKTHROUGH</div>
      </div>
      {/* <div className='arrow left-arrow' onClick={() => { props.goLeft(); }} style={{ display: props.idx === 0 ? 'none' : '' }}>{'<'}</div>
      <div className='arrow right-arrow' onClick={() => { props.goRight(); }} style={{ display: props.idx === props.max ? 'none' : '' }}>{'>'}</div> */}
    </div>
    <div className='text'>
      <div className='price'>${props.home.price + ',000'}</div>
      <div className='all-ammenities'>
        <div className='ammenities'>{props.home.beds} {props.home.beds === 1 ? 'bed' : 'beds'}</div>
        <div className='ammenities'>{props.home.baths} {props.home.baths === 1 ? 'bath' : 'baths'}</div>
        <div className='ammenities'>{props.home.size.toString().length > 3 ? props.home.size.toString()[0] + ',' + props.home.size.toString().slice(1) : props.home.size.toString()} Sq. Ft.</div>
      </div>
      <div className='address'>{`${props.home.address.number} ${props.home.address.streetName} ${props.home.address.streetSuffix}, ${props.home.address.city}, ${props.home.address.state} ${props.home.address.zipcode}`}</div>
      <div className='realty'>
        <div>{props.home.realtor}</div>
        <div>·</div>
        <div>{props.home.agency}</div>
        <div>•</div>
        <div>MLS {props.home.listing}</div>
      </div>
      <div className='tags'>
        {props.home.tags.split(',').map((tag, i) => (<div key={i}>{tag}</div>))}
      </div>
    </div>
  </div>
);

export default Home;