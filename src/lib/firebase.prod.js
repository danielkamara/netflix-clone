import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// need a config 
const config = {
    apiKey: "AIzaSyAR8tLgf5jOXP2JogSi0K37nYPX0vAzdds",
    authDomain: "netflix-clone-6dc90.firebaseapp.com",
    databaseURL: "https://netflix-clone-6dc90.firebaseio.com",
    projectId: "netflix-clone-6dc90",
    storageBucket: "netflix-clone-6dc90.appspot.com",
    messagingSenderId: "825324096510",
    appId: "1:825324096510:web:30417192f3f62263880eaf"
}
const firebase = Firebase.initializeApp(config) 



export { firebase }