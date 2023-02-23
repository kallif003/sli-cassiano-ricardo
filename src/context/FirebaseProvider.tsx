import React, { createContext } from "react"
import { Props, FirebaseContextType } from "../utils/interfaces"
import useProps from "@/hooks/useProps"
import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"

const FirebaseContext = createContext({} as FirebaseContextType)

export const FirebaseProvider = ({ children }: Props) => {
	const { firebaseConfig } = useProps()

	console.log(firebaseConfig)

	const api = "AIzaSyBI6KIDn_AvgUJg0kQzjkA76BtDUk8_H8A"

	const FirebaseConfig = {
		apiKey: api,
		authDomain: firebaseConfig?.authDomain,
		projectId: firebaseConfig?.projectId,
		storageBucket: firebaseConfig?.messagingSenderId,
		messagingSenderId: firebaseConfig?.messagingSenderId,
		appId: firebaseConfig?.appId,
	}

	// Initialize Firebase
	if (!firebase.apps.length) {
		firebase.initializeApp(FirebaseConfig)
	}

	return (
		<FirebaseContext.Provider value={{ firebase }}>
			{children}
		</FirebaseContext.Provider>
	)
}

export default FirebaseContext
