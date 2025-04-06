import {PRODUCT_LIST_ITEM_MARGIN} from '../components/ProductItem/productItem.styles';

export const calculateProductItemMargin = (index: number) => ({
  paddingRight: index % 2 === 0 ? PRODUCT_LIST_ITEM_MARGIN / 2 : 0,
  paddingLeft: index % 2 === 1 ? PRODUCT_LIST_ITEM_MARGIN / 2 : 0,
});
