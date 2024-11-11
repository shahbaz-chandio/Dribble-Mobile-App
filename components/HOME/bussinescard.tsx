import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const BusinessCard = () => {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContainer}  
      >
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.card} onPress={() => alert('Card 1 clicked!')}>
            <Image
              source={require('../../assets/images/sparrow.png')}
              style={styles.logo}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Bensonhurst</Text>
              <Text style={styles.subtitle}>VETERINARY CARE</Text>
              <Text style={styles.address}>10 Four Seasons Pl, 5th Floor</Text>
              <Text style={styles.address}>Etobicoke</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => alert('Card 2 clicked!')}>
            <Image
              source={require('../../assets/images/sparrow.png')}
              style={styles.logo}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Bensonhurst</Text>
              <Text style={styles.subtitle}>VETERINARY CARE</Text>
              <Text style={styles.address}>10 Four Seasons Pl, 5th Floor</Text>
              <Text style={styles.address}>Etobicoke</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => alert('Card 3 clicked!')}>
            <Image
              source={require('../../assets/images/sparrow.png')}
              style={styles.logo}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Bensonhurst</Text>
              <Text style={styles.subtitle}>VETERINARY CARE</Text>
              <Text style={styles.address}>10 Four Seasons Pl, 5th Floor</Text>
              <Text style={styles.address}>Etobicoke</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => alert('Card 4 clicked!')}>
            <Image
              source={require('../../assets/images/sparrow.png')}
              style={styles.logo}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Bensonhurst</Text>
              <Text style={styles.subtitle}>VETERINARY CARE</Text>
              <Text style={styles.address}>10 Four Seasons Pl, 5th Floor</Text>
              <Text style={styles.address}>Etobicoke</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingLeft: 10, 
    paddingRight: 10, 
  },
  container: {
    backgroundColor: '#DCDCDC',
    marginTop: 165,
    paddingHorizontal: 0, 
  },
  card: {
    flexDirection: 'row', 
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    justifyContent: 'flex-start',
    paddingHorizontal: 7,
    paddingVertical: 10,
    marginVertical: 20,
    marginHorizontal: 10, 
  },
  logo: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1, 
    marginLeft: 15, 
  },
  title: {
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 16,
    letterSpacing: 2,
    marginBottom: 5,
    color: '#333',
    textAlign: 'left',
  },
  address: {
    fontSize: 14,
    color: '#666',
    textAlign: 'left',
  },
});

export default BusinessCard;
