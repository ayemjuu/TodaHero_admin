// import React, { useEffect, useState} from 'react';
// import { View, Text, StyleSheet, Button, TouchableOpacity, Image, BackHandler, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// //import auth from '@react-native-firebase/auth';
// import { firebase } from '../config';

// const AdminScreen = ({ navigation}) => {

//   const [username, setUsername] = useState(null);

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
//       setUsername (currentUser);
//     });
//     return unsubscribe;
//   }, []);


//   // const goToLogin = () => {
//   //   navigation.navigate('Login');
//   // };
//   const goToToda = () => {
//     navigation.navigate('TODA Drivers');
//   };
//   const goToUser = () => {
//     navigation.navigate('User');
//   };
//   const goToRegistration = () => {
//     navigation.navigate('Registration');
//   };
//   const goToReports = () => {
//     navigation.navigate('Reports');
//   };



//   const handleLogout = async () => {


//     Alert.alert(
//       'Logout',
//       'Are you sure you want to logout?',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'Logout',
//           onPress: async () => {
//             try {
//               await firebase.auth().signOut();
//               navigation.navigate('Login');
//             } catch (error) {
//               console.error(error);
//             }
//           },
//         },
//       ],
//       { cancelable: false }
//     );
//   };

  

//   useEffect(() => {
//     const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
//       // Disable hardware back button
//       return true;
//     });

//     // Cleanup function to remove the event listener when the component is unmounted
//     return () => backHandler.remove();
//   }, []);


//   //const navigation = useNavigation();

//   // const goToLogin = () => {
//   //   navigation.navigate('Login');
//   // };
//   // const goToToda = () => {
//   //   navigation.navigate('TODA Drivers');
//   // };
//   // const goToUser = () => {
//   //   navigation.navigate('User');
//   // };
//   // const goToRegistration = () => {
//   //   navigation.navigate('Registration');
//   // };
//   // const goToReports = () => {
//   //   navigation.navigate('Reports');
//   // };

 

 

 

//   return (
//     <View style={styles.container}>
     

//       <Image
//         source={require('../assets/logo.png')} // Change the path accordingly
//         style={styles.logo}
//       />
//        <Image
//         source={require('../assets/tricycle.png')} // Change the path accordingly
//         style={styles.adminlogo}
//       />
//       <Text style={styles.admin}>
//       ADMIN
//       </Text>
//       <Text style={styles.title}>
//         {username ? username.email: 'Guest'}
//       </Text>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={goToToda}>
//           <Text style={styles.buttonText}>TODA Drivers</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={goToUser}>
//           <Text style={styles.buttonText}>App Users</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={goToRegistration}>
//           <Text style={styles.buttonText}>Registration</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={goToReports}>
//           <Text style={styles.buttonText}>Reports</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={handleLogout}>
//           <Text style={styles.buttonText}>Logout</Text>
//         </TouchableOpacity>
//         </View>

//       {/* <Button style={styles.button} title="TODA Drivers" onPress={goToToda} />
//       <Button style={styles.button} title="User" onPress={goToUser} />
//       <Button style={styles.button} title="Registration" onPress={goToRegistration} />
//       <Button style={styles.button} title="Reports" onPress={goToReports} />
//       <Button style={styles.button} title="Logout" onPress={goToLogin} /> */}


//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 60,
//     backgroundColor: 'white',
//   },

//   admin: {
//     fontSize: 30,
//     fontWeight: 'bold',
    
//     marginBottom: 45,
//   },

//   title: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     marginTop: -30,
//     marginBottom: 45,
//   },

//   toggleButton: {
//     padding: 10,
//     backgroundColor: 'white',
//     borderTopRightRadius: 5,
//     borderBottomRightRadius: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'column',
//     // justifyContent: 'center',
    
//     width: '100%',
//     height: '100%'
//   },

//   button: {
//     // flex: 1,
//     backgroundColor: '#ffd702',
//     padding: 10,
//     borderRadius: 50,
//     marginRight: 8,
//     // borderWidth: 1,
//     marginBottom: 15,
//     // justifyContent: 'center',
//     alignItems: 'center',
    
    
    
