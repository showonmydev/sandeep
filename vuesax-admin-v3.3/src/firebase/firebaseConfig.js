// NOTE
// Please use your own firebase details below. For more details visit: https://pixinvent.com/demo/vuesax-vuejs-admin-dashboard-template/documentation/development/firebaseIntegration.html


import firebase from 'firebase/app'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA9DgdUd6OQMXK5OW09jSlJaavq5CSUXhY",
    authDomain: "thekeyportal.firebaseapp.com",
    databaseURL: "https://thekeyportal.firebaseio.com",
    projectId: "thekeyportal",
    storageBucket: "thekeyportal.appspot.com",
    messagingSenderId: "224881245567"
};

firebase.initializeApp(config);
