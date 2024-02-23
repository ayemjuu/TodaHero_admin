import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert, BackHandler, Image } from 'react-native';
import { firebase } from '../config';
import { useFocusEffect, useNavigation } from '@react-navigation/native';


const PasswordResetScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);


   // useFocusEffect get called each time when screen comes in focus
   useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Login');
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



  const handleResetPassword = async () => {
    if (!email.trim() || !validateEmail(email)) { // Check if email is empty or not valid
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);
      await firebase.auth().sendPasswordResetEmail(email);
      setErrorMessage('Password reset email sent. Check your email.');
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to send password reset email. Check your email address.');
    } finally {
      setLoading(false);
    }
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <View style={styles.container}>
        <Image
        source={require('../assets/logo.png')} // Change the path accordingly
        style={styles.logo}
        />
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      {!!errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleResetPassword} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="black" />
        ) : (
          <Text style={styles.buttonText}>Reset Password</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 50,
  },

  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },

  button: {
 
    backgroundColor: '#ffd702',
    padding: 10,
    borderRadius: 50,
    marginRight: 8,
    borderWidth: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
    
    
  },

  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },

  logo: {
    width: 250, // Adjust width as needed
    height: 250, // Adjust height as needed
     marginBottom: 20,
     marginTop: -280,
  },
});

export default PasswordResetScreen;
