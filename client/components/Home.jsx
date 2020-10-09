import React from 'react';

const Home = (props) => (
  <div className='nssh-home'>
    <div className='nssh-container'>
      <img className='nssh-img' src={props.home.imageUrl}></img>
      <div className='nssh-notes'>
        <div className='nssh-new' style={{ display: props.home.age <= 48 ? '' : 'none' }}>NEW {props.home.age} {props.home.age === 1 ? 'HOUR AGO' : 'HOURS AGO'}</div>
        <div style={{ display: props.home.videoTour ? '' : 'none' }}>VIDEO TOUR</div>
        <div style={{ display: props.home['3dWalkthrough'] ? '' : 'none' }}>3D WALKTHROUGH</div>
      </div>
      <div className='nssh-arrow nssh-left-arrow' onClick={() => { props.goLeft(); }} style={{ display: props.idx === 0 ? 'none' : '' }}>{'<'}</div>
      <div className='nssh-arrow nssh-right-arrow' onClick={() => { props.goRight(); }} style={{ display: props.idx === props.max ? 'none' : '' }}>{'>'}</div>
    </div>
    <div className='nssh-text'>
      <div className='nssh-price'>${props.home.price + ',000'}</div>
      <div className='nssh-all-ammenities'>
        <div className='nssh-ammenities'>{props.home.beds} {props.home.beds === 1 ? 'bed' : 'beds'}</div>
        <div className='nssh-ammenities'>{props.home.baths} {props.home.baths === 1 ? 'bath' : 'baths'}</div>
        <div className='nssh-ammenities'>{props.home.size.toString().length > 3 ? props.home.size.toString()[0] + ',' + props.home.size.toString().slice(1) : props.home.size.toString()} Sq. Ft.</div>
      </div>
      <div className='nssh-address'>{`${props.home.address.number} ${props.home.address.streetName} ${props.home.address.streetSuffix}, ${props.home.address.city}, ${props.home.address.state} ${props.home.address.zipcode}`}</div>
      <div className='nssh-realty'>
        <div>{props.home.realtor}</div>
        <div>·</div>
        <div>{props.home.agency}</div>
        <div>•</div>
        <div>MLS {props.home.listing}</div>
      </div>
      <div className='nssh-tags'>
        {props.home.tags.split(',').map((tag, i) => (<div key={i}>{tag}</div>))}
      </div>
    </div>
  </div>
);

export default Home;