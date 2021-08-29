import React from 'react';

import '../assets/stylesheets/components/home-page.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='main-menu'>
      <div className='item-menu'>
        <div className='content'>
          <h1 className='title'>Candles</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='item-menu'>
        <div className='content'>
          <h1 className='title'>Bookmarks</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='item-menu'>
        <div className='content'>
          <h1 className='title'>Clothes</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
