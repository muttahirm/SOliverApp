import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/rootStackParams';
import BottomTabNavigator from '../bottomTabNavigation/bottomTabNavigator';
import Filter from '../../screens/filters/FilterScreen';
import ButtonBack from '../../components/Button/BackButton';

const RootStack = createNativeStackNavigator<RootStackParamList>();

// 👉 Back button component
const HeaderLeftBackButton = ({ navigation }: { navigation: any }) => {
  return (
    <ButtonBack
      onButtonPress={() => {

        navigation.goBack();
      }}
    />
  );
};

// 👉 Options config for FilterScreen
const getFilterScreenOptions = (navigation: any) => ({
  headerTitle: () => null,
  headerLeft: () => <HeaderLeftBackButton navigation={navigation} />,
});

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="BottomTabScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackVisible: false,
      }}>
      <RootStack.Group>
        <RootStack.Screen
          name="BottomTabScreen"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="FilterScreen"
          component={Filter}
          options={({navigation}) => getFilterScreenOptions(navigation)}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
