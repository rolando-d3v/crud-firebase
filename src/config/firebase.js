import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyABTEjEvktAwstWMeYthz3YrbZOiSbbNQw",
    authDomain: "react-firebase-bfa03.firebaseapp.com",
    databaseURL: "https://react-firebase-bfa03.firebaseio.com",
    projectId: "react-firebase-bfa03",
    storageBucket: "react-firebase-bfa03.appspot.com",
    messagingSenderId: "928517458789",
    appId: "1:928517458789:web:c367141d3ab24fc79b6f8c"
  };
 

  // inicializando Firebase
  firebase.initializeApp(config)


  export default firebase