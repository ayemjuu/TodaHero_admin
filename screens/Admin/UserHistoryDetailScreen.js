// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const UserHistoryDetailScreen = ({ route }) => {
//   const { itemId } = route.params;

//   // Assuming you fetch more details of the history item using the itemId
//   // You can fetch the details from your database or any other source

//   // For this example, let's just display the itemId
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User History Detail</Text>
//       <View style={styles.detailContainer}>
//         <Text>Item ID: {itemId}</Text>
//         {/* Display more details of the history item here */}
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
//   },
// });

// export default UserHistoryDetailScreen;



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { firebase } from '../../config'; // Import your Firebase config
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const UserHistoryDetailScreen = ({ route }) => {
  const { itemId } = route.params;
  const [itemData, setItemData] = useState(null);
  const navigation = useNavigation(); // Initialize navigation

  useEffect(() => {
  //   const fetchItemData = async () => {
  //     try {
  //       const docRef = firebase.firestore().collection('history').doc(itemId);
  //       const docSnapshot = await docRef.get();
  //       if (docSnapshot.exists) {
  //         const data = docSnapshot.data();
  //         setItemData(data);
  //       } else {
  //         console.log('No such document!');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching item data:', error);
  //     }
  //   };

  //   fetchItemData();
  // }, [itemId]);

  const fetchItemData = async () => {
    try {
      const docRef = firebase.firestore().collection('history').doc(itemId);
      const docSnapshot = await docRef.get();
      if (docSnapshot.exists) {
        const data = docSnapshot.data();
   
          // // Parse timeAccepted if present
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
  //   const date = timestamp.toDate(); // Convert Firestore Timestamp to JavaScript Date object
  //   return date.toLocaleString(); // Format the date as a locale-specific string
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

  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  return (
    <View style={styles.container}>
      {/* <Image source={require('../../assets/logoo.png')} style={styles.logo}/> */}

      <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
        <Image source={require('../../assets/logoo.png')} style={styles.logo}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back-sharp" size={35} color="black" />
       </TouchableOpacity>
      <Text style={styles.title}>History Detail</Text>
      <View style={styles.detailContainer}>
        {/* <Text>Item ID: {itemId}</Text> */}
        {itemData && (
          <View>
            {/* <Text style={styles.texts}>Time Requested: {itemData.timeRequested}</Text> */}
            <Text style={styles.texts}>Driver Name: {itemData.driverName}</Text>
            <Text style={styles.texts}>Driver Plate Number: {itemData.driverPlateNumber}</Text>
            <Text style={styles.texts}>Pickup Point: {itemData.pickupPoint}</Text>
            <Text style={styles.texts}>Drop-off Point: {itemData.dropOffPoint}</Text>
            <Text style={styles.texts}>Requested By: {itemData.requestBy}</Text>
            {/* <Text>Requested By Contact Number: {itemData.requestByContactNumber}</Text> */}
            <Text style={styles.texts}>Started: {formatDate(itemData.timeRequested)}</Text>

            <Text style={styles.texts}>Ended: {formatDate(itemData.rideEnded)}</Text>
            {/* <Text style={styles.texts}>Accepted: {formatDate(itemData.timeAccepted)}</Text> */}
            
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
    padding: 30,
    width: '80%',
    backgroundColor:'#ffd702',
    width:"90%",
    height:"50%",
    padding:20,

    alignContent:'center',
    justifyContent: 'center'

  },
  texts:{
    fontSize:17,
    marginBottom:15,
    
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 60,
    marginTop:-170,
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
   },
});

export default UserHistoryDetailScreen;
