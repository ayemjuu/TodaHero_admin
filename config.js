import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {

    //sa may kylevincentmanuel@gmail.com ito na database
    // apiKey: "AIzaSyDDvAh_6tTStzjm6KhNNYhGV_IqeuRhE0I",
    // authDomain: "toooda-eab14.firebaseapp.com",
    // projectId: "toooda-eab14",
    // storageBucket: "toooda-eab14.appspot.com",
    // messagingSenderId: "518146176082",
    // appId: "1:518146176082:web:226ef0b25bc08dc28b5b8b"


    //ETO NAMAN IS SA MAY KAIJUUUUU10@GMAIL.COM
    // apiKey: "AIzaSyAsg1oW1wpZXUcZo0UcFZ57qYWBAJHfasY",
    // authDomain: "todahero-4e7c0.firebaseapp.com",
    // projectId: "todahero-4e7c0",
    // storageBucket: "todahero-4e7c0.appspot.com",
    // messagingSenderId: "617421997910",
    // appId: "1:617421997910:web:aca4e6fc791b36393d38f7",
    // measurementId: "G-B2P699P8YS"

    apiKey: "AIzaSyDjBboCs4iqBnogiInGpHcVvCEDBGokiLU",
    authDomain: "thero-28f02.firebaseapp.com",
    projectId: "thero-28f02",
    storageBucket: "thero-28f02.appspot.com",
    messagingSenderId: "394557839181",
    appId: "1:394557839181:web:53a1bf1d15264d3ab74904",
    measurementId: "G-MB5NB4LDS3"

};

if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);

}

export { firebase };
