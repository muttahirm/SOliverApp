// import { IArticle } from '.';

export type RootStackParamList = {
  BottomTabScreen: undefined;
  FilterScreen: undefined;

  HomeScreen: undefined;

  CategoriesScreen: undefined;
  SubCategoriesScreen: { category: string };
  // FilterScreen: {
  //   onApply: (filters: any) => void;
  // };

  WishListScreen: undefined;
  ShoppingCartScreen: undefined;
  ProfileScreen: undefined;

  HomeTab: undefined;
  CategoriesTab: undefined;
  WishListTab: undefined;
  ShoppingCartTab: undefined;
  ProfileTab: undefined;
};
