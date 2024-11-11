import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Chatbackground from './chatbackground';
import PetDetailsScreen from './chemberlin';


const Chathome = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Chatbackground />
      <PetDetailsScreen />
    </ScrollView>
  );
};

export default Chathome;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

  },
});
