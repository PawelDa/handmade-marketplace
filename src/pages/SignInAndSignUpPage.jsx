import React from 'react';

import '../assets/stylesheets/pages/SignInAndSignUpPage.scss';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sing-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
