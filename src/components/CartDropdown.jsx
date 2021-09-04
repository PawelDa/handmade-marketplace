import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import { selectCartItems } from '../redux/selectors/cart';

import CustomButton from './CustomButton';
import CartItem from './CartItem';

import '../assets/stylesheets/components/CartDropdown.scss';

const CartDropdown = ({ cartItems, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ?
        cartItems.map(cartItem => 
          <CartItem key={cartItem.id} item={cartItem} />
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
