import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

//we need to somehow seed the database

//we need a config here, put your api details here 
const config = {
    apiKey: "AIzaSyBkkJnBh-DmhcBjlSJPcsJVtV7z_QfTXKY",
  authDomain: "abcd-59687.firebaseapp.com",
  projectId: "abcd-59687",
  storageBucket: "abcd-59687.appspot.com",
  messagingSenderId: "894095777566",
  appId: "1:894095777566:web:270912c6ba8b1f3c05730f"
};

const firebase = Firebase.initializeApp(config);

//dont uncomment this bcz it will dupliacte the database on firebase
//seedDatabase(firebase);

export { firebase };
