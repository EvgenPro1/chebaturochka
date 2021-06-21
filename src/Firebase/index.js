import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBWinUXCFBjEWciMvVkxonz0BmHDtJZTv0",
    authDomain: "chebaturochka-b0fe3.firebaseapp.com",
    projectId: "chebaturochka-b0fe3",
    storageBucket: "chebaturochka-b0fe3.appspot.com",
    messagingSenderId: "293863058190",
    appId: "1:293863058190:web:c634a120221789fc4ac55f",
    measurementId: "G-64HF0T1M0G"
};



export const fire = firebase.initializeApp(firebaseConfig)

/*
// Allow read/write access to all users under any conditions
// Warning: **NEVER** use this rule set in production; it allows
// anyone to overwrite your entire database.
service cloud.firestore {
    match /databases/{database}/documents {
    match /{document=**} {
        allow read, write: if true;
    }
}
}*/
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.6.8/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.6.8/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
*/