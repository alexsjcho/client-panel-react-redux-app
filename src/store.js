import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

//Reducers

//@todos

const firebaseConfig = {
  apiKey: "AIzaSyCv2tGGtLuKNlIYtLx90S5hPFjnQuNvyDI",
  authDomain: "clientpanel-react-app.firebaseapp.com",
  databaseURL: "https://clientpanel-react-app.firebaseio.com",
  projectId: "clientpanel-react-app",
  storageBucket: "clientpanel-react-app.appspot.com",
  messagingSenderId: "183835649581"
};

// React-Redux-Firebase Config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize Firebase Instance
firebase.initializeApp(firebaseConfig);

//Initialize Firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase) //
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

//Create initial state
const initialState = {};

//Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX__DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
