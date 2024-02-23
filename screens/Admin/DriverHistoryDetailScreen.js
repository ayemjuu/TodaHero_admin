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



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { firebase } from '../../config'; 

const DriverHistoryDetailScreen = ({ route }) => {
  const { itemId } = route.params;
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const docRef = firebase.firestore().collection('history').doc(itemId);
        const docSnapshot = await docRef.get();
        if (docSnapshot.exists) {
          const data = docSnapshot.data();
          // Convert Firestore Timestamps to JavaScript Date objects
          data.timeAccepted = data.timeAccepted ? data.timeAccepted.toDate() : null;
          data.rideEnded = data.rideEnded ? data.rideEnded.toDate() : null;
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

  // Function to format timestamp string
  const formatDate = (timestamp) => {
    if (!timestamp) return ''; // Return empty string if timestamp is null
    const date = new Date(timestamp);
    return date.toDateString() + ' at ' + date.toLocaleTimeString();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver History Detail</Text>
      <View style={styles.detailContainer}>
        {itemData && (
          <View>
            {/* Display all details of the history item here */}
            <Text style={styles.texts}>Driver Name: {itemData.driverName}</Text>
            <Text style={styles.texts}>Driver Plate Number: {itemData.driverPlateNumber}</Text>
            <Text style={styles.texts}>Pickup Point: {itemData.pickupPoint}</Text>
            <Text style={styles.texts}>Drop-off Point: {itemData.dropOffPoint}</Text>
            <Text style={styles.texts}>Requested By: {itemData.requestBy}</Text>
            <Text style={styles.texts}>Requested By Contact Number: {itemData.requestByContactNumber}</Text>
            <Text style={styles.texts}>Ride Ended: {formatDate(itemData.rideEnded)}</Text>
            {/* <Text>Successful: {itemData.successful ? 'Yes' : 'No'}</Text> */}
            <Text style={styles.texts}>Time Accepted: {formatDate(itemData.timeAccepted)}</Text>
            <Text style={styles.texts}>Time Requested: {itemData.timeRequested}</Text>
            {/* Add more fields as needed */}
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
    borderRadius: 5,
    padding: 10,
    width: '80%',
    backgroundColor:'#ffd702',
    height:500,
    width:300,
  },
  texts:{
    fontSize:18
  },
});

export default DriverHistoryDetailScreen;
