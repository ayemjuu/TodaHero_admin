import React, { useState} from 'react';
import { View, Text, StyleSheet, BackHandler, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const ReportsScreen = () => {

  // const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null); // To store the selected user for displaying info

  // Dummy data for demonstration
  const users = [
    { id: 1, name: 'User 1', info: 'Info about User 1' },
    { id: 2, name: 'User 2', info: 'Info about User 2' },
    { id: 3, name: 'User 3', info: 'Info about User 3' },
    { id: 4, name: 'User 4', info: 'Info about User 4' },
    { id: 5, name: 'User 5', info: 'Info about User 5' },
    { id: 6, name: 'User 6', info: 'Info about User 6' },
    { id: 7, name: 'User 7', info: 'Info about User 7' },
    { id: 8, name: 'User 8', info: 'Info about User 8' },
    { id: 9, name: 'User 9', info: 'Info about User 9' },
    { id: 10, name: 'User 10', info: 'Info about User 10' },
  ];


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

  //    const goToReports = () => {
  //    navigation.navigate('Reports');
  //  };

  const goToSearch = () => {
    // Handle navigation to search screen or perform search based on searchQuery
    // For example:
    // navigation.navigate('Search', { searchQuery });
    // or perform search logic here
  };

  const handleUserClick = (user) => {
    // Set the selected user and display their info
    setSelectedUser(user);
  };

  return (
    <View style={styles.container}>
    <Image source={require('../../assets/logo.png')} style={styles.logo} />
    <Text style={styles.title}>Reports</Text>

    {/* Search input and button with magnifying glass icon */}
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <TouchableOpacity style={styles.searchButton} onPress={goToSearch}>
        <FontAwesome name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>

    {/* Scrollable container for user buttons */}
    <ScrollView style={styles.userButtonContainer}>
      {users.map((user) => (
        <TouchableOpacity
          key={user.id}
          style={styles.userButton}
          onPress={() => handleUserClick(user)}
        >
          <Text style={styles.userButtonText}>{user.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

    {/* Container to display user information */}
    <View style={styles.userInfoContainer}>
      {selectedUser && (
        <>
          <Text style={styles.userInfoText}>User Information:</Text>
          <Text>{selectedUser.info}</Text>
        </>
      )}
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 40,
  },

  logo: {
    width: 210, // Adjust width as needed
    height: 210, // Adjust height as needed
    marginBottom: -20,
    marginTop: -90,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },

  searchButton: {
    padding: 6,
    backgroundColor: '#A0E9FF',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  userButtonContainer: {
    marginTop: 20,
    width: '100%', // Make the scrollable container take 100% width
    maxHeight: 400, // Set a max height for the scrollable container
  },

  userButton: {
    backgroundColor: '#A0E9FF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%', // Make the button take 100% width
  },

  userButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  userInfoContainer: {
    marginTop: 20,
  },

  userInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ReportsScreen;