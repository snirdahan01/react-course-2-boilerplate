import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyABLw8MOx3N8Cz4HOosLlToee2K_e7wJT4",
    authDomain: "expensify-70926.firebaseapp.com",
    databaseURL: "https://expensify-70926.firebaseio.com",
    projectId: "expensify-70926",
    storageBucket: "expensify-70926.appspot.com",
    messagingSenderId: "610193544344"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
