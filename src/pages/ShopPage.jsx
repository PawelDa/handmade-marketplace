import React from 'react';

import SHOP_DATA from '../assets/data/data';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA
    };
  }

  render() {
    return <div>SHOP_PAGE</div>
  }
}

export default ShopPage;
