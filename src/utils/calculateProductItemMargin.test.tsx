import { calculateProductItemMargin } from './calculateProductItemMargin';
import { PRODUCT_LIST_ITEM_MARGIN } from '../components/ProductItem/productItem.styles';

describe('calculateProductItemMargin', () => {
  it('applies paddingRight for even index', () => {
    const margin = calculateProductItemMargin(0); // even
    expect(margin).toEqual({
      paddingRight: PRODUCT_LIST_ITEM_MARGIN / 2,
      paddingLeft: 0,
    });
  });

  it('applies paddingLeft for odd index', () => {
    const margin = calculateProductItemMargin(1); // odd
    expect(margin).toEqual({
      paddingRight: 0,
      paddingLeft: PRODUCT_LIST_ITEM_MARGIN / 2,
    });
  });

  it('works correctly for higher even index', () => {
    const margin = calculateProductItemMargin(4); // even
    expect(margin).toEqual({
      paddingRight: PRODUCT_LIST_ITEM_MARGIN / 2,
      paddingLeft: 0,
    });
  });

  it('works correctly for higher odd index', () => {
    const margin = calculateProductItemMargin(5); // odd
    expect(margin).toEqual({
      paddingRight: 0,
      paddingLeft: PRODUCT_LIST_ITEM_MARGIN / 2,
    });
  });
});
