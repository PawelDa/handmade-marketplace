import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../redux/selectors/shop';

import CollectionItem from '../components/CollectionItem';

import '../assets/stylesheets/pages/CollectionPage.scss';

const CollectionPage = ({ collection }) => (
  <div className='collection-page'>
    <h2>Collection PAGE</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
