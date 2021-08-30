import React from 'react';

import '../assets/stylesheets/components/ItemMenu.scss';

const ItemMenu = ({ title, imageUrl }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    className='item-menu'
  >
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
    </div>
  </div>
);

export default ItemMenu;
