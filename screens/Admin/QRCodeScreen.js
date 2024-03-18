// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import QRCode from 'react-native-qrcode-svg';

// const QRCodeScreen = ({ route }) => {
//   const { name, plateNumber, qrCode  } = route.params;

//   // Combine name and plateNumber to generate data for QR code
//   const qrData = `${name}-${plateNumber}`;

//     // Log the QR data to the console
//     console.log("QR Data:", qrData);

//   return (
//     <View style={styles.container}>
//          {/* <Text>QR Code: {qrCode}</Text> */}
//          <Text style={styles.title}>{name}'s QR Code</Text>
//          <Text style={styles.title}>Plate Number {plateNumber}</Text>

//          <QRCode value={qrCode} size={300} />
//       {/* <Text style={styles.title}>QR Code</Text>
//       <QRCode
//         value={qrData}
//         size={200}
//         color="black"
//         backgroundColor="white"
//         logo={require('../../assets/logo.png')} // Add your logo here
//         logoSize={50}
//         logoBackgroundColor="transparent"
//       />
//       <Text style={styles.info}>Scan this QR Code for more details</Text> */}
//        {/* <Text style={styles.info}>Your QR Code</Text>  */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ffd702',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   info: {
//     fontSize: 16,
//     marginTop: 20,
//   },
// });

// export default QRCodeScreen;


// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, Image, BackHandler, TouchableOpacity } from 'react-native';
// import QRCode from 'react-native-qrcode-svg';
// import { useNavigation } from '@react-navigation/native';

// const QRCodeScreen = ({ route }) => {
//   const { name, plateNumber, qrCode } = route.params;
//   const navigation = useNavigation();

//   // Combine name and plateNumber to generate data for QR code
//   const qrData = `${name}-${plateNumber}`;

//   // Log the QR data to the console
//   console.log("QR Data:", qrData);

//   // Handle back button press
//   useEffect(() => {
//     const backAction = () => {
//       navigation.goBack();
//       return true; // Prevent default behavior
//     };

//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       backAction
//     );

//     return () => backHandler.remove();
//   }, [navigation]); // Include navigation in dependencies to ensure effect updates if navigation changes

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{name}'s QR Code</Text>
//       <Text style={styles.title}>Plate Number {plateNumber}</Text>
//       <QRCode value={qrCode} size={300} />
//       <TouchableOpacity><Text>Download Me</Text></TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ffd702',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });

// export default QRCodeScreen;





import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, BackHandler, TouchableOpacity, Image, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';
import { captureScreen } from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
// import * as FileSystem from 'expo-file-system';
// import * as Permissions from 'expo-permissions'; // Import Permissions

import { Ionicons } from '@expo/vector-icons';


const QRCodeScreen = ({ route }) => {
  const { name, plateNumber, qrCode } = route.params;
  
  console.log("route.params:", route.params);

  const navigation = useNavigation();
  const qrCodeRef = useRef(null);

  // Combine name and plateNumber to generate data for QR code
  const qrData = `${name}-${plateNumber}`;

  // Log the QR data to the console
  console.log("QR Data:", qrData);

  // Handle back button press
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true; // Prevent default behavior
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]); // Include navigation in dependencies to ensure effect updates if navigation changes



  const takeScreenshot = async () => {
    try {
      // Request permission to access media library
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Permission to access media library not granted');
      }
  
      // Capture the screen
      const uri = await captureScreen({
        format: 'jpg',
        quality: 1,
        result: 'tmpfile',
      });
  
      // Save the screenshot to the media library
      const asset = await MediaLibrary.createAssetAsync(uri);
      console.log('Image saved to gallery:', asset);
  
      // Display alert
      Alert.alert(
        'Image Saved',
        'The image has been saved to your gallery.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
  
      // Perform any additional actions after saving the screenshot
    } catch (error) {
      console.error('Error capturing screen:', error);
    }
  };
  
  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>

<TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back-sharp" size={35} color="black" />
       </TouchableOpacity>
      {/* <Image source={require('../../assets/logoo.png')} style={styles.logo}/> */}

      <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
        <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      </TouchableOpacity>


    <View style={styles.seccontainer}>

      {/* <Text style={styles.title}>{name}'s QR Code</Text>
      <Text style={styles.title}>Plate Number {plateNumber}</Text> */}
      <QRCodeWithRef value={qrCode} size={280} forwardedRef={qrCodeRef} style={styles.qrCode} />
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>{plateNumber}</Text>
        </View>
      <TouchableOpacity onPress={takeScreenshot} style={styles.downloadButton}>
        {/* <Text>Download Me</Text> */}
        <Image source={require('../../assets/dl.png')} style={styles.downloadIcon} />
      </TouchableOpacity>
    </View>
    </View>

  );
};

const QRCodeWithRef = React.forwardRef((props, ref) => {
  return <QRCode {...props} ref={ref} />;
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  seccontainer:{
    backgroundColor:'#ffd702',
    borderRadius:20,
    // padding:25,

    paddingTop: 60,
    paddingBottom:40,
    paddingLeft:20,
    paddingRight:20,
    // height:500,
    // width:325,
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    width:"90%",
    height:"60%"
  

  },
  qrCode: {
    // alignSelf: 'center', // Aligns the QR code horizontally to the center
 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign:'center'
  },

  titlecontainer: {
 
    marginTop: 20,
   
  },

  downloadButton: {
    // padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'center',
  },
  downloadIcon: {
    width: 40, // Adjust the width and height as needed
    height: 40,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 70,
    marginTop: -110,
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
   },
});

export default QRCodeScreen;
