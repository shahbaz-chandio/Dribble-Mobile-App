import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Expo Icons library
import BusinessCard from './bussinescard';
const Myvets = () => {
  
  const handleMyClinicsClick = () => {
    Alert.alert('My Clinics Clicked');
  };

  
  const handleSearchClick = () => {
    Alert.alert('Search Clicked');
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={handleMyClinicsClick}>
        <Text style={styles.leftText}>My Vets</Text>
      </TouchableOpacity>

    
      <TouchableOpacity style={styles.searchContainer} onPress={handleSearchClick}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          editable={false} 
        />
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#DCDCDC',
   
    position:'relative',

  
  },
  leftText: {
    fontSize: 18,
    // fontWeight: 'bold',
    marginLeft:20,
    color:'gray'
  
  },
  searchContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    borderColor: 'gray',
    borderRadius: 10,
    marginRight:-25
   
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    width: 100,
    fontSize: 16,
    color: 'gray', 
  },
});

export default Myvets;
