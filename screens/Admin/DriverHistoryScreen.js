// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // const DriverHistoryScreen = ({ route }) => {
// //   const { name } = route.params;

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Driver History</Text>
// //       <Text style={styles.subtitle}>History for: {name}</Text>
// //       {/* Add your history components or data fetching logic here */}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     backgroundColor: 'white'
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20
// //   },
// //   subtitle: {
// //     fontSize: 18,
// //     marginBottom: 10
// //   }
// // });

// // export default DriverHistoryScreen;



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { firebase } from '../../config'; 
// import { useNavigation } from '@react-navigation/native';

// const DriverHistoryScreen = ({ route }) => {
//   const { name } = route.params;
//   const [driverHistory, setDriverHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchDriverHistory = async () => {
//       try {
//         const historyRef = firebase.firestore().collection('history').where('driverName', '==', name);
//         const snapshot = await historyRef.get();
//         const historyData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

//         historyData.sort((a, b) => {
//           return b.rideEnded && a.rideEnded ? b.rideEnded - a.rideEnded : 0;
//         });

//         setDriverHistory(historyData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching driver history:', error);
//         setLoading(false);
//       }
//     };

//     fetchDriverHistory();
//   }, [name]);

//   const handleHistoryItemClick = (itemId) => {
//     navigation.navigate('DriverHistoryDetailScreen', { itemId });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logoo.png')} style={styles.logo}/>
//       <Text style={styles.title}>{name} Ride History</Text>
//       <View style={styles.seccontainer}>
//         {loading ? (
//           <ActivityIndicator size="large" color="#0000ff" />
//         ) : (
//           <ScrollView style={styles.scrollView}>
//             {driverHistory.map((item) => (
//               <TouchableOpacity key={item.id} onPress={() => handleHistoryItemClick(item.id)}>
//                 <View style={styles.historyItem}>
//                   <Text>Ride Ended: {item.rideEnded && item.rideEnded.toDate().toLocaleString()}</Text>
//                   {/* <Text>User ID: {item.id}</Text> */}

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
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     padding: 20,
//   },
//   seccontainer:{
//     backgroundColor:'#ffd702',
//     height:500,
//     width:300,
//     padding:20,
//     // borderRadius:20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   scrollView: {
//     width: '100%',
//   },
//   historyItem: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 5,
//     width: '100%',
//     height:48,
//     backgroundColor: '#ffff'
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -80,
//   },
// });

// export default DriverHistoryScreen;



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator, BackHandler } from 'react-native';
// import { firebase } from '../../config'; 
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';


// const DriverHistoryScreen = ({ route }) => {
//   const { name } = route.params;
//   const [driverHistory, setDriverHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchDriverHistory = async () => {
//       try {
//         const historyRef = firebase.firestore().collection('history').where('driverName', '==', name);
//         const snapshot = await historyRef.get();
//         const historyData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

//         historyData.sort((a, b) => {
//           return b.rideEnded && a.rideEnded ? b.rideEnded - a.rideEnded : 0;
//         });

//         setDriverHistory(historyData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching driver history:', error);
//         setLoading(false);
//       }
//     };

//     fetchDriverHistory();

//     // Handle back button press
//     const backAction = () => {
//       navigation.goBack();
//       return true; // Prevent default behavior
//     };

//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       backAction
//     );

//     return () => backHandler.remove();
//   }, [name, navigation]);

//   const handleHistoryItemClick = (itemId) => {
//     navigation.navigate('DriverHistoryDetailScreen', { itemId });
//   };


//   const handleBack = () => {
//     navigation.goBack(); // Navigate back to the previous screen
//   };
//   return (
//     <View style={styles.container}>
//            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
//           <Ionicons name="arrow-back-sharp" size={35} color="black" />
//        </TouchableOpacity>
//       {/* <Image source={require('../../assets/logoo.png')} style={styles.logo}/> */}
//       <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
//         <Image source={require('../../assets/logoo.png')} style={styles.logo}/>
//       </TouchableOpacity>

