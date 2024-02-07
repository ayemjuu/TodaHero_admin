import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, BackHandler, TextInput, TouchableOpacity, Image, Alert, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import firebase from 'firebase/compat';

// import { Ionicons } from '@expo/vector-icons';




const PassengerScreen = ({ navigation }) => {
    // const navigation = useNavigation();
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');
    

    const [error, setError] = useState('');
    const [nameError, setNameError] = useState('');
    const [contactNumberError, setContactNumberError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const [isContactNumberRegistered, setIsContactNumberRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const saveUserDataToFirestore = async (name, contactNumber, address, username) => {
      try {
        setIsLoading(true);
        const usersCollection = firebase.firestore().collection('Users');
        
        // Check if the contact number is already registered
        const querySnapshot = await usersCollection.where('contactNumber', '==', contactNumber).get();
        
        if (!querySnapshot.empty) {
          console.log('Contact number already registered');
          setError('Contact number is already registered');
          setIsLoading(false);
          
          return;
        }
    
        // If not registered, proceed with adding the user data
        await usersCollection.add({
          name,
          contactNumber: "+639" + contactNumber,
          // contactNumber,
          address,
          username,
          registrationTime: firebase.firestore.FieldValue.serverTimestamp(),
        });
    
        console.log('User data saved to Firestore');
        navigation.navigate('PassengerScreenRegistered');
       
      } catch (error) {
        console.error('Error saving user data to Firestore:', error);
      } finally {
        setIsLoading(false);
      }
    };
    


    const goToRegistration = () => {
    console.log('Registration for?');
    navigation.navigate('Registration');
   };



    const goToRegistered = async () => {
      
      if (!name || !contactNumber || !address || !username ) {
          if (!name) {
              setNameError('Must be filled');
          }
          if (!contactNumber) {
              setContactNumberError('Must be filled');
          }
          if (!address) {
              setAddressError('Must be filled');
          }
          if (!username) {
              setUsernameError('Must be filled');
          }
          return;
      }


        // Reset the error state
        setNameError('');
        setContactNumberError('');
        setAddressError('');
        setUsernameError('');
        setError('');

       

        // Call the function when navigating to registered screen
   

        // saveUserDataToFirestore(name, contactNumber, address, username);
        // console.log('Registered!');
        // navigation.navigate('PassengerScreenRegistered');

        try {
          // Check if the contact number is already registered
          const usersCollection = firebase.firestore().collection('Users');
          const querySnapshot = await usersCollection.where('contactNumber', '==', contactNumber).get();
      
          if (!querySnapshot.empty) {
            console.log('Contact number already registered');
            setError('Contact number is already registered');
            setIsContactNumberRegistered(true);
            return; // Don't navigate if the contact number is already registered
          }
      
          setIsLoading(true);
          // Call the function when navigating to the registered screen
          await saveUserDataToFirestore(name, contactNumber, address, username);
      
          // Registration success
          console.log('Registered!');
          navigation.navigate('PassengerScreenRegistered');
        } catch (error) {
          // Registration failed, handle the error
          console.error('Error during registration:', error);
          // setError('Registration failed'); // Optionally, set an error message
        } finally {
          setIsLoading(false);
        }
    };
	
     useFocusEffect(
        React.useCallback(() => {
          const onBackPress = () => {
            navigation.navigate('Registration');
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
  



    return (
     
      
        
        <View style={styles.container}>
     
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
      	    <Text style={styles.header}>PASSENGER REGISTRATION:</Text>


            <Text style={styles.title}>Name: {nameError && <Text style={styles.errorText}>{nameError}</Text>}
            
            </Text>
            <TextInput
                style={[styles.input, nameError && styles.errorInput]}
                placeholder="First Name, Last Name"
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(text) => {
                    setName(text);
                    setNameError('');
                }}
            />
            {/* {nameError && <Text style={styles.errorText}>{nameError}</Text>} */}


      

          <Text style={styles.title}>Contact Number: {contactNumberError && <Text style={styles.errorText}>{contactNumberError}</Text>}    
          {isContactNumberRegistered && <Text style={styles.errorText}>Already registered</Text>}
      
          </Text>

            <TextInput
                // style={[styles.input, contactNumberError && styles.errorInput]}
                style={[styles.input, isContactNumberRegistered && styles.errorInput, contactNumberError && styles.errorInput]}
              
                placeholder="+639XX-XXX-XXXX"
                autoCapitalize="none"
                autoCorrect={false}
                value={"+639" + contactNumber}  
                onChangeText={(text) => {
                    setContactNumber(text.replace("+639", ""));
                    setContactNumberError('');
                    setIsContactNumberRegistered(false); // Reset the state when the user edits the contact number
                }}
                keyboardType="phone-pad"
                maxLength={13}
            />
            <View style={styles.errorTextContainer}>
              {/* {isContactNumberRegistered && <Text style={styles.errorText}>Already registered</Text>} */}
              {/* {contactNumberError && <Text style={styles.errorText}>{contactNumberError}</Text>} */}
            </View>
            {/* {isContactNumberRegistered && <Text style={styles.errorContact}>Contact number is already registered</Text>} */}
            {/* {contactNumberError && <Text style={styles.errorText}>{contactNumberError}</Text>} */}





            <Text style={styles.title}>Full Address: {addressError && <Text style={styles.errorText}>{addressError}</Text>}
            
            </Text>
            <TextInput
                style={[styles.input, addressError && styles.errorInput]}
                placeholder="Bulacan"
                autoCapitalize="none"
                autoCorrect={false}
                value={address}
                onChangeText={(text) => {
                    setAddress(text);
                    setAddressError('');
                }}
                
            />
            {/* {addressError && <Text style={styles.errorText}>{addressError}</Text>} */}


            <Text style={styles.title}>Username: {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}
            
            </Text>
            <TextInput
                style={[styles.input, usernameError && styles.errorInput]}
                placeholder="username"
                autoCapitalize="none"
                autoCorrect={false}
                value={username}
                onChangeText={(text) => {
                    setUsername(text);
                    setUsernameError('');
                }}
                
            />
            {/* {usernameError && <Text style={styles.errorText}>{usernameError}</Text>} */}



             
            <View style={styles.buttonContainer}>

              <TouchableOpacity style={styles.buttonLeft} onPress={goToRegistration}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity style={styles.buttonRight} onPress={goToRegistered} disabled={isLoading}>
                
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity> */}

              <TouchableOpacity style={styles.buttonRight} onPress={goToRegistered} disabled={isLoading}>
                {isLoading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Register</Text>
                )}
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
    padding: 40,
    backgroundColor: 'white',
  
    
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -100,
  },

  title: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom:5,
    fontWeight: 'bold',
    // flex: 1, // Take up available space
  },

  pages: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  input: {
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 26,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 50,
  },

  button: {
    // flex: 1,
    backgroundColor: '#A0E9FF',
    padding: 10,
    borderRadius: 50,
    marginRight: 8,
    
    borderWidth: 1,
    height: 50,
    width:100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    
    
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%', // Ensure buttons take full width
    marginTop: 10,
  },

  buttonLeft: {
    backgroundColor: '#A0E9FF',
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    height: 40,
    flex: 1,
    marginRight: 8,
    marginTop:12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRight: {
    backgroundColor: '#A0E9FF',
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    height: 40,
   flex: 1,
    marginLeft: 8,
    marginTop:12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 210, // Adjust width as needed
    height: 210, // Adjust height as needed
    marginBottom: 60,
    marginTop: -50,
    
  },

  

  errorInput: {
    borderColor: 'red', // Set border color to red for error state
},
errorTextContainer: {
  position: 'absolute',
  bottom: 20, // Adjust the bottom value as needed
  right: 0,
  left: 0,
  alignItems: 'center', // Center the error text horizontally
},
  errorText: {
    color: 'red',
    fontWeight: 'normal'
   
   
},





});

export default PassengerScreen;
