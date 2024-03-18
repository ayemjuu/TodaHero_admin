import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, BackHandler, Image, TouchableOpacity, Alert, ActivityIndicator, TouchableHighlight  } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import firebase from 'firebase/compat';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';



const TodaDriverDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { name, contactNumber, address, username, plateNumber } = route.params;
//   console.log("Plate Number:", plateNumber); // Add this line
  const [registrationDate, setRegistrationDate] = useState(null);
  const [qrCode, setQRCode] = useState(null);

  const [loading, setLoading] = useState(false); // State to manage loading

  // may delay dito
  useEffect(() => {
    
    const fetchRegistrationDate = async () => {
      try {
        const userRef = firebase.firestore().collection('Drivers').where('name', '==', name);
        const snapshot = await userRef.get();
        if (!snapshot.empty) {
          // Assuming there's only one matching document for the username
          snapshot.forEach((doc) => {
            const data = doc.data();
            if (data.registrationTime) {
              setRegistrationDate(data.registrationTime.toDate());
            }

            if (data.qrCode) {
                // Assuming qrCode is a string
                setQRCode(data.qrCode);
                // console.log("QR Code:", data.qrCode); 
              }
                // Log user name
                console.log("User Name:", name);
                console.log("Document ID:", doc.id);
          });
        }
      } catch (error) {
        console.error('Error fetching registration date:', error);
      }
    };

    fetchRegistrationDate();

  //     // Log user name
  // console.log("User Name:", name);
  // console.log("Document ID:", doc.id);
  }, [name]);

  // useEffect(() => {
  //   const fetchRegistrationDate = async () => {
  //     try {
  //       const userRef = firebase.firestore().collection('Users')
  //         .where('username', '==', username)
  //         .orderBy('registrationTime', 'desc') // Assuming registrationTime field is used
  //         .limit(1); // Limiting to 1 document assuming you want the latest registration
  //       const snapshot = await userRef.get();
  //       if (!snapshot.empty) {
  //         snapshot.forEach((doc) => {
  //           const data = doc.data();
  //           if (data.registrationTime) {
  //             setRegistrationDate(data.registrationTime.toDate());
  //           }
  //         });
  //       }
  //     } catch (error) {
  //       console.error('Error fetching registration date:', error);
  //     }
  //   };
  
  //   fetchRegistrationDate();
  // }, [username]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('TODA Drivers');
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [navigation]),
  );

  const handleQRCodePress = () => {
    // Navigate to the QRCode screen and pass necessary data
    navigation.navigate('QRCode', { name, plateNumber, qrCode });
  
  };

  const handleHistoryPress = () => {
    navigation.navigate('DriverHistoryScreen', { name });
  };



  const handleDelete = async () => {
    // Show confirmation dialog before deleting
    Alert.alert(
      "Delete User",
      "Are you sure you want to delete this user?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: async () => {
            setLoading(true);
            try {
              const userRef = firebase.firestore().collection('Drivers').where('name', '==', name);
              const snapshot = await userRef.get();
              if (!snapshot.empty) {
                snapshot.forEach((doc) => {
                  doc.ref.delete();
                  console.log("Document deleted successfully!");
                });
              } else {
                console.log("No matching documents found.");
              }
              // Navigate back to the Admin screen after deletion
              navigation.navigate('Admin');
              Alert.alert("Success", "Account deleted successfully.");
            } catch (error) {
              console.error('Error deleting document:', error);
            } finally {
              setLoading(false); // Set loading state to false
            }
          },
          style: "destructive"
        }
      ]
    );
  };


//   return (
//     <View style={styles.Container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo}/>
//       <View style={styles.container}>
//         {/* <Image source={require('../../assets/logo.png')} style={styles.logo}/> */}
//         <Image
//         source={require('../../assets/admin.png')} // Change the path accordingly
//         style={styles.adminlogo}
//       />
//         <Text style={styles.name}>  <AntDesign name="user" size={22} color="black" /> {name}</Text>
//         <Text style={styles.text}><FontAwesome name="drivers-license-o" size={19} color="black" /> {plateNumber} </Text>
//         <Text style={styles.text}> <AntDesign name="phone" size={20} color="black" /> {contactNumber}</Text>
//         <Text style={styles.address}> <AntDesign name="home" size={20} color="black" /> {address}</Text>
        
//         {registrationDate && (
//           <Text style={styles.date}>
//             {registrationDate.toDateString()} {/* Customize date format as needed */}
//           </Text>
          
//         )}

// {/* {qrCode && (
//   <Text style={styles.qrCode}>QR Code: {qrCode}</Text>
// )} */}

//         <Text style={styles.date}> (Registered Since:)</Text>

//         <TouchableOpacity style={styles.history} >
//           <Text style={styles.buttonHistory}>History</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.history} onPress={handleQRCodePress}>
//           <Text style={styles.buttonHistory}>QR Code</Text>
//         </TouchableOpacity>
//       </View>

//     </View>
//   );
// };


