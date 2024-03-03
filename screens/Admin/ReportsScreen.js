// import React, { useState} from 'react';
// import { View, Text, StyleSheet, BackHandler, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import { FontAwesome } from '@expo/vector-icons';

// const ReportsScreen = () => {

//   // const navigation = useNavigation();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedUser, setSelectedUser] = useState(null); // To store the selected user for displaying info

//   // Dummy data for demonstration
//   const users = [
//     { id: 1, name: 'User 1', info: 'Info about User 1' },
//     { id: 2, name: 'User 2', info: 'Info about User 2' },
//     { id: 3, name: 'User 3', info: 'Info about User 3' },
//     { id: 4, name: 'User 4', info: 'Info about User 4' },
//     { id: 5, name: 'User 5', info: 'Info about User 5' },
//     { id: 6, name: 'User 6', info: 'Info about User 6' },
//     { id: 7, name: 'User 7', info: 'Info about User 7' },
//     { id: 8, name: 'User 8', info: 'Info about User 8' },
//     { id: 9, name: 'User 9', info: 'Info about User 9' },
//     { id: 10, name: 'User 10', info: 'Info about User 10' },
//   ];


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

//   //    const goToReports = () => {
//   //    navigation.navigate('Reports');
//   //  };

//   const goToSearch = () => {
//     // Handle navigation to search screen or perform search based on searchQuery
//     // For example:
//     // navigation.navigate('Search', { searchQuery });
//     // or perform search logic here
//   };

//   const handleUserClick = (user) => {
//     // Set the selected user and display their info
//     setSelectedUser(user);
//   };

//   return (
//     <View style={styles.container}>
//     <Image source={require('../../assets/logo.png')} style={styles.logo} />
//     <Text style={styles.title}>Reports</Text>

//     {/* Search input and button with magnifying glass icon */}
//     <View style={styles.searchContainer}>
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search..."
//         value={searchQuery}
//         onChangeText={(text) => setSearchQuery(text)}
//       />
//       <TouchableOpacity style={styles.searchButton} onPress={goToSearch}>
//         <FontAwesome name="search" size={24} color="black" />
//       </TouchableOpacity>
//     </View>

//     {/* Scrollable container for user buttons */}
//     <ScrollView style={styles.userButtonContainer}>
//       {users.map((user) => (
//         <TouchableOpacity
//           key={user.id}
//           style={styles.userButton}
//           onPress={() => handleUserClick(user)}
//         >
//           <Text style={styles.userButtonText}>{user.name}</Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>

//     {/* Container to display user information */}
//     <View style={styles.userInfoContainer}>
//       {selectedUser && (
//         <>
//           <Text style={styles.userInfoText}>User Information:</Text>
//           <Text>{selectedUser.info}</Text>
//         </>
//       )}
//     </View>
//   </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     padding: 40,
//   },

//   logo: {
//     width: 210, // Adjust width as needed
//     height: 210, // Adjust height as needed
//     marginBottom: -20,
//     marginTop: -90,
//   },

//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//   },

//   searchInput: {
//     flex: 1,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingLeft: 10,
//     borderTopLeftRadius: 50,
//     borderBottomLeftRadius: 50,
//   },

//   searchButton: {
//     padding: 6,
//     backgroundColor: '#A0E9FF',
//     borderTopRightRadius: 50,
//     borderBottomRightRadius: 50,
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },

//   userButtonContainer: {
//     marginTop: 20,
//     width: '100%', // Make the scrollable container take 100% width
//     maxHeight: 400, // Set a max height for the scrollable container
//   },

//   userButton: {
//     backgroundColor: '#A0E9FF',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//     width: '100%', // Make the button take 100% width
//   },

//   userButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

//   userInfoContainer: {
//     marginTop: 20,
//   },

//   userInfoText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });

// export default ReportsScreen;



// //gumagana
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, BackHandler, Image, TextInput, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import firebase from 'firebase/compat';
// import { FontAwesome } from '@expo/vector-icons';


// const ReportsScreen = () => {
//   const navigation = useNavigation();
//   const [reports, setReports] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(true);

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


//   const formatTimestamp = (timestamp) => {
//     const date = timestamp.toDate();
//     const today = new Date();
//     const yesterday = new Date(today);
//     yesterday.setDate(yesterday.getDate() - 1);
  
//     if (date.toDateString() === today.toDateString()) {
//       // Today
//       return 'Today ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     } else if (date.toDateString() === yesterday.toDateString()) {
//       // Yesterday
//       return 'Yesterday ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     } else {
//       // Other days
//       return date.toLocaleDateString('en-US', { weekday: 'short' });
//     }
//   };


