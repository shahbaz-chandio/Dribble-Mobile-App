import { StyleSheet, View, ImageBackground, Image, Text, useColorScheme } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';

const backgroundImage = require('../../assets/images/background.jpeg');

const Background = () => {
  const theme = useColorScheme();
  const colors = Colors[theme || 'light']; // Fallback to light theme

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
        <View style={[styles.overlay, { backgroundColor: colors.overlay }]} />
      </ImageBackground>

      <View style={styles.image}>
        <Image
          source={require('../../assets/images/woman.jpeg')}
          style={{ width: 80, height: 80, borderRadius: 100 }}
        />
      </View>

      <Text style={[styles.text, { color: colors.text }]}>Hello</Text>
      <Text style={[styles.subText, { color: colors.text }]}>Roeselien,</Text>
      <Text style={[styles.helpText, { color: colors.tint }]}>how can we help?</Text>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: 400,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    position: 'absolute',
    top: 50,
    left: 50,
  },
  text: {
    position: 'absolute',
    top: 135,
    left: 65,
    fontSize: 15,
    fontWeight: 'bold',
  },
  subText: {
    position: 'absolute',
    top: 155,
    left: 65,
    fontSize: 15,
    fontWeight: 'bold',
  },
  helpText: {
    position: 'absolute',
    top: 175,
    left: 65,
    fontSize: 13,
  },
});
