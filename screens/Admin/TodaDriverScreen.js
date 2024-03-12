// import React from 'react';
// import { View, Text, StyleSheet, Button, BackHandler } from 'react-native';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';

// const TodaDriverScreen = () => {

//      // useFocusEffect get called each time when screen comes in focus
//      useFocusEffect(
//       React.useCallback(() => {
//         const onBackPress = () => {
//           navigation.navigate('Admin');
//           // Return true to stop default back navigaton
//           // Return false to keep default back navigaton
//           return true;
//         };
  
//         // Add Event Listener for hardwareBackPress
//         BackHandler.addEventListener(
//           'hardwareBackPress',
//           onBackPress
//         );
  
//         return () => {
//           // Once the Screen gets blur Remove Event Listener
//           BackHandler.removeEventListener(
//             'hardwareBackPress',
//             onBackPress
//           );
//         };
//       }, []),
//     );


// const navigation = useNavigation();

// //     const goToToda = () => {
// //     navigation.navigate('TODA Drivers');
// //    };

//   return (
//     <View style={styles.container}>
//       <Text>TODA DRIVERS</Text>
//       <Button title="Login" />
      
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

// export default TodaDriverScreen;


//kabilang code ito
// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, BackHandler } from 'react-native';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import { FontAwesome } from '@expo/vector-icons';
// import firebase from 'firebase/compat';

// const TodaDriverScreen = () => {
//   const navigation = useNavigation();
//   const [users, setUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useFocusEffect(
//     React.useCallback(() => {
//       const onBackPress = () => {
//         navigation.navigate('Admin');
//         return true;
//       };

//       BackHandler.addEventListener('hardwareBackPress', onBackPress);

//       return () => {
//         BackHandler.removeEventListener('hardwareBackPress', onBackPress);
//       };
//     }, [navigation]),
//   );

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const usersCollection = firebase.firestore().collection('Drivers');
//         const snapshot = await usersCollection.orderBy('registrationTime', 'desc').get();
//         const fetchedUsers = snapshot.docs.map((doc) => doc.data());
//         setUsers(fetchedUsers);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleUserClick = (user) => {
//     navigation.navigate('TODA Drivers Details', {
//       name: user.name,
//       contactNumber: user.contactNumber,
//       address: user.address,
//       username: user.username,
//       plateNumber: user.plateNumber
//       //registrationTime: user.registrationTime, // Assuming you're passing this as well
//     });
//   };

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );



  

  
//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo}/>
//       <Text style={styles.todadriver}>Active Drivers</Text>

//       <View style={styles.searchContainer}>
//         <View style={styles.searchInputContainer}>
//           <FontAwesome name="search" size={20} color="black" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search name..."
//             value={searchQuery}
//             onChangeText={(text) => setSearchQuery(text)}
//           />
//         </View>
//       </View>
//       <ScrollView style={styles.userList}>
//         {filteredUsers.map((user, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.userItem}
//             onPress={() => handleUserClick(user)}
//           >
//             <Text style={styles.userNumber}>{index + 1}</Text>
//             <Text style={styles.userName}>{user.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#86A7FC',
//     backgroundColor: '#ffffff',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop:-30
//     // backgroundColor:'blue'
//   },
//   searchInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 20,
//     height: 40,
//     flex: 1,
//     paddingHorizontal: 10,
//     backgroundColor:'white'
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     height: '100%',
//   },
//   userList: {
//     flex: 1,
//     width: '100%', // Set the width to take the entire space
//     backgroundColor:'#ffd702',
//     // borderRadius:25,
//       // paddingLeft: 20,
//       // paddingRight: 20,
   
//   },
//   userItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: 'gray',
//     width: '100%', // Adjust the width of each item

//     height:50,
//       paddingLeft: 20,
//       paddingRight: 20,
//   },
//   userNumber: {
//     marginRight: 10,
//   },
//   userName: {
//     fontSize: 16,
//     color: 'black',
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: -20,
//     marginTop: -60,
//   },

//   todadriver: {
//     fontSize: 30,
//     fontWeight: 'bold',
    
//     marginBottom: 45,
//   },
// });

// export default TodaDriverScreen;


import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, BackHandler, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import firebase from 'firebase/compat';


import { Ionicons } from '@expo/vector-icons';


const TodaDriverScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Admin');
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [navigation]),
  );

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersCollection = firebase.firestore().collection('Drivers');
        const snapshot = await usersCollection.orderBy('registrationTime', 'desc').get();
        const fetchedUsers = snapshot.docs.map((doc) => doc.data());
        setUsers(fetchedUsers);
        setIsLoading(false); // Set isLoading to false when data is fetched
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleUserClick = (user) => {
    navigation.navigate('TODA Drivers Details', {
      name: user.name,
      contactNumber: user.contactNumber,
      address: user.address,
      username: user.username,
      plateNumber: user.plateNumber
    });
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Admin')} style={styles.backButton}>
          {/* <Text style={styles.backButton}>asd<Ionicons name="arrow-back-sharp" size={35} color="black" /></Text> */}
          <Ionicons name="arrow-back-sharp" size={35} color="black" />
       </TouchableOpacity>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      <Text style={styles.todadriver}>Registered Drivers</Text>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <FontAwesome name="search" size={20} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search name..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      </View>

      <View style={styles.userListContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ScrollView style={styles.userList}>
            {filteredUsers.map((user, index) => (
              <TouchableOpacity
                key={index}
                style={styles.userItem}
                onPress={() => handleUserClick(user)}
              >
                  {/* <Image
                    source={require('../../assets/tricycle.png')}
                    style={styles.userImage}
                  />
                <Text style={styles.userName}>{user.name}</Text> */}

          <View style={styles.userRow}>
            <Image
              source={require('../../assets/tricycle.png')}
              style={styles.userImage}
            />
            {/* <Text style={styles.userName}>{user.name}</Text> */}
            <Text style={styles.userName}>
              {user.name.length > 20 ? user.name.slice(0, 20) + "..." : user.name}
            </Text>
          </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:-30
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor:'lightgray'
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
  },
  userListContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffd702',
    borderRadius: 25,
    // paddingLeft: 20,
    // paddingRight: 20,
    paddingTop: 10,
    marginTop: 10,
    justifyContent: 'center', // Center the loading indicator vertically
    alignItems: 'center', // Center the loading indicator horizontally
    paddingLeft:20,
    paddingRight:20,
    paddingTop:20,
    paddingBottom:20,

  
  },
  userList: {
    flex: 1,
    width: '100%',
   
  },
  userItem: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // paddingVertical: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: 'gray',
    // width: '100%',
    // height: 50,
    // paddingLeft: 20,
    // paddingRight: 20,

    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '100%',
    height:48,
    backgroundColor:"#ffff",
  
    
  },
  userNumber: {
    marginRight: 10,
    fontWeight:'bold'

  },
  userName: {
    fontSize: 16,
    color: 'black',
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: -20,
    marginTop: -40,
  },

  todadriver: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  userImage:{
    width:35,
    height:35,

  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop:-4
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
   },
});

export default TodaDriverScreen;
