import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const collectionIdMap = {
  candles: 1,
  bookmarks: 2,
  clothes: 3,
  jewellery: 4,
  cosmetics: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) => 
  createSelector(
    [selectCollections],
    collections => collections.find(
      collection => collection.id === collectionIdMap[collectionUrlParam]
    )
  )
);
