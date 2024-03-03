// import React from 'react';
// import { View, StyleSheet, Button } from 'react-native';
// import QRCode from 'react-native-qrcode-svg';

// const DriverQR = ({ navigation, route }) => {
//   const { qrData } = route.params;
 

// // Directly access properties of qrData object
// console.log(qrData.name); // Output: hi
// console.log(qrData.contactNumber); // Output: test
// console.log(qrData.address); // Output: me
// console.log(qrData.plateNumber); // Output: again
// console.log(qrData.driverId); 

//   const handleDone = () => {
//     navigation.navigate('Registration'); // Navigate to RegistrationForm screen
//   };

//   return (
//     <View style={styles.container}>
//         <View style={styles.qrContainer}>
//           <QRCode value={JSON.stringify(qrData)} size={250}/>
//         </View>
//         <View style={styles.button}>
//         <Button title="Done" onPress={handleDone}/>
//         </View>
//     </View>
//   );
// };



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   qrContainer: {
//     marginBottom: 20,
//     height:100
//   },
//   button:{
//     marginTop:200
//   }
// });

// export default DriverQR;



//galing sa kabilang file


import React from 'react';
import { View, StyleSheet, Button, Text, BackHandler, Image, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useFocusEffect } from '@react-navigation/native'; 

const DriverQR = ({ navigation, route }) => {
  const { qrData } = route.params;


    // useFocusEffect get called each time when screen comes in focus
    useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          // Disable back button functionality
          return true;
        };
  
        // Add Event Listener for hardwareBackPress
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
  
        return () => {
          // Once the Screen gets blur Remove Event Listener
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        };
      }, []),
    );
 

// Directly access properties of qrData object
console.log(qrData.name); // Output: hi
console.log(qrData.contactNumber); // Output: test
console.log(qrData.address); // Output: me
console.log(qrData.plateNumber); // Output: again
console.log(qrData.driverId); 

  const handleDone = () => {
    navigation.navigate('Registration'); // Navigate to RegistrationForm screen
  };

  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo}/>

    <View style={styles.seccontainer}>

       <Text style={styles.label}>YOU ARE NOW REGISTERED AS DRIVER:</Text>
        <View style={styles.qrContainer}>
          <QRCode value={JSON.stringify(qrData)} size={280}/>
        </View>
       
        {/* <Button title="Done" onPress={handleDone}/> */}
        <TouchableOpacity onPress={handleDone} style={styles.button}>
          <Text style={styles.buttonText}>Done</Text>
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
    backgroundColor:'white'
  },

  seccontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffd702',
    height:500,
    padding:10,
    paddingLeft:30,
    paddingRight:30,
    borderRadius:10,
    
    
  },
  qrContainer: {
    marginBottom: 20,
    height:100
  },
  button:{
  backgroundColor:'white',
  height:50,
  width:100,
  marginTop:190,
  marginBottom:50,
  textAlign:'center',
  borderRadius:10,
  justifyContent: 'center', // Center content horizontally
  alignItems: 'center', // Center content vertically
   
  },

  buttonText: {
    textAlign:'center',
 
    fontSize:20,
  },
  label: {
    fontSize:25,

    fontWeight:'bold',
    textAlign:'center',
    marginBottom:50,
    marginTop:50
  },

  logo: {
    width: 210, // Adjust width as needed
    height: 210, // Adjust height as needed
    marginBottom: 20,
    marginTop: -80,
    
  },
});

export default DriverQR;
