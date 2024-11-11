import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const  MyPetScreen = ({ navigation }) => {
  const sections = [
    { id: '1', label: 'Pet Profile', icon: 'paw-outline' },
    { id: '2', label: 'Health Records', icon: 'medkit-outline' },
    { id: '3', label: 'Dietary Preferences', icon: 'nutrition-outline' },
    { id: '4', label: 'Activities', icon: 'walk-outline' },
    { id: '5', label: 'Reminders', icon: 'alarm-outline' },
    { id: '6', label: 'Gallery', icon: 'images-outline' },
  ];

  const renderSectionItem = ({ label, icon }) => (
    <TouchableOpacity style={styles.sectionItem} key={label} onPress={() => navigation.navigate(label)}>
      <Ionicons name={icon} size={28} color="orange" style={styles.icon} />
      <Text style={styles.sectionLabel}>{label}</Text>
      <Ionicons name="chevron-forward-outline" size={20} color="gray" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>


      <View style={styles.petImageContainer}>
        <Image source={require('../../assets/images/dog22.jpeg')} style={styles.petImage} />
      </View>

      {sections.map(renderSectionItem)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f6f6',marginTop:15 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', padding: 20 },
  petImageContainer: { alignItems: 'center', marginBottom: 20 },
  petImage: { width: 120, height: 120, borderRadius: 60 },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: { marginRight: 10 },
  sectionLabel: { fontSize: 18, fontWeight: '500' },
});

export default MyPetScreen;
