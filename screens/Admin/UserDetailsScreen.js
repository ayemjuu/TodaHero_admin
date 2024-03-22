// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, BackHandler, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import firebase from 'firebase/compat';

// import { AntDesign } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';

// const UserDetailsScreen = ({ route }) => {
//   const navigation = useNavigation();
//   const { name, contactNumber, address, username } = route.params;
//   const [registrationDate, setRegistrationDate] = useState(null);
//   const [loading, setLoading] = useState(false);

  
//   // may delay dito
//   useEffect(() => {
//     const fetchRegistrationDate = async () => {
//       try {
//         const userRef = firebase.firestore().collection('Users').where('username', '==', username);
//         const snapshot = await userRef.get();
//         if (!snapshot.empty) {
//           // Assuming there's only one matching document for the username
//           snapshot.forEach((doc) => {
//             const data = doc.data();
//             if (data.registrationTime) {
//               setRegistrationDate(data.registrationTime.toDate());
//             }
//             console.log("aaaUser ID:", doc.id); // Log the ID of the user
//             console.log("aaaName:", name); // Log the name of the user
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching registration date:', error);
//       }
//     };

//     fetchRegistrationDate();
//     console.log("Name:", name); // Add this line to log the name
//   }, [username]);

//   // useEffect(() => {
//   //   const fetchRegistrationDate = async () => {
//   //     try {
//   //       const userRef = firebase.firestore().collection('Users')
//   //         .where('username', '==', username)
//   //         .orderBy('registrationTime', 'desc') // Assuming registrationTime field is used
//   //         .limit(1); // Limiting to 1 document assuming you want the latest registration
//   //       const snapshot = await userRef.get();
//   //       if (!snapshot.empty) {
//   //         snapshot.forEach((doc) => {
//   //           const data = doc.data();
//   //           if (data.registrationTime) {
//   //             setRegistrationDate(data.registrationTime.toDate());
//   //           }
//   //         });
//   //       }
//   //     } catch (error) {
//   //       console.error('Error fetching registration date:', error);
//   //     }
//   //   };
  
//   //   fetchRegistrationDate();
//   // }, [username]);

//   useFocusEffect(
//     React.useCallback(() => {
//       const onBackPress = () => {
//         navigation.navigate('User');
//         return true;
//       };

//       BackHandler.addEventListener('hardwareBackPress', onBackPress);

//       return () => {
//         BackHandler.removeEventListener('hardwareBackPress', onBackPress);
//       };
//     }, [navigation]),
//   );

//     const handleHistoryPress = () => {
//       console.log("Name to pass:", name);
//     navigation.navigate('UserHistoryScreen', { name }); // Assuming 'UserHistoryScreen' is the name of your history screen
//   };

  


//   const handleDeleteAccount = async () => {
//     Alert.alert(
//       "Confirmation",
//       "Are you sure you want to delete this account?",
//       [
//         {
//           text: "Cancel",
//           style: "cancel"
//         },
//         {
//           text: "Delete",
//           onPress: async () => {
//             try {
//               setLoading(true); // Show loading indicator
//               const userRef = firebase.firestore().collection('Users').where('username', '==', username);
//               const snapshot = await userRef.get();
//               if (!snapshot.empty) {
//                 snapshot.forEach(async (doc) => {
//                   console.log("User ID:", doc.id); // Log the ID of the user
//                   await doc.ref.delete(); // Delete the document
//                   console.log("Account deleted successfully.");
//                   navigation.navigate('Admin');
//                   Alert.alert("Success", "Account deleted successfully.");
//                   // Optionally, you can navigate back to a previous screen or perform any other actions after deletion.
//                 });
//               } else {
//                 console.log("No matching user found.");
//               }
//             } catch (error) {
//               console.error('Error deleting account:', error);
//             } finally {
//               setLoading(false); // Hide loading indicator
//             }
//           }
//         }
//       ]
//     );
//   };


