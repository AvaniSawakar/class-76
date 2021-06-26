import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./Screens/Home";
import LocationScreen from "./Screens/Location";
import MeteorScreen from "./Screens/Meteor";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <LocationScreen/>
      <MeteorScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
