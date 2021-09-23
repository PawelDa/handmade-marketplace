import React from 'react';
import { Link } from 'react-router-dom';

import CollectionItem from './CollectionItem';

import '../assets/stylesheets/components/CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <Link to={`/shop/${title.toLowerCase()}`}>
      <div className='title-container'>
        <img className='title-icon' src={`/shop-icons/${title.toLowerCase()}.svg`} alt=''/>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </div>
    </Link>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
