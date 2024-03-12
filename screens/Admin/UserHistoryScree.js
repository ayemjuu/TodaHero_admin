// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const UserHistoryScreen = ({ route }) => {
//   const { username } = route.params;

//   // Sample user history data
//   const userHistory = [
//     { id: 1, action: 'Logged in', date: '2024-02-20' },
//     { id: 2, action: 'Updated profile', date: '2024-02-21' },
//     { id: 3, action: 'Made a purchase', date: '2024-02-22' },
//     // Add more sample history items as needed
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User History for {username}</Text>
//       {userHistory.map((item) => (
//         <View key={item.id} style={styles.historyItem}>
//           <Text>Action: {item.action}</Text>
//           <Text>Date: {item.date}</Text>
//         </View>
//       ))}
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
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   historyItem: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     width: '100%',
//   },
// });

// export default UserHistoryScreen;



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { firebase } from '../../config'; // Import your Firebase config

// const UserHistoryScreen = ({ route }) => {
//   const { name } = route.params;
//   console.log("Name:", name);
//   const [userHistory, setUserHistory] = useState([]);

//   useEffect(() => {
//     const fetchUserHistory = async () => {
//       try {
//         const historyRef = firebase.firestore().collection('history').where('requestBy', '==', name);
//         const snapshot = await historyRef.get();
//         const historyData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setUserHistory(historyData);
//       } catch (error) {
//         console.error('Error fetching user history:', error);
//       }
//     };

//     fetchUserHistory();
//   }, [name]);

//   return (
//     <View style={styles.container}>
//           <Text style={styles.title}>User History for {name}</Text>
//         <View style={styles.secontainer}>

//             {/* <Text style={styles.title}>User History for {name}</Text> */}
//             {userHistory.map((item) => (
//                 <View key={item.id} style={styles.historyItem}>
                
//                 <Text>User ID: {item.id}</Text> 
//                 </View>
//             ))}
//         </View>    
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
//   secontainer:{
//     backgroundColor:'lightblue',
//     height:600,
//     width:300

//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   historyItem: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     width: '100%',
//   },
// });

// export default UserHistoryScreen;





//working beolow
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'; // Import ScrollView
// import { firebase } from '../../config'; // Import your Firebase config
// import { useNavigation } from '@react-navigation/native';


// const UserHistoryScreen = ({ route }) => {
//   const { name } = route.params;
//   console.log("Name:", name);
//   const [userHistory, setUserHistory] = useState([]);
//   const navigation = useNavigation();



// useEffect(() => {
//     const fetchUserHistory = async () => {
//       try {
//         const historyRef = firebase.firestore().collection('history').where('requestBy', '==', name);
//         const snapshot = await historyRef.get();
//         const historyData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
//         // Sort the history data based on the rideEnded time
//         historyData.sort((a, b) => {
//           return b.rideEnded && a.rideEnded ? b.rideEnded - a.rideEnded : 0;
//         });
  
//         setUserHistory(historyData);
//       } catch (error) {
//         console.error('Error fetching user history:', error);
//       }
//     };
  
//     fetchUserHistory();
//   }, [name]);
  


//   const handleHistoryItemClick = (itemId) => {
//     // Navigate to UserHistoryDetailScreen and pass the item id
//     navigation.navigate('UserHistoryDetailScreen', { itemId });
//   };

//   return (
//     <View style={styles.container}>
//         <Image source={require('../../assets/logoo.png')} style={styles.logo}/>
//          <Text style={styles.title}>{name} Ride History</Text>
//     <View style={styles.seccontainer}>

//       {/* <Text style={styles.title}>User History for {name}</Text> */}
//       {/* Wrap the list in a ScrollView */}
//       <ScrollView style={styles.scrollView}>
//         {userHistory.map((item) => (
//         //   <View key={item.id} style={styles.historyItem}>
//         //     <Text>User ID: {item.id}</Text>
//         //   </View>
//         <TouchableOpacity key={item.id} onPress={() => handleHistoryItemClick(item.id)}>
//               <View style={styles.historyItem}>
//                 {/* <Text>User ID: {item.id}</Text> */}
//                 <Text>Ride Ended: {item.rideEnded && item.rideEnded.toDate().toLocaleString()}</Text>
//               </View>
//             </TouchableOpacity>
//         ))}
//       </ScrollView>
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
//     borderRadius:20
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
//   },
//   logo: {
//     width: 210, // Adjust width as needed
//     height: 210, // Adjust height as needed
//     marginBottom: 10,
//     marginTop: -80,
//   },
// });

// export default UserHistoryScreen;




import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator, BackHandler  } from 'react-native'; // Import ScrollView
import { firebase } from '../../config'; // Import your Firebase config
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

const UserHistoryScreen = ({ route }) => {
  const { name } = route.params;
  console.log("Name:", name);
  const [userHistory, setUserHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();


  useEffect(() => {
    const fetchUserHistory = async () => {
      try {
        const historyRef = firebase.firestore().collection('history').where('requestBy', '==', name);
        const snapshot = await historyRef.get();
        const historyData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Sort the history data based on the rideEnded time
        historyData.sort((a, b) => {
          return b.rideEnded && a.rideEnded ? b.rideEnded - a.rideEnded : 0;
        });

        setUserHistory(historyData);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching user history:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchUserHistory();
  }, [name]);

  const handleHistoryItemClick = (itemId) => {
    // Navigate to UserHistoryDetailScreen and pass the item id
    navigation.navigate('UserHistoryDetailScreen', { itemId });
  };

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true; // Prevent default behavior
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]);

  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>

<TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back-sharp" size={35} color="black" />
       </TouchableOpacity>
      <Image source={require('../../assets/logoo.png')} style={styles.logo}/>
      <Text style={styles.title}>{name} Ride History</Text>
      <View style={styles.seccontainer}>
        {loading ? (
          // Render loading indicator if data is still loading
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          // Render the history data if loading is complete
          <ScrollView style={styles.scrollView}>
            {userHistory.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => handleHistoryItemClick(item.id)}>
                <View style={styles.historyItem}>
                  {/* <Text>User ID: {item.id}</Text> */}
                  <Text style={styles.text}>Ride Ended: {item.rideEnded && item.rideEnded.toDate().toLocaleString()}</Text>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  seccontainer:{
    backgroundColor:'#ffd702',
    // height:500,
    // width:300,
    padding:20,
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
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
   
   }
});

export default UserHistoryScreen;
