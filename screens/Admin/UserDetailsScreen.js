import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, BackHandler, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import firebase from 'firebase/compat';

const UserDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { name, contactNumber, address, username } = route.params;
  const [registrationDate, setRegistrationDate] = useState(null);

  // may delay dito
  useEffect(() => {
    const fetchRegistrationDate = async () => {
      try {
        const userRef = firebase.firestore().collection('Users').where('username', '==', username);
        const snapshot = await userRef.get();
        if (!snapshot.empty) {
          // Assuming there's only one matching document for the username
          snapshot.forEach((doc) => {
            const data = doc.data();
            if (data.registrationTime) {
              setRegistrationDate(data.registrationTime.toDate());
            }
          });
        }
      } catch (error) {
        console.error('Error fetching registration date:', error);
      }
    };

    fetchRegistrationDate();
  }, [username]);

  // useEffect(() => {
  //   const fetchRegistrationDate = async () => {
  //     try {
  //       const userRef = firebase.firestore().collection('Users')
  //         .where('username', '==', username)
  //         .orderBy('registrationTime', 'desc') // Assuming registrationTime field is used
  //         .limit(1); // Limiting to 1 document assuming you want the latest registration
  //       const snapshot = await userRef.get();
  //       if (!snapshot.empty) {
  //         snapshot.forEach((doc) => {
  //           const data = doc.data();
  //           if (data.registrationTime) {
  //             setRegistrationDate(data.registrationTime.toDate());
  //           }
  //         });
  //       }
  //     } catch (error) {
  //       console.error('Error fetching registration date:', error);
  //     }
  //   };
  
  //   fetchRegistrationDate();
  // }, [username]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('User');
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [navigation]),
  );

  return (
    <View style={styles.Container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      <View style={styles.container}>
        {/* <Image source={require('../../assets/logo.png')} style={styles.logo}/> */}
        <Image
        source={require('../../assets/admin.png')} // Change the path accordingly
        style={styles.adminlogo}
      />
        <Text style={styles.name}> {name}</Text>
        <Text style={styles.text}>( {username} )</Text>
        <Text style={styles.text}>  {contactNumber}</Text>
        <Text style={styles.address}> {address}</Text>
        
        {registrationDate && (
          <Text style={styles.date}>
            {registrationDate.toDateString()} {/* Customize date format as needed */}
          </Text>
          
        )}
        <Text style={styles.date}> (Registration Date)</Text>

        <TouchableOpacity style={styles.history} >
          <Text style={styles.buttonHistory}>History</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  Container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white"

  },
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#F9D1F5",
    height: 500,
    borderRadius: 25,
    marginTop: 10,
    padding: 10,
    width:300
    
  },


  text: {
    fontSize: 20,
    marginBottom: 10,
  },

  name: {
    fontSize:25,
    fontWeight:'bold'
  },

  date: {
    fontSize:15,
    
  },  
  logo: {
    width: 210, // Adjust width as needed
    height: 210, // Adjust height as needed
    marginBottom: 10,
    marginTop: -80,
  },
  adminlogo: {
    width: 120, // Adjust width as needed
    height: 120, // Adjust height as needed
    marginBottom: 20,
    marginTop: -40,
  },

  history:{
    marginTop:20,
    backgroundColor:'#F671E9',
    borderRadius:25,
    height:40,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    borderColor: 'black',
    borderWidth: 1

  },

  address: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center'
  }
});

export default UserDetailsScreen;
