import React from 'react';

import ItemMenu from './ItemMenu';

import '../assets/stylesheets/components/Directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'Candles',
        imageUrl: '',
        id: 1
      },
      {
        title: 'Bookmarks',
        imageUrl: '',
        id: 2
      },
      {
        title: 'Clothes',
        imageUrl: '',
        id: 3
      }]
    }
  }

  render() {
    return(
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <ItemMenu key={id} title={title}/>
        ))}
      </div>
    );
  }
}

export default Directory;
