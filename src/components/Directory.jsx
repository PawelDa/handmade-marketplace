import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../redux/selectors/directory';

import MenuItem from './MenuItem';

import '../assets/stylesheets/components/Directory.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps =  createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
