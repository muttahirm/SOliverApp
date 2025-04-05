import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './navigations/rootStackNavigation/rootStackNavigator';


import 'react-native-gesture-handler';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <RootStackNavigator />
          </NavigationContainer>
  );
}



export default App;
