import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAONyjJ5YrcbrhpWHZWCz9r5BCjP4D-zRc',
  authDomain: 'very-hot-burgers-1f5b1.firebaseapp.com',
  databaseURL: 'https://very-hot-burgers-1f5b1-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
