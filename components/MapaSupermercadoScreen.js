// MapaSupermercadoScreen.js
import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapaSupermercadoScreen() {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: -23.55052,
        longitude: -46.633308,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker coordinate={{ latitude: -23.55052, longitude: -46.633308 }} title="Mercado 1" />
    </MapView>
  );
}
