import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"

const FirebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_APP_ID,
}

// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp(FirebaseConfig)
}

export default firebase
