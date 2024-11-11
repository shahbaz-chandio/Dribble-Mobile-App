import React, { useState } from 'react';
import { View, Button, Text, PermissionsAndroid, Platform } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const VoiceMessage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedFile, setRecordedFile] = useState('');
  const audioRecorderPlayer = new AudioRecorderPlayer();

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Audio Recording Permission',
          message: 'App needs access to your microphone to record voice messages.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true; 
  };

  const startRecording = async () => {
    const isPermitted = await requestPermission();
    if (!isPermitted) {
      console.log('Permission denied');
      return;
    }
    
    const path = Platform.select({
      ios: 'audio.m4a',
      android: `${AudioRecorderPlayer.FolderPath}/audio.mp4`,
    });
    
    const result = await audioRecorderPlayer.startRecorder(path);
    setRecordedFile(result);
    setIsRecording(true);
    console.log(`Recording started: ${result}`);
  };

  const stopRecording = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    setIsRecording(false);
    console.log(`Recording stopped: ${result}`);
  };

  const playRecording = async () => {
    await audioRecorderPlayer.startPlayer(recordedFile);
    console.log(`Playing: ${recordedFile}`);
  };

  return (
    <View>
      <Button
        title={isRecording ? "Stop Recording" : "Start Recording"}
        onPress={isRecording ? stopRecording : startRecording}
      />
      {recordedFile ? (
        <View>
          <Text>Recorded File: {recordedFile}</Text>
          <Button title="Play Recording" onPress={playRecording} />
        </View>
      ) : null}
    </View>
  );
};

export default VoiceMessage;
