import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PetDetailsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Pet Header Section */}
      <TouchableOpacity  onPress={() => alert('Card 2 clicked!')}>
      <View style={styles.petHeader}>
        <Image
       source={require('../../assets/images/cat.jpg')} 
          style={styles.petImage}
        />
        <View style={styles.petInfo}>
          <Text style={styles.petName}>Chamberlain</Text>
          <Text style={styles.petType}>Cat, Scottish Fold</Text>
        </View>
      </View>
      </TouchableOpacity>


      <View style={styles.concernsSection}>
        <Text style={styles.concernsTitle}>Concerns</Text>
        <Text style={styles.concernsText}>
          Chamberlain appears to have lost his appetite after he played with other dogs at a local dog park. He also began scratching his right ear a lot more.
        </Text>

      
        <View style={styles.imageGallery}>
          <Image
                source={require('../../assets/images/cat.jpg')} 
            style={styles.galleryImage}
          />
          <Image
              source={require('../../assets/images/cat.jpg')}
            style={styles.galleryImage}
          />
        </View>

      
        <TouchableOpacity style={styles.medicalNotesButton}>
          <Ionicons name="document-text-outline" size={24} color="#f26101" />
          <Text style={styles.medicalNotesText}>Medical Notes</Text>
        </TouchableOpacity>
      </View>

     
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  petHeader: {
    flexDirection: 'row',
    backgroundColor: '#f26101',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  petImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  petInfo: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  petName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  petType: {
    color: 'white',
    fontSize: 14,
  },
  concernsSection: {
    paddingHorizontal: 20,
  },
  concernsTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  concernsText: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 20,
  },
  imageGallery: {
    flexDirection: 'row',
  },
  galleryImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  medicalNotesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  medicalNotesText: {
    color: '#f26101',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  chatButton: {
    backgroundColor: '#f26101',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    margin: 20,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PetDetailsScreen;