return (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('TODA Drivers')} style={styles.backButton}>
          {/* <Text style={styles.backButton}>asd<Ionicons name="arrow-back-sharp" size={35} color="black" /></Text> */}
          <Ionicons name="arrow-back-sharp" size={35} color="black" />
       </TouchableOpacity>
    {/* <Image source={require('../../assets/logo.png')} style={styles.logo}/> */}


    <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>
    </TouchableOpacity>

    <View style={styles.contentContainer}>
      {/* <Image source={require('../../assets/admin.png')} style={styles.adminlogo}/> */}
      <View style={styles.textContainer}>

      <Text style={styles.driverdetails}>Driver Details</Text>

        <Text style={styles.name}><AntDesign name="user" size={20} color="black" /> • {name}</Text>
        <Text style={styles.text}><FontAwesome name="drivers-license-o" size={19} color="black" /> • {plateNumber}</Text>
        <Text style={styles.text}><AntDesign name="phone" size={20} color="black" /> • {contactNumber}</Text>
        <Text style={styles.text}><AntDesign name="home" size={20} color="black" /> • {address}</Text>
        {registrationDate && (
          <Text style={styles.text}><AntDesign name="calendar" size={20} color="black" /> • {registrationDate.toDateString()}</Text>
        )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.history} onPress={handleQRCodePress}>
          <Text style={styles.buttonHistory}><AntDesign name="qrcode" size={20} color="black" /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.history} onPress={handleHistoryPress}>
           <Text style={styles.buttonHistory}><MaterialIcons name="history" size={20} color="black" /></Text>
         </TouchableOpacity>
         {/* <TouchableOpacity style={styles.history} onPress={handleDelete}>
           <Text style={styles.buttonHistory}>Delete</Text>
         </TouchableOpacity> */}

          {/* <TouchableOpacity style={styles.history} onPress={handleDelete}>
               {loading ? (
                 <ActivityIndicator size="small" color="blue" />
               ) : (
                 <Text style={styles.buttonHistory}><AntDesign name="delete" size={20} color="black" /></Text>
               )}
          </TouchableOpacity> */}

<TouchableHighlight
  style={styles.history}
  onPress={handleDelete}
  underlayColor="red" // Change the background color when pressed
>
  {loading ? (
    <ActivityIndicator size="small" color="blue" />
  ) : (
    <Text style={[styles.buttonHistory, { color: 'red' }]}>
      <AntDesign name="delete" size={20} color="black" />
    </Text>
  )}
</TouchableHighlight>
      </View>
      

      </View>

      {/* <TouchableOpacity style={styles.history} onPress={handleDelete}>
           <Text style={styles.buttonHistory}>Delete</Text>
         </TouchableOpacity>
      </View> */}

      

      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.history} onPress={handleQRCodePress}>
          <Text style={styles.buttonHistory}>QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.history} >
           <Text style={styles.buttonHistory}>History</Text>
         </TouchableOpacity>
      </View> */}
    </View>
  </View>
);
};

const styles = StyleSheet.create({

//   Container:{
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor:"white"

//   },
//   container: {
//     // flex: 1,
//     // alignItems: 'center',
//   //  justifyContent:'flex-start',
//     backgroundColor:"#F9D1F5",
//     height: 500,
//     borderRadius: 25,
//     marginTop: 10,
//     padding: 10,
//     width:300
    
//   },


//   text: {
//     fontSize: 20,
//     // marginBottom: 10,
//   },

//   name: {
//     fontSize:22,
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
//   adminlogo: {
//     width: 120, // Adjust width as needed
//     height: 120, // Adjust height as needed
//     marginBottom: 20,
//     marginTop: -40,
 
//   },

//   history:{
//     marginTop:20,
//     backgroundColor:'#F671E9',
//     borderRadius:25,
//     height:40,
//     width:100,
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

//   qrCode: {
//     fontSize: 15,
//     marginTop: 10,
//   }
// });



container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white'
},
contentContainer: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  backgroundColor: '#ffd702',
  // height: 400,
  borderRadius: 25,
  marginTop: 10,
  padding: 10,
  paddingTop:30,
  // width: 300,
  width:"90%",
  height:"55%"
},
textContainer: {
  flex: 1,
  marginLeft: 10,
  marginTop: 40
},
name: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom:15
},
text: {
  fontSize: 20,
  marginBottom: 15
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
  marginTop:-150,
},
adminlogo: {
  width: 120,
  height: 120,
  marginBottom: 20,
  marginTop: -40
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
  borderWidth: 1,

},
buttonHistory: {
  fontSize: 16
  
},
buttonContainer:{
flexDirection:'row',
justifyContent:'center',
alignContent:'center',
gap:20,

},

driverdetails:{
  marginTop:-35,
  fontSize:25,
  fontWeight:'bold',
  marginBottom:25,
  // justifyContent:'center',
  textAlign:'center'
},

backButton: {
  position: 'absolute',
  top: 50,
  left: 20,
 },
});



export default TodaDriverDetailsScreen;
