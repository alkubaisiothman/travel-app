import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { Button, List, Text } from "react-native-paper";
import { getLocationsFromFirestore } from "../firebase/FirestoreController";
import { useEffect, useState } from "react";
import { containerStyles } from '../Styles/Styles';

export default function LocationsScreen({ navigation }) {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const locationData = await getLocationsFromFirestore();
      setLocations(locationData);
    };
    fetchLocations();
  }, []);

  return (
    <ScrollView style={containerStyles.wrapper}>
      <Button 
        mode='contained' 
        style={containerStyles.addButton} 
        onPress={() => navigation.navigate('AddLocation')}>
        Add New Location
      </Button>
      {locations.map((loc) => (
        <List.Item
          style={containerStyles.card}
          key={loc.id}
          titleStyle={containerStyles.title}
          title={loc.name}
          description={() => (
            <>
              <Text>{loc.description}</Text>
              <ScrollView horizontal>
                {Array.from({ length: 5 }).map((_, index) => (
                  <MaterialIcons
                    key={index}
                    name={index < loc.rating ? 'star' : 'star-border'}
                    size={25}
                    color='gold'
                  />
                ))}
              </ScrollView>
            </>
          )}
          onPress={() => navigation.navigate('Map', { location: loc.name })}
          right={(props) => <MaterialIcons {...props} name='location-on' color='red' size={35} />}
        />
      ))}
    </ScrollView>
  );
}
