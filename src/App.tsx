import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './navigations/rootStackNavigation/rootStackNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import 'react-native-gesture-handler';
import { FiltersProvider } from './providers/filterProviderContext';

const queryClient = new QueryClient();

function App(): React.JSX.Element {

  return (
    //Access all the methods and hooks
    //that the react-query provides
    <QueryClientProvider client={queryClient}>
      <FiltersProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </FiltersProvider>
    </QueryClientProvider>

  );
}



export default App;
