import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, Share, Clipboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as Print from 'expo-print';

const InviteScreen = () => {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React https://www.google.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onCopy = () => {
    Clipboard.setString("https://www.punchbowl.com/parties/5c47b2710");
    Alert.alert("copied");
  };

  const onDownload = async () => {
    const uri = FileSystem.documentDirectory + "cat.jpg";
    try {
      await FileSystem.downloadAsync(
        'https://your-image-url.com/cat.jpg',
        uri
      );
      Alert.alert("Image downloaded!");
    } catch (error) {
      Alert.alert("Error downloading image:", error.message);
    }
  };

  const onPrint = async () => {
    await Print.printAsync({
      html: "<h1>Your Printable Flyer</h1><p>Include your flyer content here.</p>",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share your invitation</Text>

      <TouchableOpacity style={styles.option} onPress={onShare}>
        <View style={styles.optionLeft}>
          <Ionicons name="logo-facebook" size={30} color="#3b5998" />
          <Text style={styles.optionText}>Invite Facebook Friends</Text>
        </View>
        <Text style={styles.shareText}>Share</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={onShare}>
        <View style={styles.optionLeft}>
          <Ionicons name="logo-whatsapp" size={30} color="#25D366" />
          <Text style={styles.optionText}>Share on WhatsApp</Text>
        </View>
        <Text style={styles.shareText}>Share</Text>
      </TouchableOpacity>

      <View style={styles.option}>
        <View style={styles.optionLeft}>
          <Ionicons name="link-outline" size={30} color="#FF9900" />
          <Text style={styles.optionText}>Share Link</Text>
        </View>
        <View style={styles.shareLinkContainer}>
          <TextInput
            style={styles.shareLinkInput}
            value="https://www.punchbowl.com/parties/5c47b2710"
            editable={false}
          />
          <TouchableOpacity style={styles.copyButton} onPress={onCopy}>
            <Text style={styles.copyText}>Copy</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.option}>
        <View style={styles.optionLeft}>
          <Ionicons name="qr-code-outline" size={30} color="black" />
          <Text style={styles.optionText}>Share QR Code</Text>
        </View>
        <Image source={require('../../assets/images/cat.jpg')} style={styles.qrCodeImage} />
        <TouchableOpacity style={styles.downloadButton} onPress={onDownload}>
          <Text style={styles.downloadText}>Download</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.option} onPress={onPrint}>
        <View style={styles.optionLeft}>
          <Ionicons name="print-outline" size={30} color="red" />
          <Text style={styles.optionText}>Print Flyer</Text>
        </View>
        <Text style={styles.printText}>Print</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  shareText: {
    color: '#007BFF',
  },
  shareLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  shareLinkInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
  },
  copyButton: {
    backgroundColor: '#FF9900',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  copyText: {
    color: '#fff',
  },
  qrCodeImage: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  downloadButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  downloadText: {
    color: '#fff',
  },
  printText: {
    color: '#FF0000',
  },
});

export default InviteScreen;
