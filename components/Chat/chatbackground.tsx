import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have @expo/vector-icons installed
import { useNavigation } from 'expo-router';

const Chatbackground = () => {
  const navigation = useNavigation();
  const theme = useColorScheme();

  // Theme-based colors
  const isDarkMode = theme === 'dark';
  const colors = {
    background: isDarkMode ? '#333' : '#f26101',
    text: isDarkMode ? '#FFF' : '#000',
    subtitle: isDarkMode ? '#AAA' : 'gray',
    profileBackground: isDarkMode ? '#444' : 'white',
    iconColor: isDarkMode ? '#BBB' : 'gray',
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Top Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <TouchableOpacity onPress={() => navigation.navigate('Voicee')}>
        <View style={[styles.profileSection, { backgroundColor: colors.profileBackground }]}>
          <Image
            source={require('../../assets/images/drcard.jpeg')} 
            style={styles.profileImage}
          />
          <Text style={[styles.name, { color: colors.text }]}>Dr. Carly Garcia, DVM</Text>
          <Text style={[styles.subtitle, { color: colors.subtitle }]}>Bensonhurst Veterinary Care</Text>

          <View style={styles.appointmentDetails}>
            <View style={styles.appointmentRow}>
              <Ionicons name="calendar-outline" size={24} color={colors.iconColor} />
              <Text style={[styles.appointmentText, { color: colors.subtitle }]}>28 Jan</Text>
            </View>
            <View style={styles.appointmentRow}>
              <Ionicons name="time-outline" size={24} color={colors.iconColor} />
              <Text style={[styles.appointmentText, { color: colors.subtitle }]}>12:30-13:00</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 20,
  },
  backButton: {
    padding: 8,
  },
  editButton: {
    padding: 8,
  },
  editText: {
    color: 'white',
    fontSize: 16,
  },
  profileSection: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 40,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -80,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: 20,
  },
  appointmentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  appointmentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appointmentText: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default Chatbackground;