//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const reportsCollection = firebase.firestore().collection('Report');
//         const snapshot = await reportsCollection.get();
//         const fetchedReports = snapshot.docs.map(doc => ({ 
//           id: doc.id, 
//           driverName: doc.data().driverName,
//           reported: doc.data().reported,
//           reporterName: doc.data().reporterName,
          
//           ...doc.data() 
//         }));
//         setReports(fetchedReports);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching reports:', error);
//       }
//     };

//     fetchReports();
//   }, []);


//   const handleReportClick = (report) => {
//     navigation.navigate('ReportScreenDetails', {
//       id: report.id,
//       driverName: report.driverName,
//     });
//   };

//   const filteredReports = reports.filter((report) =>
//     report.id.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by ID
//   );

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logoo.png')} style={styles.logo}/>
//       <Text style={styles.reps}>Reports</Text>

//       <View style={styles.searchContainer}>
//       <View style={styles.reportInputContainer}>
//           <FontAwesome name="search" size={20} color="black" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search name..."
//             value={searchQuery}
//             onChangeText={(text) => setSearchQuery(text)}
//           />
//         </View>
//       </View>

//       <View style={styles.reportListContainer}>
//         {isLoading ? (
//           <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
//         ) : (
//           <ScrollView style={styles.reportList}>
//             {filteredReports.map((report, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={styles.reportItem}
//                 onPress={() => handleReportClick(report)}
//               >
//                 {/* <Text style={styles.reportId}>{report.id}</Text>  */}
//                 <Text style={styles.reportName}> {report.reported}</Text>
//                 {/* <Text style={styles.reportName}>Driver Name: {report.reporterName}</Text> */}
//                 {/* <Text style={styles.reportName}>{report.name}</Text>  */}


//                 {/* <Text style={styles.reportTitle}>{report.title}</Text> */}
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
//   reportInputContainer: {
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
//   reportListContainer: {
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
//   reportList: {
//     flex: 1,
//     width: '100%',
    
//   },
//   reportItem: {
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
//   reportName: {
//     fontSize: 16,
//     color: 'black',
//   },
//   logo: {
//     width: 160,
//     height: 160,
//     marginBottom: -20,
//     marginTop: -50,
//   },
  
//   reps: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 40,
//   },
//   loadingIndicator: {
//     alignSelf: 'center', // Center the loading indicator horizontally
//   },
// });

// export default ReportsScreen;




import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, BackHandler, Image, TextInput, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import firebase from 'firebase/compat';
import { FontAwesome } from '@expo/vector-icons';


const ReportsScreen = () => {
  const navigation = useNavigation();
  const [reports, setReports] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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

  const formatTimestamp = (timestamp) => {
    const date = timestamp.toDate();
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      // Today
      return 'Today ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (date.toDateString() === yesterday.toDateString()) {
      // Yesterday
      return 'Yesterday ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      // Other days
      return date.toLocaleDateString('en-US', { weekday: 'short' });
    }
  };

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const reportsCollection = firebase.firestore().collection('Report');
        const snapshot = await reportsCollection.get();
        const fetchedReports = snapshot.docs.map(doc => ({
          id: doc.id,
          driverName: doc.data().driverName,
          reported: doc.data().reported,
          reporterName: doc.data().reporterName,

          ...doc.data()
        }));
        setReports(fetchedReports);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

  const handleReportClick = (report) => {
    navigation.navigate('ReportScreenDetails', {
      id: report.id,
      driverName: report.driverName,
    });
  };

  const filteredReports = reports.filter((report) =>
    report.reported.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logoo.png')} style={styles.logo} />
      <Text style={styles.reps}>Reports</Text>

      <View style={styles.searchContainer}>
        <View style={styles.reportInputContainer}>
          <FontAwesome name="search" size={20} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search name..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      </View>

      <View style={styles.reportListContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
        ) : (
          <ScrollView style={styles.reportList}>
            {filteredReports.map((report, index) => (
              <TouchableOpacity
                key={index}
                style={styles.reportItem}
                onPress={() => handleReportClick(report)}
              >
                <Text style={styles.reportName}> {report.report}</Text>
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
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reportInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
  },
  reportListContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffd702',
    borderRadius: 25,
    paddingTop: 10,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    justifyContent: 'center', // Center the loading indicator vertically
    alignItems: 'center', // Center the loading indicator horizontally
  },
  reportList: {
    flex: 1,
    width: '100%',
  },
  reportItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '100%',
    height: 48,
    backgroundColor: "#ffff"
  },
  reportName: {
    fontSize: 16,
    color: 'black',
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: -20,
    marginTop: -50,
  },
  reps: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  loadingIndicator: {
    alignSelf: 'center', // Center the loading indicator horizontally
  },
});

export default ReportsScreen;
