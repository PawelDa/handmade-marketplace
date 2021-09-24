import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/config';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/selectors/user';
import { selectCartHidden } from '../../redux/selectors/cart';

import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cart/CartDropdown';

import {
  MarketLogo,
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from '../../assets/stylesheets/components/layout/Header';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <MarketLogo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      {currentUser ?
        <OptionLink as='div' onClick={() => auth.signOut()}>
          <i className="fas fa-sign-out-alt fa-sm"></i>&nbsp;SIGN OUT
        </OptionLink>
        :
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
