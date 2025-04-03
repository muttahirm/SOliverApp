import * as React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { RootStackParamList } from '../../types/rootStackParams';
import {
  HomeStackNavigator,
  CategoriesStackNavigator,
  ProfileStackNavigator,
  ShoppingCartStackNavigator,
  WishListStackNavigator,
} from '../stackNavigation';

const Tab = createBottomTabNavigator<RootStackParamList>();

const getTabBarIcon = (routeName: string, color: string) => {
  const iconMap: Record<string, string> = {
    HomeTab: 'home',
    CategoriesTab: 'text-search',
    WishListTab: 'heart-outline',
    ShoppingCartTab: 'cart',
    ProfileTab: 'account-outline',
  };

  return <Icon name={ iconMap[routeName]} size={24} color={color} />;
};

const getTabBarLabel = (routeName: string, color: string) => {
  const labelMap: Record<string, string> = {
    HomeTab: 'Home',
    CategoriesTab: 'Categories',
    WishListTab: 'Wishlist',
    ShoppingCartTab: 'Cart',
    ProfileTab: 'Profile',
  };

  // eslint-disable-next-line react-native/no-inline-styles
  return <Text style={{ color, fontSize: 12 }}>{labelMap[routeName] || ''}</Text>;
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="CategoriesTab"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarItemStyle: { paddingTop: 0 },
        tabBarIcon: ({ color }) => getTabBarIcon(route.name, color),
        tabBarLabel: ({ color }) => getTabBarLabel(route.name, color),
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="CategoriesTab" component={CategoriesStackNavigator} />
      <Tab.Screen name="WishListTab" component={WishListStackNavigator} />
      <Tab.Screen name="ShoppingCartTab" component={ShoppingCartStackNavigator} />
      <Tab.Screen name="ProfileTab" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
