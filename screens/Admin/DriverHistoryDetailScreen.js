// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { firebase } from '../../config'; 
// import { useRoute } from '@react-navigation/native';

// const DriverHistoryDetailScreen = () => {
//   const route = useRoute();
//   const { itemId } = route.params;
//   const [historyItem, setHistoryItem] = useState(null);

//   useEffect(() => {
//     const fetchHistoryItem = async () => {
//       try {
//         const historyRef = firebase.firestore().collection('history').doc(itemId);
//         const doc = await historyRef.get();
//         if (doc.exists) {
//           setHistoryItem(doc.data());
//         } else {
//           console.log('No such document!');
//         }
//       } catch (error) {
//         console.error('Error fetching history item:', error);
//       }
//     };

//     fetchHistoryItem();
//   }, [itemId]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>History Detail</Text>
//       {historyItem ? (
//         <View style={styles.detailsContainer}>
//           <Text>Ride Ended: {historyItem.rideEnded && historyItem.rideEnded.toDate().toLocaleString()}</Text>
//           {/* Add more details as needed */}
//         </View>
//       ) : (
//         <Text>Loading...</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white'
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20
//   },
//   detailsContainer: {
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start'
//   }
// });

// export default DriverHistoryDetailScreen;







// //working below
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { firebase } from '../../config'; 

// const DriverHistoryDetailScreen = ({ route }) => {
//   const { itemId } = route.params;
//   const [itemData, setItemData] = useState(null);

//   useEffect(() => {
//     const fetchItemData = async () => {
//       try {
//         const docRef = firebase.firestore().collection('history').doc(itemId);
//         const docSnapshot = await docRef.get();
//         if (docSnapshot.exists) {
//           const data = docSnapshot.data();
//           setItemData(data);
//         } else {
//           console.log('No such document!');
//         }
//       } catch (error) {
//         console.error('Error fetching item data:', error);
//       }
//     };

//     fetchItemData();
//   }, [itemId]);

//   // Function to format timestamp string
//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toDateString() + ' at ' + date.toLocaleTimeString();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Driver History Detail</Text>
//       <View style={styles.detailContainer}>
//         {itemData && (
//           <View>
//             {/* Display all details of the history item here */}
//             <Text style={styles.texts}>Driver Name: {itemData.driverName}</Text>
//             <Text style={styles.texts}>Driver Plate Number: {itemData.driverPlateNumber}</Text>
//             <Text style={styles.texts}>Pickup Point: {itemData.pickupPoint}</Text>
//             <Text style={styles.texts}>Drop-off Point: {itemData.dropOffPoint}</Text>
//             <Text style={styles.texts}>Requested By: {itemData.requestBy}</Text>
//             <Text style={styles.texts}>Requested By Contact Number: {itemData.requestByContactNumber}</Text>
//             <Text style={styles.texts}>Ride Ended: {formatDate(itemData.rideEnded)}</Text>
//             {/* <Text>Successful: {itemData.successful ? 'Yes' : 'No'}</Text> */}
//             <Text style={styles.texts}>Time Accepted: {formatDate(itemData.timeAccepted)}</Text>
//             <Text style={styles.texts}>Time Requested: {itemData.timeRequested}</Text>
//             {/* Add more fields as needed */}
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   detailContainer: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     width: '80%',
//     backgroundColor:'#ffd702',
//     height:500,
//     width:300,
//   },
//   texts:{
//     fontSize:18
//   },
// });

// export default DriverHistoryDetailScreen;



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import { firebase } from '../../config'; 

// const DriverHistoryDetailScreen = ({ route }) => {
//   const { itemId } = route.params;
//   const [itemData, setItemData] = useState(null);

//   useEffect(() => {
//     const fetchItemData = async () => {
//       try {
//         const docRef = firebase.firestore().collection('history').doc(itemId);
//         const docSnapshot = await docRef.get();
//         if (docSnapshot.exists) {
//           const data = docSnapshot.data();
//           // Convert Firestore Timestamps to JavaScript Date objects
//           data.timeAccepted = data.timeAccepted ? data.timeAccepted.toDate() : null;
//           data.rideEnded = data.rideEnded ? data.rideEnded.toDate() : null;
//           setItemData(data);
//         } else {
//           console.log('No such document!');
//         }
//       } catch (error) {
//         console.error('Error fetching item data:', error);
//       }
//     };

//     fetchItemData();
//   }, [itemId]);

