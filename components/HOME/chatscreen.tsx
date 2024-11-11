import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from 'expo-router';

export default function Appp() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack('DoctorCard')} 
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chats</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Open Consultations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Open consultations</Text>
          <TouchableOpacity onPress={() => alert('Open consultation with Dr. Carly Garcia')}>
            <View style={styles.consultationCard}>
              {/* Doctor Profile and Pet Image */}
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../assets/images/drcard.jpeg')} 
                  style={styles.profilePic}
                />
                <Image
                  source={require('../../assets/images/dog4.png')} 
                  style={styles.petPic}
                />
              </View>
              <View style={styles.consultationDetails}>
                <Text style={styles.doctorName}>Dr. Carly Garcia, DVM</Text>
                <Text style={styles.messagePreview}>
                  Conveying or northward offending admitting perfectly...
                </Text>
                <Text style={styles.time}>9:40 AM</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Closed Consultations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Closed consultations</Text>

          {/* First Card */}
          <TouchableOpacity onPress={() => alert('Closed consultation with Dr. Laura Hill')}>
            <View style={styles.consultationCard}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../assets/images/drcard.jpeg')} 
                  style={styles.profilePic}
                />
                <Image
                  source={require('../../assets/images/dog4.png')}
                  style={styles.petPic}
                />
              </View>
              <View style={styles.consultationDetails}>
                <Text style={styles.doctorName}>Dr. Laura Hill, DVM</Text>
                <Text style={styles.messagePreview}>
                  Wonder twenty hunted and put income set desire expect...
                </Text>
                <Text style={styles.time}>8:25 PM</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Second Card */}
          <TouchableOpacity onPress={() => alert('Closed consultation with Dr. Carly Garcia')}>
            <View style={styles.consultationCard}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../assets/images/drcard.jpeg')} 
                  style={styles.profilePic}
                />
                <Image
                  source={require('../../assets/images/cat.jpg')}
                  style={styles.petPic}
                />
              </View>
              <View style={styles.consultationDetails}>
                <Text style={styles.doctorName}>Dr. Carly Garcia, DVM</Text>
                <Text style={styles.messagePreview}>
                  Performed suspicion in certainty so frankness...
                </Text>
                <Text style={styles.time}>Yesterday</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f26101', 
    paddingVertical: 60,
    paddingHorizontal: 10,
  },
  backButton: {
    paddingRight: 20,
  
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    // flex: 1,  
    textAlign: 'center',
marginLeft:90
  },
  content: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  consultationCard: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 12,
  },
  imageContainer: {
    alignItems: 'center',
    marginRight: 12,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,  
  },
  petPic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginTop: -15,
  },
  consultationDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  messagePreview: {
    color: '#666',
    marginTop: 4,
  },
  time: {
    color: '#999',
    marginTop: 4,
    fontSize: 12,
  },
});
