import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Drappoint = () => {
  const [selectedTab, setSelectedTab] = useState('Open');

  const appointments = {
    Open: [
      {
        id: '1',
        doctorName: 'Dr. Carly Garcia, DVM',
        clinic: 'Bensonhurst Veterinary Care',
        date: '28 Jan',
        time: '12:30-13:00',
        doctorImage: require('../../assets/images/drcard.jpeg')
      },
      {
        id: '2',
        doctorName: 'Dr. Laura Hill, DVM',
        clinic: 'Animal Hospital',
        date: '30 Jan',
        time: '12:30-13:00',
        doctorImage: require('../../assets/images/drcard.jpeg')
      },
    ],
    Closed: [
      {
        id: '3',
        doctorName: 'Dr. John Doe, DVM',
        clinic: 'Pet Health Clinic',
        date: '22 Jan',
        time: '10:00-10:30',
        doctorImage: require('../../assets/images/doctor.png')
      },
      {
        id: '4',
        doctorName: 'Dr. Emily Smith, DVM',
        clinic: 'Wellness Veterinary',
        date: '25 Jan',
        time: '14:00-14:30',
        doctorImage: require('../../assets/images/doctor.png')
      },
    ],
    Canceled: [
      {
        id: '5',
        doctorName: 'Dr. Michael Brown, DVM',
        clinic: 'Animal Care Center',
        date: '20 Jan',
        time: '09:00-09:30',
        doctorImage: require('../../assets/images/dc.png')
      },
    ],
  };

  const renderAppointmentCard = ({ item }) => (
    <TouchableOpacity onPress={() => alert('Card clicked!')}>
      <View style={styles.card}>
        <Image source={item.doctorImage} style={styles.doctorImage} />
        <View style={styles.cardInfo}>
          <Text style={styles.doctorName}>{item.doctorName}</Text>
          <Text style={styles.clinicName}>{item.clinic}</Text>
          <View style={styles.appointmentDetails}>
            <View style={styles.appointmentRow}>
              <Ionicons name="calendar-outline" size={20} color="orange" />
              <Text style={styles.appointmentText}>{item.date}</Text>
            </View>
            <View style={styles.appointmentRow}>
              <Ionicons name="time-outline" size={20} color="orange" />
              <Text style={styles.appointmentText}>{item.time}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Appointments</Text>

      <View style={styles.tabsContainer}>
        {['Open', 'Closed', 'Canceled'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={appointments[selectedTab]}
        keyExtractor={(item) => item.id}
        renderItem={renderAppointmentCard}
        contentContainerStyle={styles.appointmentList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#f26101',
    textAlign: 'center',
    paddingVertical: 50,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: -15,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#f26101',
  },
  tabText: {
    color: 'gray',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: 'white',
  },
  appointmentList: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  cardInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  clinicName: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 10,
  },
  appointmentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appointmentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appointmentText: {
    marginLeft: 5,
    color: 'gray',
    fontSize: 14,
  },
});

export default Drappoint;
