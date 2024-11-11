import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import VoiceMessage from './message';
export default function Voice() {

    const navigation = useNavigation();
  return (
    <View style={styles.container}>
  
      <View style={styles.header}>
        <TouchableOpacity  onPress={() => navigation.goBack('Chatbackground')}  style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Dr. Carly Garcia, DVM</Text>
          <Image
        source={require('../../assets/images/drcard.jpeg')}  
            style={styles.profilePic}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        
        <Text style={styles.consultationStart}>Consultation start, Today 3:54 PM</Text>

     
        <View style={styles.voiceMessageContainer}>
         
          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.voiceMessageText}>11:26</Text>
        </View>
        <Text style={styles.voiceMessageNote}>Raise to listen Play All (5)</Text>

        <View style={styles.incomingMessage}>
          <Text style={styles.messageText}>
            Wow! That ice dispenser's so big, the ice crushes you! Yakov Smirnov said it!
          </Text>
        </View>

      
        <View style={styles.outgoingMessage}>
          <Text style={styles.messageText}>
            Oh my God! It's out of ice! Like some outer space Motel 6!
          </Text>
        </View>

    
        <View style={styles.incomingMessage}>
          <Text style={styles.messageText}>
            Wow! That ice dispenser's so big, the ice crushes you! Yakov Smirnov said it!
          </Text>
          <Text style={styles.deliveredText}>Delivered</Text>
        </View>


        <Text style={styles.consultationEndTime}>Time end for chat, Today 4:38 PM</Text>

  
        <TouchableOpacity style={styles.feedbackButton}>
          <Text style={styles.buttonText}>Leave your feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notesButton}>
          <Text style={styles.buttonText}>Medical Notes</Text>
        </TouchableOpacity>
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
    backgroundColor: '#f26101',
    paddingVertical: 40,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    paddingRight: 10,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:40
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  consultationStart: {
    fontSize: 12,
    color: '#666',
    marginVertical: 10,
    textAlign: 'center',
  },
  voiceMessageContainer: {
    backgroundColor: '#f26101',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
  },
  voiceMessageText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  voiceMessageNote: {
    color: '#999',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 15,
    textAlign: 'center',
  },
  incomingMessage: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    alignSelf: 'flex-start',
  },
  outgoingMessage: {
    backgroundColor: '#f26101',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 14,
    color: '#000',
  },
  deliveredText: {
    color: '#999',
    fontSize: 10,
    marginTop: 5,
    textAlign: 'right',
  },
  consultationEndTime: {
    fontSize: 12,
    color: '#666',
    marginVertical: 10,
    textAlign: 'center',
  },
  feedbackButton: {
    backgroundColor: '#f26101',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  notesButton: {
    backgroundColor: '#f26101',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
