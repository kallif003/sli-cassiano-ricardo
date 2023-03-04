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

export interface PropsContextType {}

export interface FirebaseContextType {
	firebase: any
}
