import { StyleSheet, ScrollView, useColorScheme } from 'react-native';
import React from 'react';
import Background from './background';
import DoctorCard from './dr-card';
import MyClinicsHeader from './mysearch';
import BusinessCard from './bussinescard';
import Myvets from './myvets';
import ChatCard from './chatcard';
import { Colors } from '../../constants/Colors';

const Firstimg = () => {
  const theme = useColorScheme();
  const colors = Colors[theme];

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
      <Background />
      <DoctorCard />
      <MyClinicsHeader />
      <BusinessCard />
      <Myvets />
      <ChatCard />
    </ScrollView>
  );
};

export default Firstimg;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