//   // Function to format timestamp string
//   const formatDate = (timestamp) => {
//     if (!timestamp) return ''; // Return empty string if timestamp is null
//     const date = new Date(timestamp);
//     return date.toDateString() + ' at ' + date.toLocaleTimeString();
//   };

//   return (
//     <View style={styles.container}>
//          <Image source={require('../../assets/logoo.png')} style={styles.logo}/>
//       <Text style={styles.title}>Driver History Detail</Text>
//       <View style={styles.detailContainer}>
//         {itemData && (
//           <View>
//             {/* Display all details of the history item here */}
//             <Text style={styles.texts}>Driver Name: {itemData.driverName}</Text>
//             <Text style={styles.texts}>Driver Plate Number: {itemData.driverPlateNumber}</Text>
//             <Text style={styles.texts}>Pickup Point: {itemData.pickupPoint}</Text>
//             <Text style={styles.texts}>Drop-off Point: {itemData.dropOffPoint}</Text>
//             <Text style={styles.texts}>Requested By: {itemData.requestBy}</Text>
//             {/* <Text style={styles.texts}>Requested By Contact Number: {itemData.requestByContactNumber}</Text> */}
//             <Text style={styles.texts}>Ride Ended: {formatDate(itemData.rideEnded)}</Text>
//             {/* <Text>Successful: {itemData.successful ? 'Yes' : 'No'}</Text> */}
//             {/* <Text style={styles.texts}>Time Accepted: {formatDate(itemData.timeAccepted)}</Text> */}
//             {/* <Text style={styles.texts}>Time Requested: {itemData.timeRequested}</Text> */}
//             {/* Add more fields as needed */}
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   detailContainer: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 30,
//     width: '80%',
//     backgroundColor:'#ffd702',
//     height:500,
//     width:300,
//   },
//   texts:{
//     fontSize:18,
//     marginBottom:10,
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -80,
//   },
// });

// export default DriverHistoryDetailScreen;




//working 3-5-24
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { firebase } from '../../config';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation
// import { Ionicons } from '@expo/vector-icons';


// const DriverHistoryDetailScreen = ({ route }) => {
//   const { itemId } = route.params;
//   const [itemData, setItemData] = useState(null);
//   const navigation = useNavigation(); // Initialize navigation

//   useEffect(() => {
//     const fetchItemData = async () => {
//       try {
//         const docRef = firebase.firestore().collection('history').doc(itemId);
//         const docSnapshot = await docRef.get();
//         if (docSnapshot.exists) {
//           const data = docSnapshot.data();
//           if (data.timeAccepted) {
//             data.timeAccepted = new Date(data.timeAccepted); // Parse string to Date object
//           }
//           if (data.rideEnded) {
//             data.rideEnded = new Date(data.rideEnded); // Parse string to Date object
//           }
//           setItemData(data);
//         } else {
//           console.log('No such document!');
//         }
//       } catch (error) {
//         console.error('Error fetching item data:', error);
//       }
//     };
    

//     fetchItemData();
//   }, [itemId]);

//   const formatDate = (timestamp) => {
//     if (!timestamp) return '';
//     const date = new Date(timestamp);
//     return date.toDateString() + ' at ' + date.toLocaleTimeString();
//   };

//   const handleBack = () => {
//     navigation.goBack(); // Navigate back to the previous screen
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={handleBack} style={styles.backButton}>
//         {/* <Text style={styles.backButtonText}>Back</Text> */}
//         <Ionicons name="arrow-back-sharp" size={35} color="black" />

//       </TouchableOpacity>




//       <Image source={require('../../assets/logoo.png')} style={styles.logo}/>
//       <Text style={styles.title}>Driver History Detail</Text>
//       <View style={styles.detailContainer}>
//         {itemData && (
//           <View>
//             <Text style={styles.texts}>Driver Name: {itemData.driverName}</Text>
//             <Text style={styles.texts}>Driver Plate Number: {itemData.driverPlateNumber}</Text>
//             <Text style={styles.texts}>Pickup Point: {itemData.pickupPoint}</Text>
//             <Text style={styles.texts}>Drop-off Point: {itemData.dropOffPoint}</Text>
//             <Text style={styles.texts}>Requested By: {itemData.requestBy}</Text>
//             {/* <Text style={styles.texts}>Ride Ended: {formatDate(itemData.rideEnded)}</Text> */}
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   detailContainer: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 20,
//     padding: 30,
//     width: '80%',
//     backgroundColor: '#ffd702',
//     height: 500,
//     width: 300,
//   },
//   texts: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   logo: {
//     width: 160,
//     height: 160,
//     marginBottom: 10,
//     marginTop: -100,
//   },
//   backButton: {
//     // position: 'absolute',
//     // top: 20,
//     // left: 20,
//     // padding: 10,

