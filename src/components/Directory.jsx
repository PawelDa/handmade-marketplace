import React from 'react';

import MenuItem from './MenuItem';

import '../assets/stylesheets/components/Directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'Candles',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/08/10/22/34/candles-2628473_960_720.jpg',
        id: 1,
        linkUrl: 'candles'
      },
      {
        title: 'Bookmarks',
        imageUrl: 'https://picsum.photos/505/300',
        id: 2,
        linkUrl: ''
      },
      {
        title: 'Clothes',
        imageUrl: 'https://picsum.photos/495/300',
        id: 3,
        linkUrl: ''
      },
      {
        title: 'Jewellery',
        imageUrl: 'https://picsum.photos/499/300',
        size: 'large',
        id: 4,
        linkUrl: ''
      },
      {
        title: 'Cosmetics',
        imageUrl: 'https://picsum.photos/498/300',
        size: 'large',
        id: 5,
        linkUrl: ''
      }]
    }
  }

  render() {
    return(
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
