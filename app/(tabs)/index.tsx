import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import MapView, {Geojson} from 'react-native-maps';

import { useEffect, useState } from 'react';

const initial_loc = {
  latitude: 32.7157,
  longitude: -117.1611,
  latitudeDelta: .5,
  longitudeDelta: .5,
};

const myPlace = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [64.165329, 48.844287],
      }
    }
  ]
};

export default function TabOneScreen() {
  
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map}
      region={initial_loc}
      showsUserLocation
      showsMyLocationButton
      >
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map: {
    width: '100%',
    height: '100%',
  }
});
