import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InviteScreen = () => {

  const onShare = async () => {
    try {
      // Fetch data from API
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();

      // Extract or format the message to share from the API response
      const messageToShare = data.products
        .slice(0, 3) // Just an example, taking the first 3 products
        .map((product) => `${product.title}: $${product.price}`)
        .join('\n');

   
      const result = await Share.share({
        message: messageToShare,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
  
        } else {
   
        }
      } else if (result.action === Share.dismissedAction) {
   
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share your invitation</Text>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionLeft}>
          <Ionicons name="logo-facebook" size={30} color="#3b5998" />
          <Text style={styles.optionText}>Invite Facebook Friends</Text>
        </View>
        <TouchableOpacity style={styles.shareButton} onPress={onShare}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionLeft}>
          <Ionicons name="logo-whatsapp" size={30} color="#25D366" />
          <Text style={styles.optionText}>Share on WhatsApp</Text>
        </View>
        <TouchableOpacity style={styles.shareButton} onPress={onShare}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
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
          <TouchableOpacity style={styles.copyButton}>
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
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadText}>Download</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.option}>
        <View style={styles.optionLeft}>
          <Ionicons name="print-outline" size={30} color="red" />
          <Text style={styles.optionText}>Print Flyer</Text>
        </View>
        <TouchableOpacity style={styles.printButton}>
          <Text style={styles.printText}>Print</Text>
        </TouchableOpacity>
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
  shareButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  shareText: {
    color: '#fff',
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
  printButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  printText: {
    color: '#fff',
  },
});

export default InviteScreen;
