import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native'; 

const ProfileBc = () => {
  const navigation = useNavigation();

  // Data for the options list
  const settings = [
    { id: '1', label: 'Notifications', icon: 'notifications-outline', value: '2', Notifications: 'NotificationScreen' },
    { id: '2', label: 'Payment', icon: 'card-outline', value: 'MasterCard',Payment:'MasterCardPayment' },
    { id: '3', label: 'FAQ', icon: 'help-circle-outline',FAQs:'FaqScreen' },
    { id: '4', label: 'My Pets', icon: 'paw-outline',MyPets:' MyPetScreen' },
    { id: '5', label: 'Invite Friends', icon: 'share-outline',InviteFriends:'InviteScreen' },
    { id: '6', label: 'Change Password', icon: 'lock-closed-outline',ChangePassword:'ChangePasswordScreen' },
  ];
  
 
  const renderSettingItem = ({ item }) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={() => {
        if (item.Notifications) {
          navigation.navigate('Notifications'); 
        }
        if (item.Payment) {
          navigation.navigate('Payment'); 
        }

        if (item.FAQs) {
          navigation.navigate('FAQs'); 
        }

        if (item.MyPets) {
          navigation.navigate('MyPets'); 
        }

        if (item.InviteFriends) {
          navigation.navigate('InviteFriends'); 
        }

        if (item.ChangePassword) {
          navigation.navigate('ChangePassword'); 
        }
      }}
      
    >
      <View style={styles.settingIconText}>
        <Ionicons name={item.icon} size={24} color="orange" />
        <Text style={styles.settingLabel}>{item.label}</Text>
      </View>
      {item.value && <Text style={styles.settingValue}>{item.value}</Text>}
      <Ionicons name="chevron-forward-outline" size={20} color="gray" />
    </TouchableOpacity>
  );
  
  

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome6 name="arrow-right-from-bracket" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit</Text>
      </View>

      <View style={styles.profileSection}>
        <Image source={require('../../assets/images/drcard.jpeg')} style={styles.profileImage} />
        <Text style={styles.profileName}>Nataly Fox</Text>
        <Text style={styles.profileEmail}>nataly.fox@gmail.com</Text>
        <Text style={styles.profilePhone}>
          <Ionicons name="call-outline" size={16} color="orange" /> (403) 253-8411
        </Text>
      </View>

   
      <FlatList
        data={settings}
        keyExtractor={(item) => item.id}
        renderItem={renderSettingItem}
        style={styles.settingsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f6f6' },
  header: {
    backgroundColor: '#f26101',
    paddingTop: 70,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  profileSection: { alignItems: 'center', paddingVertical: 10, backgroundColor: 'white' },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginTop: -50 },
  profileName: { fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  profileEmail: { color: 'gray', marginTop: 5 },
  profilePhone: { color: 'gray', marginTop: 5 },
  settingsList: { backgroundColor: 'white', paddingHorizontal: 20, paddingTop: 10 },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  settingIconText: { flexDirection: 'row', alignItems: 'center' },
  settingLabel: { marginLeft: 10, fontSize: 16, fontWeight: '500' },
  settingValue: { fontSize: 16, fontWeight: '500', color: 'orange' },
});

export default ProfileBc;
