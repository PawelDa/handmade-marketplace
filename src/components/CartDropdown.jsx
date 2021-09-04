import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../redux/selectors/cart';
import { createStructuredSelector } from 'reselect';

import CustomButton from './CustomButton';
import CartItem from './CartItem';

import '../assets/stylesheets/components/CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
