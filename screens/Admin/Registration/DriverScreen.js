import React from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const DriverScreen = () => {
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
const navigation = useNavigation();

//      const goToPassenger = () => {
//      navigation.navigate('Passenger');
//    };

  return (
    <View style={styles.container}>
      <Text>Driver</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DriverScreen;