//   },

//   logo: {
//     width: 250, // Adjust width as needed
//     height: 250, // Adjust height as needed
   
//     marginTop: 310,
//   },

//   adminlogo: {
//     width: 150, // Adjust width as needed
//     height: 150, // Adjust height as needed
//     marginBottom: 20,
//     marginTop: -40,
//   },

//   buttonText: {
//     color: 'black',
   
//   }
// });

// export default AdminScreen;



import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, BackHandler, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import auth from '@react-native-firebase/auth';
import { firebase } from '../config';

const AdminScreen = ({ navigation}) => {

  const [username, setUsername] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      setUsername (currentUser);
    });
    return unsubscribe;
  }, []);


  // const goToLogin = () => {
  //   navigation.navigate('Login');
  // };
  const goToToda = () => {
    navigation.navigate('TODA Drivers');
  };
  const goToUser = () => {
    navigation.navigate('User');
  };
  const goToRegistration = () => {
    navigation.navigate('Registration');
  };
  const goToReports = () => {
    navigation.navigate('Reports');
  };



  const handleLogout = async () => {


    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              await firebase.auth().signOut();
              navigation.navigate('Login');
            } catch (error) {
              console.error(error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Disable hardware back button
      return true;
    });

    // Cleanup function to remove the event listener when the component is unmounted
    return () => backHandler.remove();
  }, []);


  //const navigation = useNavigation();

  // const goToLogin = () => {
  //   navigation.navigate('Login');
  // };
  // const goToToda = () => {
  //   navigation.navigate('TODA Drivers');
  // };
  // const goToUser = () => {
  //   navigation.navigate('User');
  // };
  // const goToRegistration = () => {
  //   navigation.navigate('Registration');
  // };
  // const goToReports = () => {
  //   navigation.navigate('Reports');
  // };

 

 

 

  return (
    <View style={styles.container}>
     

      <Image
        source={require('../assets/logo.png')} // Change the path accordingly
        style={styles.logo}
      />
       <Image
        source={require('../assets/tricycle.png')} // Change the path accordingly
        style={styles.adminlogo}
      />
      <Text style={styles.admin}>
      ADMIN
      </Text>
      <Text style={styles.title}>
        {username ? username.email: 'Guest'}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToToda}>
          <Text style={styles.buttonText}>TODA Drivers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToUser}>
          <Text style={styles.buttonText}>App Users</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToRegistration}>
          <Text style={styles.buttonText}>Registration</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToReports}>
          <Text style={styles.buttonText}>Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        </View>

      {/* <Button style={styles.button} title="TODA Drivers" onPress={goToToda} />
      <Button style={styles.button} title="User" onPress={goToUser} />
      <Button style={styles.button} title="Registration" onPress={goToRegistration} />
      <Button style={styles.button} title="Reports" onPress={goToReports} />
      <Button style={styles.button} title="Logout" onPress={goToLogin} /> */}


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
    backgroundColor: 'white',
  },

  admin: {
    fontSize: 30,
    fontWeight: 'bold',
    
    marginBottom: 45,
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: -45,
    marginBottom: 30,
  },

  toggleButton: {
    padding: 10,
    backgroundColor: 'white',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'column',
    // justifyContent: 'center',
    
    width: '100%',
    height: '100%'
  },

  button: {
    // flex: 1,
    backgroundColor: '#ffd702',
    padding: 10,
    borderRadius: 50,
    marginRight: 8,
    // borderWidth: 1,
    marginBottom: 15,
    // justifyContent: 'center',
    alignItems: 'center',
    
    
    
  },

  logo: {
    width: 250, // Adjust width as needed
    height: 250, // Adjust height as needed
   
    marginTop: 310,
  },

  adminlogo: {
    width: 150, // Adjust width as needed
    height: 150, // Adjust height as needed
    marginBottom: 20,
    marginTop: -50,
  },

  buttonText: {
    color: 'black',
   
  }
});

export default AdminScreen;