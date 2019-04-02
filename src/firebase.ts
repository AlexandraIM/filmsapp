import * as firebase from 'firebase/app';
import 'firebase/firebase-database';

let config = {
  apiKey: "AIzaSyAeYNRj5191QwKNJbWMVvakRASTsT_YbFQ",
  authDomain: "filmsdb-ce541.firebaseapp.com",
  databaseURL: "https://filmsdb-ce541.firebaseio.com",
  projectId: "filmsdb-ce541",
  storageBucket: "filmsdb-ce541.appspot.com",
  messagingSenderId: "838623909312"
};
firebase.initializeApp(config);

let database = firebase.database();

export default database;