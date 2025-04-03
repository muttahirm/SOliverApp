import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/rootStackParams';
import ShoppingCart from '../../screens/shoppingCart/ShoppingCart';

// import { ITheme } from 'src/assets/themes';
// import { Theme } from 'src/hooks';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {

  return (
    <Stack.Navigator
      initialRouteName="ShoppingCartScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="ShoppingCartScreen"
          component={ShoppingCart}
          options={() => ({
            title: '',
            headerShown: false,
            gestureEnabled: false,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
