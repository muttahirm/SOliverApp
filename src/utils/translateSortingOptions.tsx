import {Sorting} from '../components/ProductSortingAndFiltering/productSortingAndFiltering';

export const translateSortingOption = (sorting: Sorting) => {
  switch (sorting) {
    case 'PRICE_ASC':
      return 'Price Ascending';
    case 'PRICE_DESC':
      return 'Price Descending';
    default:
      return 'New First';
  }
};
