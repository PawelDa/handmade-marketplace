import React from 'react';

import '../assets/stylesheets/components/CustomButton.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
