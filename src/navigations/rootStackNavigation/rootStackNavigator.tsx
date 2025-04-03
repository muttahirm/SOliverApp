import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/rootStackParams';
import  BottomTabNavigator  from '../bottomTabNavigation/bottomTabNavigator';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="BottomTabScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackVisible: false,
      }}
    >
      <RootStack.Group>
        <RootStack.Screen
          name="BottomTabScreen"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
