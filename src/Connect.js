import firebase from 'firebase';

let config = {
      apiKey: "AIzaSyDiLJgWOdfe6dtyBojv52GQ62HcvmfcYeg",
      authDomain: "connektgg.firebaseapp.com",
      databaseURL: "https://connektgg.firebaseio.com",
      projectId: "connektgg",
      storageBucket: "connektgg.appspot.com",
      messagingSenderId: "298143506231"
};
firebase.initializeApp(config);

export default firebase;