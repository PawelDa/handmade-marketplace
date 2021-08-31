import React from 'react';
import { withRouter } from 'react-router';

import '../assets/stylesheets/components/ItemMenu.scss';

const ItemMenu = ({ title, size, imageUrl, history, linkUrl, match }) => (
  <div className={`${size} item-menu`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
    </div>
  </div>
);

export default withRouter(ItemMenu);
