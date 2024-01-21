import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous loading (e.g., fetching data, authentication)
    const timeout = setTimeout(() => {
      setIsLoading(false);
      // Navigate to the desired screen once loading is complete
      navigation.navigate('Login');
    }, 4000); // Adjust the duration as needed

    // Cleanup function to clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {isLoading ? (<>
      <Image source={require('../assets/logo.png')} // Change the path accordingly
        style={styles.logo}/>
        </>
      ) : null }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  logo: {
    width: 280, // Adjust width as needed
    height: 280, // Adjust height as needed
    marginBottom: 20,
    marginTop: -260,
  },

});

export default LoadingScreen;