import { useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { mapStyles } from '../Styles/Styles';

export default function LocationMap() {
  const [coordinates, setCoordinates] = useState(null);
  const route = useRoute();
  const locationQuery = route.params?.location || 'Default Location';

  useEffect(() => {
    async function fetchLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Location permission not granted!');
        return;
      }

      if (locationQuery) {
        let geoData = await Location.geocodeAsync(locationQuery);
        if (geoData.length > 0) {
          setCoordinates({ latitude: geoData[0].latitude, longitude: geoData[0].longitude });
        } else {
          console.log('Location not found.');
        }
      } else {
        console.log('No location provided.');
      }
    }
    fetchLocation();
  }, [locationQuery]);

  return (
    <View style={mapStyles.container}>
      {coordinates && (
        <MapView
          style={mapStyles.map}
          region={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      )}
    </View>
  );
}
