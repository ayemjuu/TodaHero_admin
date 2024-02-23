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
import { View, Text, StyleSheet } from 'react-native';
import { firebase } from '../../config'; // Import your Firebase config

const UserHistoryDetailScreen = ({ route }) => {
  const { itemId } = route.params;
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const docRef = firebase.firestore().collection('history').doc(itemId);
        const docSnapshot = await docRef.get();
        if (docSnapshot.exists) {
          const data = docSnapshot.data();
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

  const formatDate = (timestamp) => {
    const date = timestamp.toDate(); // Convert Firestore Timestamp to JavaScript Date object
    return date.toLocaleString(); // Format the date as a locale-specific string
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User History Detail</Text>
      <View style={styles.detailContainer}>
        {/* <Text>Item ID: {itemId}</Text> */}
        {itemData && (
          <View>
            <Text style={styles.texts}>Time Requested: {itemData.timeRequested}</Text>
            <Text style={styles.texts}>Driver Name: {itemData.driverName}</Text>
            <Text style={styles.texts}>Driver Plate Number: {itemData.driverPlateNumber}</Text>
            <Text style={styles.texts}>Pickup Point: {itemData.pickupPoint}</Text>
            <Text style={styles.texts}>Drop-off Point: {itemData.dropOffPoint}</Text>
            {/* <Text>Requested By: {itemData.requestBy}</Text> */}
            {/* <Text>Requested By Contact Number: {itemData.requestByContactNumber}</Text> */}
            <Text style={styles.texts}>Ride Ended: {formatDate(itemData.rideEnded)}</Text>
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
    padding:20
  },
  texts:{
    fontSize:18,
    
  },
});

export default UserHistoryDetailScreen;
