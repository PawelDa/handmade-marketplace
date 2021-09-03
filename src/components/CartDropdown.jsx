import React from 'react';

import CustomButton from './CustomButton';

import '../assets/stylesheets/components/CartDropdown.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
