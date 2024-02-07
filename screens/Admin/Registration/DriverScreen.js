// import React from 'react';
// import { View, Text, StyleSheet, BackHandler } from 'react-native';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';

// const DriverScreen = () => {
//     useFocusEffect(
//         React.useCallback(() => {
//           const onBackPress = () => {
//             navigation.navigate('Registration');
//             // Return true to stop default back navigaton
//             // Return false to keep default back navigaton
//             return true;
//           };
    
//           // Add Event Listener for hardwareBackPress
//           BackHandler.addEventListener(
//             'hardwareBackPress',
//             onBackPress
//           );
    
//           return () => {
//             // Once the Screen gets blur Remove Event Listener
//             BackHandler.removeEventListener(
//               'hardwareBackPress',
//               onBackPress
//             );
//           };
//         }, []),
//       );
// const navigation = useNavigation();

// //      const goToPassenger = () => {
// //      navigation.navigate('Passenger');
// //    };

//   return (
//     <View style={styles.container}>
//       <Text>Driver hahah</Text>
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default DriverScreen;



//eto naman naoopen qr code sa next screen

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const RegistrationForm = () => {
//   const [name, setName] = useState('');
//   const [contactNumber, setContactNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [licensePlate, setLicensePlate] = useState('');
//   const navigation = useNavigation();

//   const isFormEmpty = !name.trim() || !contactNumber.trim() || !address.trim() || !licensePlate.trim();

//   const generateQRCode = () => {
//     const data = {
//       name,
//       contactNumber,
//       address,
//       licensePlate,
//     };
//     navigation.navigate('DriverQR', { qrData: data });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Name:</Text>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChangeText={setName}
//         placeholder="Enter your name"
//       />
//       <Text style={styles.label}>Contact Number:</Text>
//       <TextInput
//         style={styles.input}
//         value={contactNumber}
//         onChangeText={setContactNumber}
//         placeholder="Enter your contact number"
//       />
//       <Text style={styles.label}>Address:</Text>
//       <TextInput
//         style={styles.input}
//         value={address}
//         onChangeText={setAddress}
//         placeholder="Enter your address"
//       />
//       <Text style={styles.label}>License Plate:</Text>
//       <TextInput
//         style={styles.input}
//         value={licensePlate}
//         onChangeText={setLicensePlate}
//         placeholder="Enter your license plate"
//       />
//       <Button title="Register!" onPress={generateQRCode} disabled={isFormEmpty} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default RegistrationForm;


import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../../config'; // Import your Firebase config

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const navigation = useNavigation();

  const isFormEmpty = !name.trim() || !contactNumber.trim() || !address.trim() || !licensePlate.trim();

  const generateQRCode = async () => {
    if (!isFormEmpty) {
      const data = {
        name,
        contactNumber,
        address,
        licensePlate,
      };

      try {
        // Get a reference to the Drivers collection
        const driversCollectionRef = firebase.firestore().collection('Drivers');

        // Check if the Drivers collection exists
        const doc = await driversCollectionRef.doc('check').get();

        if (!doc.exists) {
          // If the collection doesn't exist, create it
          await driversCollectionRef.doc('check').set({}); // Dummy document creation
        }

        // Now, add the data to the Drivers collection
        await driversCollectionRef.add({
          ...data,
          qrCode: 'your-generated-qr-code', // You need to generate the QR code
        });

        navigation.navigate('DriverQR', { qrData: data });
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Contact Number:</Text>
      <TextInput
        style={styles.input}
        value={contactNumber}
        onChangeText={setContactNumber}
        placeholder="Enter your contact number"
      />
      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
      />
      <Text style={styles.label}>License Plate:</Text>
      <TextInput
        style={styles.input}
        value={licensePlate}
        onChangeText={setLicensePlate}
        placeholder="Enter your license plate"
      />
      <Button title="Register!" onPress={generateQRCode} disabled={isFormEmpty} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default RegistrationForm;
