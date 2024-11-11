import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors'; 
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabContainer}>
              <FontAwesome5 name="paw" size={30} color={focused ? "orange" : "gray"} />
              {focused && <Text style={styles.tabLabel}>Home</Text>}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabContainer}>
            <FontAwesome name="wechat" size={24}  color={focused ? "orange" : "gray"} />
              {focused && <Text style={styles.tabLabel}>Chats</Text>}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Appointment"
        options={{
          tabBarLabel: '', 
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabContainer}>
              <FontAwesome name="stethoscope" size={24} color={focused ? "orange" : "gray"} />
              {focused && <Text style={styles.tabLabel}>Appointments</Text>}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: '', 
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabContainer}>
              <MaterialCommunityIcons name="dog" size={30} color={focused ? "orange" : "gray"} />
              {focused && <Text style={styles.tabLabel}>Profile</Text>}
            </View>
          ),
        }}
      />



      
<Tabs.Screen
        name="darkomode"
        options={{
          tabBarLabel: '', 
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabContainer}>
              <MaterialCommunityIcons name="dog" size={30} color={focused ? "orange" : "gray"} />
              {focused && <Text style={styles.tabLabel}>DarkMode</Text>}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: 'black',
    marginTop: 4,
  },
});
