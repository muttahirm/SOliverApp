import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/rootStackParams';
import WishList from '../../screens/wishList/WishList';

// import { ITheme } from 'src/assets/themes';
// import { Theme } from 'src/hooks';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
//   const styles = useStyles();

  return (
    <Stack.Navigator
      initialRouteName="WishListScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="WishListScreen"
          component={WishList}
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
