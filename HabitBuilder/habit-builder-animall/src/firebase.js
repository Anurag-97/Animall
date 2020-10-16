// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCeCxXdMozHRKvMi6b9MdEIHFz2a-Pzmyk",
    authDomain: "animall-4df54.firebaseapp.com",
    databaseURL: "https://animall-4df54.firebaseio.com",
    projectId: "animall-4df54",
    storageBucket: "animall-4df54.appspot.com",
    messagingSenderId: "202277056803",
    appId: "1:202277056803:web:0c55d87a412dfbcfa09c96",
    measurementId: "G-SDE0BGC1YJ"
  };
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider}