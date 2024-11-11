import { View, Text, ImageBackground, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Firstimg from '@/components/HOME/firstimg';
import Profilesc from '@/components/Profile/profilesc';
import NotificationScreen from '@/components/Profile/notify';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import MasterCardPayment from '@/components/Profile/payment';
import FaqScreen from '@/components/Profile/Faq';
import MyPets from '@/components/Profile/Mypets';
import MyPetScreen from '@/components/Profile/Mypets';
import InviteScreen from '@/components/Profile/invite';
import ChangePasswordScreen from '@/components/Profile/change';



const Profile = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name='profilesc' component={Profilesc} options={{ headerShown: false }} />
        <Stack.Screen name='Notifications' component={NotificationScreen} options={{ headerShown: true, }} />
        <Stack.Screen name='Payment' component={MasterCardPayment} options={{ headerShown: true, }} />
        <Stack.Screen name='FAQs' component={FaqScreen} options={{ headerShown: true, }} />
        <Stack.Screen name='MyPets' component={MyPetScreen} options={{ headerShown: true, }} />
        <Stack.Screen name='InviteFriends' component={InviteScreen} options={{ headerShown: true, }} />
        <Stack.Screen name='ChangePassword' component={ChangePasswordScreen} options={{ headerShown: true, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Profile;


