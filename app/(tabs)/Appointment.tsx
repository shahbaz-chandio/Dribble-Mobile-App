import { View, Text, ImageBackground, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Firstappo from '@/components/Appointment/appoint';




const Appointments = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name='appoint' component={Firstappo} options={{ headerShown: false }} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appointments;


