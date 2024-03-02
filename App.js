import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AdminScreen from './screens/AdminScreen';
import LoginScreen from './screens/LoginScreen';
import LogoutScreen from './screens/Admin/LogoutScreen';
import TodaDriverScreen from './screens/Admin/TodaDriverScreen';

import RegistrationScreen from './screens/Admin/RegistrationScreen';
import UserScreen from './screens/Admin/UserScreen';
import ReportsScreen from './screens/Admin/ReportsScreen';

import LoadingScreen from './screens/LoadingScreen';
import PassengerScreen from './screens/Admin/Registration/PassengerScreen';

import PassengerScreenRegistered from './screens/Admin/Registration/PassengerScreenRegistered';

import DriverScreen from './screens/Admin/Registration/DriverScreen';

import UserDetailsScreen from './screens/Admin/UserDetailsScreen';

import DriverQRScreen from './screens/Admin/Registration/DriverQRScreen';

import QRCodeScreen from './screens/Admin/QRCodeScreen';

import TodaDriverDetailsScreen from './screens/Admin/TodadriverDetailScreen';

import PasswordResetScreen from './screens/PasswordResetScreen';

import { firebase } from './config';
import UserHistoryScreen from './screens/Admin/UserHistoryScree';
import UserHistoryDetailScreen from './screens/Admin/UserHistoryDetailScreen';
import DriverHistoryScreen from './screens/Admin/DriverHistoryScreen';
import DriverHistoryDetailScreen from './screens/Admin/DriverHistoryDetailScreen';
import ReportDetailScreen from './screens/Admin/ReportScreenDetails';





//Firebase code

const Stack = createNativeStackNavigator();

// function App () {
//   const [ initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }
//   useEffect(() => {
//     const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//   }, []);
//   if (initializing) return null;

//   if (!user) {

const App = () => {


  


// until here...

  return (

    <NavigationContainer>
      
      {/* <Stack.Navigator initialRouteName="Login"> */}
       <Stack.Navigator initialRouteName="Loading" options={{ headerShown: false }}>
       {/* <Stack.Navigator initialRouteName="Admin" options={{ headerShown: false }}>  */}
       
        <Stack.Screen name="Admin" component={AdminScreen} options={{headerShown: false}}/>
        <Stack.Screen name="TODA Drivers" component={TodaDriverScreen} options={{headerShown: false}} />
        <Stack.Screen name="TODA Drivers Details" component={TodaDriverDetailsScreen} options={{headerShown: false}} />
        <Stack.Screen name="User" component={UserScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} options={{headerShown: false}}/>

        <Stack.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false,
          // headerTitle: () => null, 
          // TO REMOVE THE HEADER TEXTS

        }} />
        <Stack.Screen name="Reports" component={ReportsScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false, headerLeft: null,
         gestureEnabled: false, }} />
        <Stack.Screen name="Logout" component={LogoutScreen} />
        
        <Stack.Screen name="Loading" component={LoadingScreen} options={{headerShown: false}}/>

        <Stack.Screen name="PassengerScreen" component={PassengerScreen} options={{headerShown: false}}/>
       
        <Stack.Screen name="PassengerScreenRegistered" component={PassengerScreenRegistered} options={{headerShown: false}}/>
        <Stack.Screen name="Driver" component={DriverScreen} options={{headerShown: false}}/>

        <Stack.Screen name="DriverQR" component={DriverQRScreen} options={{headerShown: false}}/>
        <Stack.Screen name="QRCode" component={QRCodeScreen}options={{headerShown: false}} />

        <Stack.Screen name="PasswordReset" component={PasswordResetScreen}options={{headerShown: false}} />

        
        <Stack.Screen name="UserHistoryScreen" component={UserHistoryScreen}options={{headerShown: false}} />
        <Stack.Screen name="UserHistoryDetailScreen" component={UserHistoryDetailScreen}options={{headerShown: false}} />
        
        <Stack.Screen name="DriverHistoryScreen" component={DriverHistoryScreen}options={{headerShown: false}} />
        <Stack.Screen name="DriverHistoryDetailScreen" component={DriverHistoryDetailScreen}options={{headerShown: false}} />

        <Stack.Screen name="ReportScreenDetails" component={ReportDetailScreen}options={{headerShown: false}} />


        
      </Stack.Navigator>
    </NavigationContainer>
  );
  //} //remove this after
};

export default App;

// export default () => {
//   return (
//     <NavigationContainer>
//       <App />
//     </NavigationContainer>
//   )
// }


