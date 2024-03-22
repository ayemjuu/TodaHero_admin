// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, BackHandler } from 'react-native';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import { FontAwesome } from '@expo/vector-icons';
// import firebase from 'firebase/compat';

// const UserScreen = () => {
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
//         const usersCollection = firebase.firestore().collection('Users');
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
//     navigation.navigate('UserDetails', {
//       name: user.name,
//       contactNumber: user.contactNumber,
//       address: user.address,
//       username: user.username,
//       //registrationTime: user.registrationTime, // Assuming you're passing this as well
//     });
//   };

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // const filteredUsers = users.filter((user) => {
//   //   // Check if the user's name starts with the searchQuery's first character
//   //   const firstLetter = searchQuery.charAt(0).toLowerCase();
//   //   return user.name.toLowerCase().startsWith(firstLetter);
//   // }); //problema neto is yung second name di mo masesearch


  

  
//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo}/>
//       <Text style={styles.appusers}>App Users</Text>

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
//     backgroundColor: '#86A7FC',
//     backgroundColor: 'white',
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
//     paddingLeft: 20,
//     paddingRight: 20,
   
//   },
//   userItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#86A7FC',
//     width: '100%', // Adjust the width of each item

//     height:50
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
  
//   appusers: {
//     fontSize: 30,
//     fontWeight: 'bold',
    
//     marginBottom: 45,
//   },
// });

// export default UserScreen;




// //working 3-8-24
// //may loading state lang
// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, BackHandler, ActivityIndicator } from 'react-native';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import { FontAwesome } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';

// import firebase from 'firebase/compat';

// const UserScreen = () => {
//   const navigation = useNavigation();
//   const [users, setUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(true); // Add isLoading state

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
//         const usersCollection = firebase.firestore().collection('Users');
//         const snapshot = await usersCollection.orderBy('registrationTime', 'desc').get();
//         const fetchedUsers = snapshot.docs.map((doc) => doc.data());
//         setUsers(fetchedUsers);
//         setIsLoading(false); // Set isLoading to false when data is fetched
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleUserClick = (user) => {
//     navigation.navigate('UserDetails', {
//       name: user.name,
//       contactNumber: user.contactNumber,
//       address: user.address,
//       username: user.username,
//       //registrationTime: user.registrationTime, // Assuming you're passing this as well
//     });
//   };

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo}/>
//       <Text style={styles.appusers}>Registered App Users</Text>

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
//       <View style={styles.userListContainer}>
//         {isLoading ? ( // Display loading indicator when isLoading is true
//           <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
//         ) : (
//           <ScrollView style={styles.userList}>
//             {filteredUsers.map((user, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={styles.userItem}
//                 onPress={() => handleUserClick(user)}
//               >
//                 {/* <AntDesign name="user" size={20} color="black" />
//                 <Text style={styles.userName}>{user.name}</Text> */}

//                 <View style={styles.userRow}>
//                   <AntDesign name="user" size={25} color="black" />
//                   <Text style={styles.userName}>{user.name}</Text>
//                 </View>


//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#86A7FC',
//     backgroundColor: 'white',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     marginTop:-30
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
//   userListContainer: {
//     flex: 1,
//     width: '100%',
//     backgroundColor: '#ffd702',
//     borderRadius: 25,
//     // paddingLeft: 20,
//     // paddingRight: 20,
//     paddingTop: 10,
//     marginTop: 10,
//     justifyContent: 'center', // Center the loading indicator vertically
//     alignItems: 'center', // Center the loading indicator horizontally

//     paddingLeft:20,
//     paddingRight:20,
//     paddingTop:20,
//     paddingBottom:20
   
    
//   },
//   userList: {
//     flex: 1,
//     width: '100%',
    
//   },
//   userItem: {
//     // flexDirection: 'row',
//     // alignItems: 'center',
//     // paddingVertical: 10,
//     // borderBottomWidth: 1,
//     // borderBottomColor: 'gray',
//     // width: '100%',
//     // height: 50,
//     // paddingLeft: 20,
//     // paddingRight: 20,

//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     width: '100%',
//     height:48,
//     backgroundColor:"#ffff"
//   },
//   userNumber: {
//     marginRight: 10,
//   },
//   userName: {
//     fontSize: 16,
//     color: 'black',
//   },
//   logo: {
//     width: 160,
//     height: 160,
//     marginBottom: -20,
//     marginTop: -40,
//   },
  