//     position: 'absolute',
//     top: 50,
//     left: 20,
//   },
//   backButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'blue',
//   },
// });

// export default DriverHistoryDetailScreen;


//test

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { firebase } from '../../config';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { Ionicons } from '@expo/vector-icons';


const DriverHistoryDetailScreen = ({ route }) => {
  const { itemId } = route.params;
  const [itemData, setItemData] = useState(null);
  const navigation = useNavigation(); // Initialize navigation

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const docRef = firebase.firestore().collection('history').doc(itemId);
        const docSnapshot = await docRef.get();
        if (docSnapshot.exists) {
          const data = docSnapshot.data();
     
            // Parse timeAccepted if present
            // if (data.timeAccepted) {
            //   data.timeAccepted = parseDateFromString(data.timeAccepted);
            // }

            if (data.rideEnded) {
              data.rideEnded = data.rideEnded.toDate();
            }
          if (data.timeRequested) {
            data.timeRequested = parseDateFromString(data.timeRequested); // Parse string to Date object
          }
          setItemData(data);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching item data:', error);
      }
    };
    
    fetchItemData();
  }, [itemId]);

  // const formatDate = (timestamp) => {
  //   if (!timestamp) return '';
  //   const date = new Date(timestamp);
  //   return date.toDateString() + ' at ' + date.toLocaleTimeString();
  // };

  // const formatDate = (timestamp) => {
  //   if (!timestamp) return '';
  //   const date = new Date(timestamp);
  //   const options = {
  //     year: 'numeric', month: 'long', day: 'numeric',
  //     hour: 'numeric', minute: 'numeric', second: 'numeric',
  //     hour12: false,
  //     timeZone: 'UTC',
  //     timeZoneName: 'short'
  //   };
  //   return date.toLocaleString('en-US', options);
  // };

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    const options = {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: 'numeric', minute: 'numeric',
      hour12: true,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone // Use local timezone
    };
    return date.toLocaleString('en-US', options);
  };
  

  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };



const parseDateFromString = (dateString) => {
  if (!dateString) {
    console.log('Date string is undefined or empty');
    return null;
  }

  console.log('Original date string:', dateString);
  const parts = dateString.match(/(\w+) (\d{1,2}), (\d{4}) at (\d{1,2}):(\d{2}):(\d{2})/);
  if (!parts) {
    console.error('Invalid date string format:', dateString);
    return null;
  }
  
  const [, month, day, year, hour, minute, second] = parts;
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthIndex = monthNames.findIndex(monthName => monthName === month);
  const manualParsedDate = new Date(year, monthIndex, day, hour, minute, second);
  console.log('Manual parsed date:', manualParsedDate);
  return manualParsedDate;
};



  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back-sharp" size={35} color="black" />
      </TouchableOpacity>

      {/* <Image source={require('../../assets/logoo.png')} style={styles.logo}/> */}
      <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
        <Image source={require('../../assets/logoo.png')} style={styles.logo}/>
      </TouchableOpacity>

      <Text style={styles.title}>History Detail</Text>
      <View style={styles.detailContainer}>
        {itemData && (
          <View>
            <Text style={styles.texts}>Driver Name: {itemData.driverName}</Text>
            <Text style={styles.texts}>Driver Plate Number: {itemData.driverPlateNumber}</Text>
            <Text style={styles.texts}>Pickup Point: {itemData.pickupPoint}</Text>
            <Text style={styles.texts}>Drop-off Point: {itemData.dropOffPoint}</Text>
            <Text style={styles.texts}>Requested By: {itemData.requestBy}</Text>
            <Text style={styles.texts}>Started: {formatDate(itemData.timeRequested)}</Text>
            {/* <Text style={styles.texts}>Accepted: {formatDate(itemData.timeAccepted)}</Text> */}
            <Text style={styles.texts}>Ended: {formatDate(itemData.rideEnded)}</Text>


            {/* {itemData.report && (
              <Text style={styles.texts}>This driver is reported as: {itemData.report}</Text>
            )} */}

            
{/* {itemData.report && (
              <Text style={styles.texts}>The driver did'nt attend</Text>
            )} */}



           
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    height:'50%',
    backgroundColor: '#ffd702',
   
    alignContent:'center',
    justifyContent: 'center'
  },
  texts: {
    fontSize: 17,
    marginBottom: 15,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 60,
    marginTop: -170,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
});

export default DriverHistoryDetailScreen;



//test 2

