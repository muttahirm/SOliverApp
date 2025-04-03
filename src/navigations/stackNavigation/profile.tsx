import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/rootStackParams';
import Profile from '../../screens/profile/Profile';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  // const styles = useStyles();

  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        gestureEnabled: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="ProfileScreen"
          component={Profile}
          options={() => ({
            title: '',
            headerShown: false,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
