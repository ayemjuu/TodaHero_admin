import React from 'react';
import { View, Text, StyleSheet, Button, BackHandler } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const TodaDriverScreen = () => {

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

  return (
    <View style={styles.container}>
      <Text>TODA DRIVERS</Text>
      <Button title="Login" />
      
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

export default TodaDriverScreen;