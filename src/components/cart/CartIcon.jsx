import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/actions/cart';
import { selectCartItemsCount } from '../../redux/selectors/cart';

import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