//   appusers: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 40,
//   },
//   loadingIndicator: {
//     alignSelf: 'center', // Center the loading indicator horizontally
//   },
//   userRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//     marginTop:0
//   },
  
// });

// export default UserScreen;



//galing kay ynna

//may loading state lang
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, BackHandler, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import firebase from 'firebase/compat';

import { Ionicons } from '@expo/vector-icons';


import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import * as FileSystem from 'expo-file-system';



const UserScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  
  const [downloadDataLoading, setDownloadDataLoading] = useState(false); 
  const [downloadHistoryLoading, setDownloadHistoryLoading] = useState(false);

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
        const usersCollection = firebase.firestore().collection('Users');
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
    navigation.navigate('UserDetails', {
      name: user.name,
      contactNumber: user.contactNumber,
      address: user.address,
      username: user.username,
      //registrationTime: user.registrationTime, // Assuming you're passing this as well
    });
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const formatTimestampp = (timestamp) => {
  //   return timestamp.toDate().toLocaleString(); // Convert timestamp to a human-readable format
  // };

  const formatTimestampp = (timestamp) => {
    const options = {
        month: 'long', // Full month name (e.g., "March")
        day: 'numeric', // Numeric day of the month (e.g., "22")
        year: 'numeric', // Numeric year (e.g., "2024")
        hour: '2-digit', // 2-digit representation of the hour (e.g., "15")
        minute: '2-digit', // 2-digit representation of the minute (e.g., "17")
        second: '2-digit', // 2-digit representation of the second (e.g., "56")
        hour12: false // Use 24-hour format
    };
    return timestamp.toDate().toLocaleString('en-US', options);
};
  

//working 3-21-24
  // const generatePdf = async () => {
  //   try {
  
  //     // Fetch data from Drivers collection
  //     const usersCollection = firebase.firestore().collection('Users');
  //     const usersSnapshot = await usersCollection.get();
  //     const usersData = usersSnapshot.docs.map(doc => doc.data());
  
  //     // Generate PDF
  //     let html = `

  //       <html>
  //         <head>
  //           <style>
  //             @page {
  //               size: landscape;
  //               margin: 0.5in;
  //             }
  //             h4 {
  //               margin-bottom: 5px; 
  //             }
  //             .header h4 {
  //               margin: 0; 
  //             }
  //           </style>
  //         </head>
  //         <body style="text-align: center">
  //            <div class="header">
  //            <div> </div>
  //               <h4>BULACAN STATE UNIVERSITY - MENESES CAMPUS</h4>
  //               <h4>COMPUTER ENGINEERING DEPARTMENT</h4>
  //               <h4>TODAHERO REPORT HISTORY</h4>
  //             </div>
  //     `;
      
  //     // Add driver's information to the PDF
  //     html += `

  //     <div>
  //       <img src="https://i.pinimg.com/originals/aa/1f/d9/aa1fd9f5a8a72d47f39914f7df002c5e.png" style="position: absolute; top: -65px; right: 20px; width: 200px; height: auto;">
  //       <img src="https://i.pinimg.com/originals/82/2a/5b/822a5ba1adb67e6bf5fd24b3b30c633f.png" style="position: absolute; top: -45px; left: 10px; width: 135px; height: auto;">
  //       <img src="https://i.pinimg.com/originals/20/1c/6e/201c6e09f233b23ec74322f444cfecb1.png" style="position: absolute; top: -45px; left: 120px; width: 135px; height: auto;">
  //     </div>
  //       <h2>Driver Information</h2>
  //       <table style="border-collapse: collapse; width: 100%;">
  //         <tr>
  //           <th style="border: 1px solid black; padding: 8px;">Name</th>
  //           <th style="border: 1px solid black; padding: 8px;">Contact Number</th>
  //           <th style="border: 1px solid black; padding: 8px;">Address</th>
  //           <th style="border: 1px solid black; padding: 8px;">Registration Time</th>
  //         </tr>
  //     `;
  //     usersData.forEach(users => {
  //       html += `
  //         <tr>
  //           <td style="border: 1px solid black; padding: 8px;">${users.name}</td>
  //           <td style="border: 1px solid black; padding: 8px;">${users.contactNumber}</td>
  //           <td style="border: 1px solid black; padding: 8px;">${users.address}</td>
  //           <td style="border: 1px solid black; padding: 8px;">${users.registrationTime ? formatTimestampp(users.registrationTime) : ''}</td>
  //         </tr>
  //       `;
  //     });
  //     html += `</table>`;
      
  //     // Close HTML structure
  //     html += `
  //         </body>
  //       </html>
  //     `;
  
  //     // Generate PDF and share
  //     const tempFile = await printToFileAsync({
  //       html: html,
  //       base64: false,
  //     });
  
  //     // Define new file name
  //     const fileName = 'Users_Information.pdf';
  
  //     // Move temporary file to new location with desired file name
  //     const newPath = `${FileSystem.documentDirectory}${fileName}`;
  //     await FileSystem.moveAsync({
  //       from: tempFile.uri,
  //       to: newPath,
  //     });
  
  //     // Share the new file with desired file name
  //     await shareAsync(newPath, {
  //       mimeType: 'application/pdf',
  //       dialogTitle: 'Share Drivers Information',
  //       UTI: 'com.adobe.pdf',
  //       filename: fileName,
  //     });
  
  //   } catch (error) {
  //     console.error('Error generating PDF:', error);
  //   }
  // };
  


  // const generatePdf = async () => {
  //   try {
  //     // Fetch data from Users collection
  //     const usersCollection = firebase.firestore().collection('Users');
  //     const usersSnapshot = await usersCollection.get();
  //     const usersData = usersSnapshot.docs.map(doc => doc.data());
  
  //     // Sort usersData based on registrationTime
  //     usersData.sort((a, b) => {
  //       return a.registrationTime - b.registrationTime;
  //     });
  
  //     // Generate PDF
  //     let html = `
  //       <html>
  //         <head>
  //           <style>
  //             @page {
  //               size: landscape;
  //               margin: 0.5in;
  //             }
  //             h4 {
  //               margin-bottom: 5px; 
  //             }
  //             .header h4 {
  //               margin: 0; 
  //             }
  //           </style>
  //         </head>
  //         <body style="text-align: center">
  //           <div class="header">
  //             <div> </div>
  //             <h4>BULACAN STATE UNIVERSITY - MENESES CAMPUS</h4>
  //             <h4>COMPUTER ENGINEERING DEPARTMENT</h4>
  //             <h4>TODAHERO REPORT HISTORY</h4>
  //           </div>
  //     `;
  
  //     // Add driver's information to the PDF
  //     html += `
  //       <div>
  //         <img src="https://i.pinimg.com/originals/aa/1f/d9/aa1fd9f5a8a72d47f39914f7df002c5e.png" style="position: absolute; top: -65px; right: 20px; width: 200px; height: auto;">
  //         <img src="https://i.pinimg.com/originals/82/2a/5b/822a5ba1adb67e6bf5fd24b3b30c633f.png" style="position: absolute; top: -45px; left: 10px; width: 135px; height: auto;">
  //         <img src="https://i.pinimg.com/originals/20/1c/6e/201c6e09f233b23ec74322f444cfecb1.png" style="position: absolute; top: -45px; left: 120px; width: 135px; height: auto;">
  //       </div>
  //       <h2>Driver Information</h2>
  //       <table style="border-collapse: collapse; width: 100%;">
  //         <tr>
  //           <th style="border: 1px solid black; padding: 8px;">Name</th>
  //           <th style="border: 1px solid black; padding: 8px;">Contact Number</th>
  //           <th style="border: 1px solid black; padding: 8px;">Address</th>
  //           <th style="border: 1px solid black; padding: 8px;">Registration Time</th>
  //         </tr>
  //     `;
  //     usersData.forEach(user => {
  //       html += `
  //         <tr>
  //           <td style="border: 1px solid black; padding: 8px;">${user.name}</td>
  //           <td style="border: 1px solid black; padding: 8px;">${user.contactNumber}</td>
  //           <td style="border: 1px solid black; padding: 8px;">${user.address}</td>
  //           <td style="border: 1px solid black; padding: 8px;">${user.registrationTime ? formatTimestampp(user.registrationTime) : ''}</td>
  //         </tr>
  //       `;
  //     });
  //     html += `</table>`;
  
  //     // Close HTML structure
  //     html += `
  //         </body>
  //       </html>
  //     `;
  
  //     // Generate PDF and share
  //     const tempFile = await printToFileAsync({
  //       html: html,
  //       base64: false,
  //     });
  
  //     // Define new file name
  //     const fileName = 'Users_Information.pdf';
  
  //     // Move temporary file to new location with desired file name
  //     const newPath = `${FileSystem.documentDirectory}${fileName}`;
  //     await FileSystem.moveAsync({
  //       from: tempFile.uri,
  //       to: newPath,
  //     });
  
  //     // Share the new file with desired file name
  //     await shareAsync(newPath, {
  //       mimeType: 'application/pdf',
  //       dialogTitle: 'Share Drivers Information',
  //       UTI: 'com.adobe.pdf',
  //       filename: fileName,
  //     });
  
  //   } catch (error) {
  //     console.error('Error generating PDF:', error);
  //   }
  // };
  

const generatePdf = async () => {
  try {

    setDownloadDataLoading(true);
      // Fetch data from Drivers collection
      const usersCollection = firebase.firestore().collection('Users');
      const usersSnapshot = await usersCollection.get();
      const usersData = usersSnapshot.docs.map(doc => doc.data());

      // Sort driversData based on rideEnded timestamp
      usersData.sort((a, b) => a.registrationTime - b.registrationTime);

      // Generate PDF
      let html = `
      <html>
        <head>
          <style>
            @page {
              size: landscape;
              margin: 0.5in;
            }
            h4 {
              margin-bottom: 5px; 
            }
            .header h4 {
              margin: 0; 
            }
          </style>
        </head>
        <body style="text-align: center">
          <div class="header">
            <div> </div>
            <h4>BULACAN STATE UNIVERSITY - MENESES CAMPUS</h4>
            <h4>COMPUTER ENGINEERING DEPARTMENT</h4>
            <h4>TODAHERO USERS DATA </h4>
          </div>
    `;

      // Add driver's information to the PDF
      html += `
      <div>
        <img src="https://i.pinimg.com/originals/aa/1f/d9/aa1fd9f5a8a72d47f39914f7df002c5e.png" style="position: absolute; top: -65px; right: 20px; width: 200px; height: auto;">
        <img src="https://i.pinimg.com/originals/82/2a/5b/822a5ba1adb67e6bf5fd24b3b30c633f.png" style="position: absolute; top: -45px; left: 10px; width: 135px; height: auto;">
        <img src="https://i.pinimg.com/originals/20/1c/6e/201c6e09f233b23ec74322f444cfecb1.png" style="position: absolute; top: -45px; left: 120px; width: 135px; height: auto;">
      </div>
      <h2>Users Information</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <th style="border: 1px solid black; padding: 8px;">Name</th>
          <th style="border: 1px solid black; padding: 8px;">Contact Number</th>
          <th style="border: 1px solid black; padding: 8px;">Address</th>
          <th style="border: 1px solid black; padding: 8px;">Registration Time</th>
        </tr>
    `;
        usersData.forEach(user => {
          html += `
        <tr>
          <td style="border: 1px solid black; padding: 8px;">${user.name}</td>
          <td style="border: 1px solid black; padding: 8px;">${user.contactNumber}</td>
          <td style="border: 1px solid black; padding: 8px;">${user.address}</td>
          <td style="border: 1px solid black; padding: 8px;">${user.registrationTime ? formatTimestampp(user.registrationTime) : ''}</td>
        </tr>
      `;
      });
      html += `</table>`;

      // Close HTML structure
      html += `
        </body>
      </html>
    `;

      // Generate PDF and share
      const tempFile = await printToFileAsync({
          html: html,
          base64: false,
      });

      // Define new file name
      const fileName = 'TODAHero_Users_Information.pdf';

      // Move temporary file to new location with desired file name
      const newPath = `${FileSystem.documentDirectory}${fileName}`;
      await FileSystem.moveAsync({
          from: tempFile.uri,
          to: newPath,
      });

      // Share the new file with desired file name
      await shareAsync(newPath, {
          mimeType: 'application/pdf',
          dialogTitle: 'Share Drivers Information',
          UTI: 'com.adobe.pdf',
          filename: fileName,
      });
      setDownloadDataLoading(false);

  } catch (error) {
      console.error('Error generating PDF:', error);
      setDownloadDataLoading(false);

  }
};
 //---------------HISTORY--------------------------- ----------------------------------------------------

 const generateHistoryPdf = async () => {
  try {
    
    setDownloadHistoryLoading(true);

    // Fetch data from Drivers collection
    const historyCollection = firebase.firestore().collection('history');
    const historySnapshot = await historyCollection.get();
    let historyData = historySnapshot.docs.map(doc => doc.data());




       // Sort driversData based on rideEnded timestamp
       historyData.sort((a, b) => a.rideEnded - b.rideEnded);

    // Generate PDF
    let html = `

      <html>
        <head>
          <style>
            @page {
              size: landscape;
              margin: 0.5in;
            }
            h4 {
              margin-bottom: 5px; 
            }
            .header h4 {
              margin: 0; 
            }
          </style>
        </head>
        <body style="text-align: center">
           <div class="header">
           <div> </div>
              <h4>BULACAN STATE UNIVERSITY - MENESES CAMPUS</h4>
              <h4>COMPUTER ENGINEERING DEPARTMENT</h4>
              <h4>TODAHERO DRIVER HISTORY</h4>
            </div>
    `;
    
    // Add driver's information to the PDF
    html += `

    <div>
      <img src="https://i.pinimg.com/originals/aa/1f/d9/aa1fd9f5a8a72d47f39914f7df002c5e.png" style="position: absolute; top: -65px; right: 20px; width: 200px; height: auto;">
      <img src="https://i.pinimg.com/originals/82/2a/5b/822a5ba1adb67e6bf5fd24b3b30c633f.png" style="position: absolute; top: -45px; left: 10px; width: 135px; height: auto;">
      <img src="https://i.pinimg.com/originals/20/1c/6e/201c6e09f233b23ec74322f444cfecb1.png" style="position: absolute; top: -45px; left: 120px; width: 135px; height: auto;">
    </div>
      <h2>Driver History Information</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
        <th style="border: 1px solid black; padding: 8px;">Request By</th>

        <th style="border: 1px solid black; padding: 8px;">Pick UP Point</th>
        <th style="border: 1px solid black; padding: 8px;">Drop Off Point</th>
        <th style="border: 1px solid black; padding: 8px;">Time Requested</th>

          <th style="border: 1px solid black; padding: 8px;">Driver</th>
          <th style="border: 1px solid black; padding: 8px;">Plate Number</th>
        
      

          <th style="border: 1px solid black; padding: 8px;">Time Accepted</th>

          <th style="border: 1px solid black; padding: 8px;">Ride Ended</th>

        </tr>
    `;
    historyData.forEach(history => {
      const parseCustomDate = (dateString) => {
        // Splitting the date string by spaces, commas, or " at "
        const parts = dateString.split(/[\s,]+| at /);
        const monthIndex = isNaN(parseInt(parts[0])) ? 0 : 1; // Determining the index of the month part
        let month = isNaN(parseInt(parts[0])) ? parts[0] : parts[1]; // Extracting the month
        // Convert full month name to abbreviated form
        if (month.length > 3) {
          month = month.substring(0, 3);
        }
        const day = parseInt(parts[monthIndex + 1].replace(',', '')); // Extracting the day
        const year = parseInt(parts[monthIndex + 2]); // Extracting the year
        const time = parts[monthIndex + 3] || ''; // Extracting the time; if not present, set to empty string
    
        return {
          month: month,
          day: day,
          year: year,
          time: time
        };
      };
    
      // Parsing timeAccepted string into date components
      const parsedDate = parseCustomDate(history.timeAccepted);
    
      // Formatting the time component
      const formattedTime = parsedDate.time.replace(/([0-9]{1,2}:[0-9]{2})/, "$1:00"); // Adding seconds if not present
    
      // Constructing the formatted date string
      const formattedTimeAccepted = `${parsedDate.month}/${parsedDate.day}/${parsedDate.year}, ${formattedTime}`;
    
      // Logging the formatted date string
      // console.log('timeAaassddccepted:', formattedTimeAccepted);
      html += `
        <tr>
        <td style="border: 1px solid black; padding: 8px;">${history.requestBy}</td>

        <td style="border: 1px solid black; padding: 8px;">${history.pickupPoint}</td>
        <td style="border: 1px solid black; padding: 8px;">${history.dropOffPoint}</td>
        <td style="border: 1px solid black; padding: 8px;">${history.timeRequested}</td>

          <td style="border: 1px solid black; padding: 8px;">${history.driverName}</td>
          <td style="border: 1px solid black; padding: 8px;">${history.driverPlateNumber}</td>
   

          <td style="border: 1px solid black; padding: 8px;">${history.timeAccepted}</td>

          <td style="border: 1px solid black; padding: 8px;">${history.rideEnded ? formatTimestampp(history.rideEnded) : ''}</td>

        </tr>
      `;
    });
    html += `</table>`;
    
    // Close HTML structure
    html += `
        </body>
      </html>
    `;

    // Generate PDF and share
    const tempFile = await printToFileAsync({
      html: html,
      base64: false,
    });

    // Define new file name
    const fileName = 'TODAHero_Users_History.pdf';

    // Move temporary file to new location with desired file name
    const newPath = `${FileSystem.documentDirectory}${fileName}`;
    await FileSystem.moveAsync({
      from: tempFile.uri,
      to: newPath,
    });

    // Share the new file with desired file name
    await shareAsync(newPath, {
      mimeType: 'application/pdf',
      dialogTitle: 'Share Drivers Information',
      UTI: 'com.adobe.pdf',
      filename: fileName,
    });
    setDownloadHistoryLoading(false);


  } catch (error) {
    console.error('Error generating PDF:', error);
    setDownloadHistoryLoading(false);

  }
};



  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Admin')} style={styles.backButton}>
          {/* <Text style={styles.backButton}>asd<Ionicons name="arrow-back-sharp" size={35} color="black" /></Text> */}
          <Ionicons name="arrow-back-sharp" size={35} color="black" />
       </TouchableOpacity>
      {/* <Image source={require('../../assets/logo.png')} style={styles.logo}/> */}

      <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
        <Image source={require('../../assets/logoo.png')} style={styles.logo}/>
      </TouchableOpacity>
      
      <Text style={styles.appusers}>Registered App Users</Text>

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
        {isLoading ? ( // Display loading indicator when isLoading is true
          <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
        ) : (
          <ScrollView style={styles.userList}>
            {filteredUsers.map((user, index) => (
              <TouchableOpacity
                key={index}
                style={styles.userItem}
                onPress={() => handleUserClick(user)}
              >
                {/* <AntDesign name="user" size={20} color="black" />
                <Text style={styles.userName}>{user.name}</Text> */}

                <View style={styles.userRow}>
                  <AntDesign name="user" size={25} color="black" />
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
      
      <View  style={styles.buttoncontainer}>

          {/* <TouchableOpacity style={styles.downloadButton} onPress={generatePdf} >
              <Text style={styles.downloadText}>Download Data</Text>
          </TouchableOpacity> */}

            <TouchableOpacity style={styles.downloadButton} onPress={generatePdf} disabled={downloadDataLoading}>
              {downloadDataLoading ? (
                <ActivityIndicator size="small" color="#ffffff" /> // Show loading indicator
              ) : (
                <Text style={styles.downloadText}>Download Data</Text> // Show text when not loading
              )}
            </TouchableOpacity>

          {/* <TouchableOpacity style={styles.downloadButton} >
              <Text style={styles.downloadText}>Download History</Text>
          </TouchableOpacity> */}

            <TouchableOpacity style={styles.downloadButton} onPress={generateHistoryPdf} disabled={downloadHistoryLoading}>
              {downloadHistoryLoading ? (
                <ActivityIndicator size="small" color="#ffffff" /> // Show loading indicator
              ) : (
                <Text style={styles.downloadText}>Download History</Text> // Show text when not loading
              )}
            </TouchableOpacity>

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
    backgroundColor: '#86A7FC',
    backgroundColor: 'white',
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
    borderWidth: 1,
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
    paddingBottom:20
   
    
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
    backgroundColor:"#ffff"
  },
  userNumber: {
    marginRight: 10,
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
  
  appusers: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  loadingIndicator: {
    alignSelf: 'center', // Center the loading indicator horizontally
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop:0
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
   },

   downloadButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 20,
    width:135,
  
  },
  downloadText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign:'center'
  },
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Optional: Aligns items along the main axis (horizontally)
    alignItems: 'center', // Optional: Aligns items along the cross axis (vertically)
    gap:15,
  },
  
});

export default UserScreen;