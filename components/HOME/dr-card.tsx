import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; // For icons
import { Ionicons } from '@expo/vector-icons';
import MyClinicsHeader from './mysearch';
import { useNavigation } from 'expo-router';

const DoctorCard = () => {

  const navigation =useNavigation()
  return (
    <View style={styles.cardContainer}>
   <TouchableOpacity style={styles.cardContainer2}  onPress={()=>navigation.navigate('Cat')}>

    
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/drcard.jpeg')} // Replace with your doctor image
            style={styles.doctorImage}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.doctorName}>Dr. Carly Garcia, DVM</Text>
          <Text style={styles.clinicName}>Bensonhurst Veterinary Clinic</Text>

        
          <View style={styles.dateTimeContainer}>
            <View style={styles.imageContainer1}>
              <Image
                source={require('../../assets/images/cat.jpg')}
                style={styles.doctorImage1}
              />
            </View>

            <View style={styles.dateContainer}>
              <FontAwesome5 name="calendar-alt" size={14} color="#F57C00" />
              <Text style={styles.dateText}> 28 Jan</Text>
            </View>
            <View style={styles.timeContainer}>
              <MaterialIcons name="access-time" size={14} color="#F57C00" />
              <Text style={styles.timeText}> 12:30 - 13:00</Text>
            </View>
          </View>
        </View>

   
        <View style={styles.upcomingBadge}>
          <Text style={styles.upcomingText}>Upcoming</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#DCDCDC',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: -180,
    width: '100%',
    position: 'relative',
  },

  cardContainer2: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 25,
    width: '88%',
    paddingVertical: 30,
    margin: 'auto',
  },

  imageContainer: {
    marginRight: 10,
  },
  imageContainer1: {
    marginRight: 10,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 15,
    marginTop: -25,
  },
  doctorImage1: {
    width: 35,
    height: 35,
    borderRadius: 25,
    marginLeft: -52,
    marginTop: -6,
  },
  infoContainer: {
    // flex: 1,
  },
  doctorName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  clinicName: {
    fontSize: 12,
    color: '#888',
    marginVertical: 5,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  dateText: {
    fontSize: 12,
    color: '#333',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    color: '#333',
  },
  upcomingBadge: {
    backgroundColor: '#FF6600',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    transform: [{ rotate: '90deg' }],
  },
  upcomingText: {
    color: '#fff',
    fontSize: 12,
  },
});
