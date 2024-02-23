import React from 'react';
import { View, Text, StyleSheet, BackHandler, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const PassengerScreenRegistered = () => {

     // useFocusEffect get called each time when screen comes in focus
     useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          navigation.navigate('Admin');
          // Return true to stop default back navigaton
          // Return false to keep default back navigaton
          return true;
        };
  
        // Add Event Listener for hardwareBackPress
        BackHandler.addEventListener(
          'hardwareBackPress',
          onBackPress
        );
  
        return () => {
          // Once the Screen gets blur Remove Event Listener
          BackHandler.removeEventListener(
            'hardwareBackPress',
            onBackPress
          );
        };
      }, []),
    );

const navigation = useNavigation();

     const goToAdmin = () => {
     navigation.navigate('Admin');
   };

  return (
    <View style={styles.container}>

<Image source={require('../../../assets/logoo.png')} style={styles.logo}/>
     <Text style={styles.header}>PASSENGER REGISTERED!</Text>
      

      <TouchableOpacity style={styles.button} onPress={goToAdmin}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


  button: {
    // flex: 1,
    backgroundColor: '#ffd702',
    padding: 10,
    borderRadius: 50,
    marginRight: 8,
    borderWidth: 1,
    height: 50,
    width:100,
    alignItems: 'center',
    justifyContent: 'center',
   
    
    
    
  },

  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: -50,
  },

  logo: {
    width: 210, // Adjust width as needed
    height: 210, // Adjust height as needed
    marginBottom: 200,
    marginTop: -300,
    
  },
});

export default PassengerScreenRegistered;