import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const DriverQR = ({ navigation, route }) => {
  const { qrData } = route.params;

  const handleDone = () => {
    navigation.navigate('Registration'); // Navigate to RegistrationForm screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.qrContainer}>
        <QRCode value={JSON.stringify(qrData)} />
      </View>
      <Button title="Done" onPress={handleDone} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrContainer: {
    marginBottom: 20,
  },
});

export default DriverQR;
