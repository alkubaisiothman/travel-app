import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddNewLocationScreen from './Screens/AddLocation';
import LocationsListScreen from './Screens/Locations';
import MapScreen from './Screens/Map';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Locations' 
          component={LocationsListScreen} 
          options={{ title: 'Locations List' }} 
        />
        <Stack.Screen 
          name='AddLocation' 
          component={AddNewLocationScreen} 
          options={{ title: 'Add New Location' }} 
        />
        <Stack.Screen 
          name='Map' 
          component={MapScreen} 
          options={{ title: 'View Location on Map' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
