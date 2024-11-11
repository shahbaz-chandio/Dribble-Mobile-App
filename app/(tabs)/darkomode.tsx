import React, { useState } from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Switch, Text, StyleSheet } from 'react-native';
import Darkscreen from '@/components/Dakmode/darckscreen';
import chathome from '@/components/Chat/chat-home';

const Stack = createNativeStackNavigator();

const Index = () => {
  // State to control theme manually
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function for switching themes
  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme} independent={true}>
      <View style={styles.container}>
        <Text style={[styles.toggleText, { color: isDarkMode ? '#FFF' : '#000' }]}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      <Stack.Navigator>
        <Stack.Screen
          name="darckscreen"
          component={Darkscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="chathome"
          component={chathome}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'transparent', // Adjust based on your theme color
  },
  toggleText: {
    fontSize: 16,
  },
});