//       <Text style={styles.title}>{name} Ride History</Text>
//       <View style={styles.seccontainer}>
//         {loading ? (
//           <ActivityIndicator size="large" color="#0000ff" />
//         ) : (
//           <ScrollView style={styles.scrollView}>
//             {driverHistory.map((item) => (
//               <TouchableOpacity key={item.id} onPress={() => handleHistoryItemClick(item.id)}>
//                 <View style={styles.historyItem}>
//                   <Text style={styles.text}>Ride Ended: {item.rideEnded && item.rideEnded.toDate().toLocaleString()}</Text>
//                   {/* <Text>User ID: {item.id}</Text> */}
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
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     padding: 20,
//   },
//   seccontainer:{
//     backgroundColor:'#ffd702',
//     // height:500,
//     // width:300,
//     padding:20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius:20,
//     width:"90%",
//     height:"70%"

//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign:'center'
//   },
//   scrollView: {
//     width: '100%',
//   },
//   historyItem: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 5,
//     width: '100%',
//     height:48,
//     backgroundColor: '#ffff'
//   },
//   logo: {
//     width: 160,
//     height: 160,
//     marginBottom: 10,
//     marginTop: -30,
//   },

//   backButton: {
//     position: 'absolute',
//     top: 50,
//     left: 20,
//    },

//    text: {
//     fontSize:13,
//     textAlign:'center',
//     marginTop:3
   
//    }
// });

// export default DriverHistoryScreen;





import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator, BackHandler } from 'react-native';
import { firebase } from '../../config'; 
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const DriverHistoryScreen = ({ route }) => {
  const { name } = route.params;
  const [driverHistory, setDriverHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchDriverHistory = async () => {
      try {
        const historyRef = firebase.firestore().collection('history').where('driverName', '==', name);
        const snapshot = await historyRef.get();
        const historyData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        historyData.sort((a, b) => {
          return b.rideEnded && a.rideEnded ? b.rideEnded - a.rideEnded : 0;
        });

        setDriverHistory(historyData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching driver history:', error);
        setLoading(false);
      }
    };

    fetchDriverHistory();

    // Handle back button press
    const backAction = () => {
      navigation.goBack();
      return true; // Prevent default behavior
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [name, navigation]);

  const handleHistoryItemClick = (itemId) => {
    navigation.navigate('DriverHistoryDetailScreen', { itemId });
  };


  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  const formatRideEndedTime = (rideEnded) => {
    const options = {
      month: 'short', // Short month name (e.g., "MAR")
      day: '2-digit', // Two-digit day (e.g., "11")
      year: 'numeric', // Full year (e.g., "2024")
      hour: 'numeric', // Hour (e.g., "10")
      minute: '2-digit', // Two-digit minute (e.g., "00")
      hour12: true // 12-hour clock format
    };
    return rideEnded.toDate().toLocaleString(undefined, options);
  };
  
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back-sharp" size={35} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
        <Image source={require('../../assets/logoo.png')} style={styles.logo}/>
      </TouchableOpacity>

      <Text style={styles.title}>{name} Ride History</Text>
      <View style={styles.seccontainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ScrollView style={styles.scrollView}>
            {driverHistory.length > 0 ? (
              driverHistory.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => handleHistoryItemClick(item.id)}>
                  <View style={styles.historyItem}>
                    {/* <Text style={styles.text}>Ride Ended: {item.rideEnded && item.rideEnded.toDate().toLocaleString()}</Text> */}
                    <Text style={styles.text}>Ride Ended: {item.rideEnded && formatRideEndedTime(item.rideEnded)}</Text>

                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.textno}>No History as of now</Text>
            )}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  seccontainer:{
    backgroundColor:'#ffd702',
    padding:20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
    width:"90%",
    height:"70%"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
  },
  scrollView: {
    width: '100%',
  },
  historyItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height:48,
    backgroundColor: '#ffff'
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 10,
    marginTop: -30,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  text: {
    fontSize:13,
    textAlign:'center',
    marginTop:3
  },

  textno:{
    fontSize:20,
    textAlign:'center',
    marginTop:220

  }
});

export default DriverHistoryScreen;
