import React from 'react';

import ItemMenu from './ItemMenu';

import '../assets/stylesheets/components/Directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'Candles',
        imageUrl: 'https://picsum.photos/500/300',
        id: 1
      },
      {
        title: 'Bookmarks',
        imageUrl: 'https://picsum.photos/505/300',
        id: 2
      },
      {
        title: 'Clothes',
        imageUrl: 'https://picsum.photos/495/300',
        id: 3
      }]
    }
  }

  render() {
    return(
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <ItemMenu key={id} title={title} imageUrl={imageUrl}/>
        ))}
      </div>
    );
  }
}

export default Directory;
