import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
 
      
      <View style={styles.notificationCard}>
        <Ionicons name="notifications" size={24} color="black" />
        <View style={styles.messageContent}>
          <Text style={styles.messageTitle}>Appointment Reminder</Text>
          <Text style={styles.messageText}>
            Your appointment with Dr. Ali, the animal doctor, is scheduled for tomorrow at 10 AM.
          </Text>
        </View>
      </View>

      <View style={styles.notificationCard}>
        <Ionicons name="notifications" size={24} color="black" />
        <View style={styles.messageContent}>
          <Text style={styles.messageTitle}>Vaccination Update</Text>
          <Text style={styles.messageText}>
            Dr. Ali recommends a follow-up vaccination for your pet next week.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:40
    // marginBottom: 20,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#e0f7fa',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  messageContent: {
    marginLeft: 10,
  },
  messageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 14,
    color: '#4a4a4a',
    marginTop: 4,
  },
});

export default NotificationScreen;
