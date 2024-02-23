import React from 'react';
import { View, Text, StyleSheet, Button, Image, BackHandler, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {

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

//     const goToToda = () => {
//     navigation.navigate('TODA Drivers');
//    };
    const goToPassenger = () => {
      navigation.navigate('PassengerScreen');
    };
    const goToDriver = () => {
      navigation.navigate('Driver');
    };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>

      <Text style={styles.title}>REGISTRATION</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToDriver}>
          {/* <Text style={styles.buttonText}>Drivers</Text> */}
          <Image source={require('../../assets/tricycle.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Drivers</Text>

        </TouchableOpacity> 
      </View>
    
      {/* <Text style={styles.or}>Or</Text> */}
      

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToPassenger}>
          {/* <Text style={styles.buttonText}>Passengers</Text> */}
          <Image source={require('../../assets/user.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Passengers</Text>

        </TouchableOpacity>


       
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 20,
  },

  logo: {
    width: 160,
    height: 160,
    marginBottom: 120,
    marginTop:-140,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom:40,
  },
  or: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },

  buttonContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // width: '100%',
   
  },

  button: {
    // flex: 1,
    backgroundColor: '#ffd702',
    padding: 10,
    borderRadius: 50,
    marginRight: 8,
    marginBottom:20,
    borderWidth: 0,
    height: 140,
    width:190,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  buttonImage: {
    width:40,
    height:40
  }
});

export default RegistrationScreen;