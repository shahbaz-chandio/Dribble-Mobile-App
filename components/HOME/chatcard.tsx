import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const ChatCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: 'row' }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {/* First Card */}
          <TouchableOpacity style={styles.cardContainer2} onPress={() => alert('Card Pressed!')}>

            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/drcard.jpeg')}
                style={styles.doctorImage}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.doctorName}>Dr. Carly Garcia ...</Text>
              <Text style={styles.clinicName}>Animal Hospital</Text>
              <View style={styles.availabilityContainer}>
                <Text style={styles.availableText}>Available to chat</Text>
              </View>
            </View>
            <View style={styles.starContainer}>
              <Ionicons name="star" size={24} color="orange" />
            </View>
          </TouchableOpacity>

          {/* Repeat the card layout for other doctors */}
          <TouchableOpacity style={styles.cardContainer2} onPress={() => alert('Card Pressed!')}>

            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/drcard.jpeg')}
                style={styles.doctorImage}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.doctorName}>Dr. Carly Garcia ...</Text>
              <Text style={styles.clinicName}>Animal Hospital</Text>
              <View style={styles.availabilityContainer}>
                <Text style={styles.availableText}>Available to chat</Text>
              </View>
            </View>
            <View style={styles.starContainer}>
              <Ionicons name="star" size={24} color="orange" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardContainer2} onPress={() => alert('Card Pressed!')}>

            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/drcard.jpeg')}
                style={styles.doctorImage}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.doctorName}>Dr. Carly Garcia ...</Text>
              <Text style={styles.clinicName}>Animal Hospital</Text>
              <View style={styles.availabilityContainer}>
                <Text style={styles.availableText}>Available to chat</Text>
              </View>
            </View>
            <View style={styles.starContainer}>
              <Ionicons name="star" size={24} color="orange" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardContainer2} onPress={() => alert('Card Pressed!')}>

            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/drcard.jpeg')}
                style={styles.doctorImage}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.doctorName}>Dr. Carly Garcia ...</Text>
              <Text style={styles.clinicName}>Animal Hospital</Text>
              <View style={styles.availabilityContainer}>
                <Text style={styles.availableText}>Available to chat</Text>
              </View>
            </View>
            <View style={styles.starContainer}>
              <Ionicons name="star" size={24} color="orange" />
            </View>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  cardContainer: {
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 10,
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
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginHorizontal: 10, 
  },
  imageContainer: {
    marginLeft: 20,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 20,
  },
  doctorName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
  },
  clinicName: {
    fontSize: 12,
    color: '#888',
    marginVertical: 5,
  },
  availabilityContainer: {
    marginTop: 5,
  },
  availableText: {
    fontSize: 12,
    color: 'green',
  },
  starContainer: {
    paddingRight: 10,
  },
});
