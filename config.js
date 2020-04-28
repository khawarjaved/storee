import Firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCC4rAPUPF8Myrwktz4bjAu0NAP3cwuIyE",
  authDomain: "storee-db.firebaseapp.com",
  databaseURL: "https://storee-db.firebaseio.com",
  projectId: "storee-db",
  storageBucket: "storee-db.appspot.com",
  messagingSenderId: "491925718522",
  appId: "1:491925718522:web:17dc3c46f6c0ca9b305043",
  measurementId: "G-TE9HT1QYZ9"
};
const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
