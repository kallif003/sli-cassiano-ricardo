import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyBI6KIDn_AvgUJg0kQzjkA76BtDUk8_H8A",
	authDomain: "slicassianoricardo-78ae9.firebaseapp.com",
	projectId: "slicassianoricardo-78ae9",
	storageBucket: "slicassianoricardo-78ae9.appspot.com",
	messagingSenderId: "1075094855720",
	appId: "1:1075094855720:web:d26983b5f89a182775551d",
}

// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

export default firebase
