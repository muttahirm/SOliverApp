import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/rootStackParams';
import Categories from '../../screens/categories/Categories';

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
          options={{
            title: '',
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
