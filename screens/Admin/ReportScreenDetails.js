// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ReportDetailScreen = ({ route }) => {
//   const { id, driverName } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Report Details</Text>
//       <Text style={styles.detail}>ID: {id}</Text>
//       <Text style={styles.detail}>Driver Name: {driverName}</Text>
//       {/* Add more details as needed */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   detail: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
// });

// export default ReportDetailScreen;

// //working
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
// import firebase from 'firebase/compat';

// const ReportDetailScreen = ({ route }) => {
//   const { id } = route.params;
//   const [report, setReport] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchReportDetails = async () => {
//       try {
//         const reportRef = firebase.firestore().collection('Report').doc(id);
//         const doc = await reportRef.get();
//         if (doc.exists) {
//           const data = doc.data();
//         //   console.log('Report data:', data); // Log the retrieved data
//           setReport(data);
//         } else {
//           console.log('No such document!');
//         }
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching report details:', error);
//         setIsLoading(false);
//       }
//     };
  
//     fetchReportDetails();
//   }, [id]);
  

//   if (isLoading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   if (!report) {
//     return (
//       <View style={styles.container}>
//         <Text>No data available for this report.</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//           <Image source={require('../../assets/logoo.png')} style={styles.logo}/>
//     <View style={styles.seccontainer}>

    

//       <Text style={styles.text}>Report Details</Text>
//       {/* <Text>ID: {id}</Text> */}
//       {/* <Text>Driver Name: {report.driverName}</Text>
//       <Text>Driver Plate Number: {report.driverPlateNumber}</Text> */}
//       <Text>Report For: {report.driverName} ({report.driverPlateNumber})</Text>

//     <View style={styles.reportContainer}>
//       <Text>Report: {report.report}</Text>
//       </View>
      
//       <Text>Reported By: {report.reporterName}</Text>
//       {/* <Text>Timestamp: {report.timestamp}</Text> */}
//       {/* <Text>User Contact: {report.userContact}</Text> */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   seccontainer: {
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: '#ffd702',
//     height: 400,
//     width: 300,
//     marginTop: -30,
//     padding:20,
//     borderRadius:10
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign:'center'
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 20,
//     marginTop: -80,
//   },
//   reportContainer:{
//     marginTop:20,
//     marginBottom:20,

//     backgroundColor:'white',
//     height:200,
//     width:"100%",
//     padding:10
//   }
// });

// export default ReportDetailScreen;






import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, BackHandler  } from 'react-native';
import firebase from 'firebase/compat';
import { useNavigation } from '@react-navigation/native';

const ReportDetailScreen = ({ route }) => {
  const { id } = route.params;
  const [report, setReport] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

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

  useEffect(() => {
    const fetchReportDetails = async () => {
      try {
        const reportRef = firebase.firestore().collection('Report').doc(id);
        const doc = await reportRef.get();
        if (doc.exists) {
          const data = doc.data();
          setReport(data);
        } else {
          console.log('No such document!');
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching report details:', error);
        setIsLoading(false);
      }
    };
  
    fetchReportDetails();
  }, [id]);
  

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logoo.png')} style={styles.logo}/>
      <View style={styles.seccontainer}>
        <Text style={styles.text}>Report Details</Text>

        {isLoading ? (
          <View style={styles.reportContainer}>
            <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
          </View>
        ) : (
          <>
            <Text>Report For: {report?.reported}</Text>
            <View style={styles.reportContainer}>
              <Text>Report: {report?.report}</Text>
            </View>
            <Text>Reported By: {report?.reportedBy}</Text>
            <Text>Time Reported: {report?.timeReported.toDate().toLocaleString()}</Text>
          </>
        )}
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  seccontainer: {
    backgroundColor: '#ffd702',
    height: 400,
    width: 300,
    marginTop: -30,
    padding:20,
    borderRadius:10
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 130,
    marginTop: -170,
  },
  reportContainer:{
    marginTop:20,
    marginBottom:20,
    backgroundColor:'white',
    height:200,
    width:"100%",
    padding:10
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ReportDetailScreen;
