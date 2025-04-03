import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/rootStackParams';
import Home from '../../screens/home/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();


const StackNavigator = () => {
    return <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
            headerShadowVisible: false,
            headerBackVisible: false,
            headerTitleAlign: 'center',
        }}
    >
        <Stack.Group>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={() => ({
            title: '',
            headerShown: false,
            gestureEnabled: false,
          })}
        />
      </Stack.Group>
     </Stack.Navigator>;
};

export default StackNavigator;
