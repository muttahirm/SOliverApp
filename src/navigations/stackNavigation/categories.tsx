// import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/rootStackParams';
import Categories from '../../screens/categories/Categories';
import SubCategories from '../../screens/subCategories/SubCategories';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {

  return (
    <Stack.Navigator
      initialRouteName="CategoriesScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerBackVisible: false,
      }}
    >
      <Stack.Group>
              <Stack.Screen
                  name="CategoriesScreen"
          component={Categories}
          options={() => ({
            title: '',
            headerShown: false,
            gestureEnabled: false,
          })}
        />
        <Stack.Screen
          name="SubCategoriesScreen"
                  component={SubCategories}
                  options={() => {
            return {
              headerTitle: () => (''),
            };
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
