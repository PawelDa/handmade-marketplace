import React from 'react';

import '../assets/stylesheets/components/CollectionItem.scss';

import CustomButton from './CustomButton';

const CollectionItem = ({id, name, price, imageUrl}) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`  
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>£{price}</span>
    </div>
    <CustomButton inverted><i className="fas fa-cart-plus fa-2x"></i></CustomButton>
  </div>
)

export default CollectionItem;
