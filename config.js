import Firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBfLxUEg10CmSLjMV8lQyN5vLbO-SfDD6Q",
  authDomain: "reactnative-store.firebaseapp.com",
  databaseURL: "https://reactnative-store.firebaseio.com",
  projectId: "reactnative-store",
  storageBucket: "reactnative-store.appspot.com",
  messagingSenderId: "39022907",
  appId: "1:39022907:web:58d564153264f5f381c71e",
  measurementId: "G-6MJNPX4R7T",
};
const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
