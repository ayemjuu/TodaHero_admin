import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeScreen = ({ route }) => {
  const { name, plateNumber, qrCode  } = route.params;

  // Combine name and plateNumber to generate data for QR code
  const qrData = `${name}-${plateNumber}`;

    // Log the QR data to the console
    console.log("QR Data:", qrData);

  return (
    <View style={styles.container}>
         {/* <Text>QR Code: {qrCode}</Text> */}
         <Text style={styles.title}>{name}'s QR Code</Text>
         <Text style={styles.title}>Plate Number {plateNumber}</Text>

         <QRCode value={qrCode} size={300} />
      {/* <Text style={styles.title}>QR Code</Text>
      <QRCode
        value={qrData}
        size={200}
        color="black"
        backgroundColor="white"
        logo={require('../../assets/logo.png')} // Add your logo here
        logoSize={50}
        logoBackgroundColor="transparent"
      />
      <Text style={styles.info}>Scan this QR Code for more details</Text> */}
       {/* <Text style={styles.info}>Your QR Code</Text>  */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd702',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default QRCodeScreen;
