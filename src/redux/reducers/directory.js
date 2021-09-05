const initialState = {
  sections: [{
    title: 'Candles',
    imageUrl: 'https://images.unsplash.com/photo-1601479604588-68d9e6d386b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80https://cdn.pixabay.com/photo/2017/08/10/22/34/candles-2628473_960_720.jpg',
    id: 1,
    linkUrl: 'shop/candles'
  },
  {
    title: 'Bookmarks',
    imageUrl: 'https://images.unsplash.com/photo-1507360224496-f4e6108159f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    id: 2,
    linkUrl: 'shop/bookmarks'
  },
  {
    title: 'Clothes',
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    id: 3,
    linkUrl: 'shop/clothes'
  },
  {
    title: 'Jewellery',
    imageUrl: 'https://images.unsplash.com/photo-1601121141418-c1caa10a2a0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    size: 'large',
    id: 4,
    linkUrl: 'shop/jewellery'
  },
  {
    title: 'Cosmetics',
    imageUrl: 'https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    size: 'large',
    id: 5,
    linkUrl: 'shop/cosmetics'
  }]
};

const directoryReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