//   return (
//     <View style={styles.Container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo}/>
//       <View style={styles.container}>
//         {/* <Image source={require('../../assets/logo.png')} style={styles.logo}/> */}
//         <Image
//         // source={require('../../assets/admin.png')} // Change the path accordingly
//         style={styles.adminlogo}
//       />
//         <Text style={styles.name}><AntDesign name="user" size={20} color="black" /> - {name}</Text>
//         <Text style={styles.text}>( {username} )</Text>
//         <Text style={styles.text}><AntDesign name="phone" size={20} color="black" /> - {contactNumber}</Text>
//         <Text style={styles.address}><AntDesign name="home" size={20} color="black" /> - {address}</Text>
        
//         {registrationDate && (
//           <Text style={styles.date}><AntDesign name="calendar" size={20} color="black" /> - {registrationDate.toDateString()} 
//           </Text>
          
//         )}
//         <Text style={styles.date}> (Registration Date)</Text>

//         {/* <TouchableOpacity style={styles.history} onPress={handleHistoryPress} >
//           <Text style={styles.buttonHistory}>History</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.history} onPress={handleDeleteAccount} >
//           <Text style={styles.buttonHistory}>Delete Account</Text>
          
//         </TouchableOpacity>

//         {loading && (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#0000ff" />
      
//         </View>
//       )} */}


//         <View style={styles.buttonContainer}>
//               <TouchableOpacity style={styles.history} onPress={handleDeleteAccount} >
//               {loading ? (
//                 <ActivityIndicator size="small" color="#0000ff" />
//               ) : (
//                 <Text style={styles.buttonHistory}><AntDesign name="delete" size={20} color="black" /></Text>
//               )}
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.history} onPress={handleHistoryPress}>
//               <Text>
//               <MaterialIcons name="history" size={20} color="black" />
//               </Text>
//             </TouchableOpacity>
//         </View>
//     </View>

   
//   </View>
   

//   );
// };

// const styles = StyleSheet.create({

//   Container:{
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:"white"

//   },
//   container: {
//     alignItems: 'flex-start', // Align items to the left side
//     justifyContent: 'center',
//     backgroundColor:"#ffd702",
//     height: 300,
//     borderRadius: 25,
//     marginTop: 0,
//     padding: 15,
//     width:300
//   },


//   text: {
//     fontSize: 20,
//     marginBottom: 10,
//   },

//   name: {
//     fontSize:25,
//     fontWeight:'bold'
//   },

//   date: {
//     fontSize:15,
    
//   },  
//   logo: {
//     width: 210, // Adjust width as needed
//     height: 210, // Adjust height as needed
//     marginBottom: 10,
//     marginTop: -80,
//   },
//   // adminlogo: {
//   //   width: 120, // Adjust width as needed
//   //   height: 120, // Adjust height as needed
//   //   marginBottom: 20,
//   //   marginTop: -40,
//   // },

//   history:{
//     marginTop:20,
//     backgroundColor:'white',
//     borderRadius:25,
//     height:40,
//     width:50,
//     justifyContent:'center',
//     alignItems:'center',
//     borderColor: 'black',
//     borderWidth: 1

//   },

//   address: {
//     fontSize: 20,
//     marginBottom: 10,
//     textAlign: 'center'
//   },
//   buttonContainer:{
//     flexDirection:'row',
//     justifyContent:'center',
//     alignContent:'center',
//     gap:5,
    
//     }
// });

// export default UserDetailsScreen;




import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, BackHandler, Image, TouchableOpacity, Alert, ActivityIndicator, TouchableHighlight } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import firebase from 'firebase/compat';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';


const UserDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { name, contactNumber, address, username } = route.params;
  const [registrationDate, setRegistrationDate] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRegistrationDate = async () => {
      try {
        const userRef = firebase.firestore().collection('Users').where('name', '==', name);
        const snapshot = await userRef.get();
        if (!snapshot.empty) {
          snapshot.forEach((doc) => {
            const data = doc.data();
            if (data.registrationTime) {
              setRegistrationDate(data.registrationTime.toDate());
            }
          });
        }
      } catch (error) {
        console.error('Error fetching registration date:', error);
      }
    };

    fetchRegistrationDate();
  }, [name]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('User');
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [navigation]),
  );

  const handleHistoryPress = () => {
    navigation.navigate('UserHistoryScreen', { name });
  };

  const handleDeleteAccount = async () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to delete this account?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              setLoading(true);
              const userRef = firebase.firestore().collection('Users').where('name', '==', name);
              const snapshot = await userRef.get();
              if (!snapshot.empty) {
                snapshot.forEach(async (doc) => {
                  await doc.ref.delete();
                  console.log("Account deleted successfully.");
                  navigation.navigate('Admin');
                  Alert.alert("Success", "Account deleted successfully.");
                });
              } else {
                console.log("No matching user found.");
              }
            } catch (error) {
              console.error('Error deleting account:', error);
            } finally {
              setLoading(false);
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('User')} style={styles.backButton}>
          {/* <Text style={styles.backButton}>asd<Ionicons name="arrow-back-sharp" size={35} color="black" /></Text> */}
          <Ionicons name="arrow-back-sharp" size={35} color="black" />
       </TouchableOpacity>
      {/* <Image source={require('../../assets/logo.png')} style={styles.logo}/> */}

      <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
        <Image source={require('../../assets/logoo.png')} style={styles.logo}/>
      </TouchableOpacity>

      <View style={styles.contentContainer}>

      {/* <Text style={styles.userdetail}>User Details</Text> */}
        <View style={styles.textContainer}>

        {/* <View style={styles.usercenter}>
                <Text style={styles.userdetails}>User Details</Text>
        </View> */}

          <Text style={styles.userdetail}>User Details</Text>

          <Text style={styles.name}><AntDesign name="user" size={20} color="black" /> • {name}</Text>
          <Text style={styles.text}><AntDesign name="phone" size={20} color="black" /> • {contactNumber}</Text>
          <Text style={styles.text}><AntDesign name="home" size={20} color="black" /> • {address}</Text>
          {registrationDate && (
            <Text style={styles.text}><AntDesign name="calendar" size={20} color="black" /> • {registrationDate.toDateString()}</Text>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.history} onPress={handleHistoryPress}>
            <Text style={styles.buttonHistory}><MaterialIcons name="history" size={20} color="black" /></Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.history} onPress={handleDeleteAccount}>
            {loading ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : (
              <Text style={styles.buttonHistory}><AntDesign name="delete" size={20} color="black" /></Text>
            )}
          </TouchableOpacity> */}
          <TouchableHighlight
          style={styles.history}
          onPress={handleDeleteAccount}
          underlayColor="red" // Change the background color when pressed
        >
          {loading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <Text style={[styles.buttonHistory, { color: 'red' }]}>
              <AntDesign name="delete" size={20} color="black" />
            </Text>
          )}
        </TouchableHighlight>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  contentContainer: {
    // alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#ffd702',
    borderRadius: 25,
    marginTop: 10,
    padding: 10,
    paddingTop:10,
    width:"90%",
    height:"50%",
  },
  textContainer: {
    marginLeft: 10,
    marginTop: 40
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,

  },
  text: {
    fontSize: 20,
    marginBottom: 15,
  },
  date: {
    fontSize: 15
  },
  // logo: {
  //   width: 210,
  //   height: 210,
  //   marginBottom: 10,
  //   marginTop: -80
  // },

  logo: {
    width: 160,
    height: 160,
    marginBottom: 60,
    marginTop:-190,
  },
  history: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 25,
    height: 40,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  buttonHistory: {
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 0,
    gap: 10
  },

  userdetail:{
    marginTop:-35,
    fontSize:25,
    fontWeight:'bold',
    marginBottom:25,
    textAlign:'center'
   
   

  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
   },


});

export default UserDetailsScreen;
