import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDDvAh_6tTStzjm6KhNNYhGV_IqeuRhE0I",
    authDomain: "toooda-eab14.firebaseapp.com",
    projectId: "toooda-eab14",
    storageBucket: "toooda-eab14.appspot.com",
    messagingSenderId: "518146176082",
    appId: "1:518146176082:web:226ef0b25bc08dc28b5b8b"

};

if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);

}

export { firebase };
