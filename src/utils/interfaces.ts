import { ReactNode } from "react"

export interface IConfig {
	apiKey: string
	authDomain: string
	projectId: string
	storageBucket: string
	messagingSenderId: string
	appId: string
}

export interface Props {
	children: ReactNode
}

export interface PropsContextType {
	firebaseConfig: IConfig | undefined
	setFirebaseConfig: Function
}

export interface FirebaseContextType {
	firebase: any
}
