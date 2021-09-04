import React from 'react';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/actions/cart';

import { ReactComponent as ShoppingIcon } from '../assets/images/shopping-bag.svg';

import '../assets/stylesheets/components/CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (acucumulatedQuantity, cartItem) => acucumulatedQuantity + cartItem.quantity,
    0
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
