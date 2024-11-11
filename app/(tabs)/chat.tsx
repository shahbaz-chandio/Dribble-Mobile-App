import { View, Text, ImageBackground, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import chathome from '@/components/Chat/chat-home';
import Voice from '@/components/Chat/voice';



const Index = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name='chat-home' component={chathome} options={{ headerShown: false }} />
        <Stack.Screen name='Voicee' component={Voice} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;


