import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cart';

import CustomButton from './CustomButton';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
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
      <CustomButton onClick={() => addItem(item)} inverted>
        <i className="fas fa-cart-plus fa-2x"></i>
      </CustomButton>
    </div>
)};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
