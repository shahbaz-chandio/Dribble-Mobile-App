import { View, Text, ImageBackground, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Firstimg from '@/components/HOME/firstimg';
import Appp from '@/components/HOME/chatscreen';



const Index = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name='firstimg' component={Firstimg} options={{ headerShown: false }} />
      
        <Stack.Screen name='Cat' component={Appp} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;


