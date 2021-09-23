import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/config';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/selectors/user';
import { selectCartHidden } from '../../redux/selectors/cart';

import { ReactComponent as Logo } from '../../assets/images/default-monochrome.svg';
import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cart/CartDropdown';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}><i className="fas fa-sign-out-alt fa-sm"></i>&nbsp;SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
