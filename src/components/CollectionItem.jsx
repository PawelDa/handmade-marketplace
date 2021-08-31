import React from 'react';

import '../assets/stylesheets/components/CollectionItem.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
  <div>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`  
      }}
    />
    <div className='collection-fotter'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
)

export default CollectionItem;
