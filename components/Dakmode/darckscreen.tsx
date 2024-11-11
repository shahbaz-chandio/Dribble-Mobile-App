import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Darkscreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [customMode, setCustomMode] = useState(false);

  const toggleMode = (mode) => {
    // Reset other toggles when one is selected
    if (mode === 'dark') {
      setDarkMode(true);
      setLightMode(false);
      setCustomMode(false);
    } else if (mode === 'light') {
      setDarkMode(false);
      setLightMode(true);
      setCustomMode(false);
    } else {
      setDarkMode(false);
      setLightMode(false);
      setCustomMode(true);
    }
  };

  const backgroundColor = darkMode
    ? '#121212'
    : lightMode
    ? '#ffffff'
    : customMode
    ? '#ffeb3b'
    : '#ffffff';
  const textColor = darkMode || customMode ? '#ffffff' : '#000000';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Theme Toggle</Text>
      
      <View style={styles.toggleGroup}>
        <View style={styles.toggle}>
          <Text style={[styles.label, { color: textColor }]}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={() => toggleMode('dark')}
          />
        </View>
        
        <View style={styles.toggle}>
          <Text style={[styles.label, { color: textColor }]}>Light Mode</Text>
          <Switch
            value={lightMode}
            onValueChange={() => toggleMode('light')}
          />
        </View>
        
        <View style={styles.toggle}>
          <Text style={[styles.label, { color: textColor }]}>Custom Mode</Text>
          <Switch
            value={customMode}
            onValueChange={() => toggleMode('custom')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  toggleGroup: {
    width: '80%',
    alignItems: 'center',
  },
  toggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
  },
});

export default Darkscreen;
