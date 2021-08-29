import React from 'react';

import '../assets/stylesheets/components/ItemMenu.scss';

const ItemMenu = ({ title }) => (
  <div className='item-menu'>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default ItemMenu;
