import React, { createContext, useState } from "react"
import { Props, AuthContextType } from "../utils/interfaces"
import { useRouter } from "next/router"
import firebase from "../connection/FirebaseConnection"
import { Route } from "@/utils/enum"

const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: Props) => {
	const [loading, setLoading] = useState(false)
	const [disabled, setDisabled] = useState(true)
	const [errorMsg, setErrorMsg] = useState("")
	const router = useRouter()

	async function logout() {
		await firebase
			.auth()
			.signOut()
			.then(() => {
				router.push(Route.LOGIN)
			})
	}

	const AuthStateChanged = async () => {
		await firebase.auth().onAuthStateChanged((user: any) => {
			if (user) {
				return
			} else {
				router.push(Route.LOGIN)
			}
		})
	}

	firebase.auth().onAuthStateChanged((user) => {
		let userSessionTimeout = null

		if (user === null && userSessionTimeout) {
			clearTimeout(userSessionTimeout)
			userSessionTimeout = null
		} else {
			user?.getIdTokenResult().then((idTokenResult) => {
				const authTime = idTokenResult.claims.auth_time * 1000
				const sessionDurationInMilliseconds = 30 * 30 * 1000 // 60 min
				const expirationInMilliseconds =
					sessionDurationInMilliseconds - (Date.now() - authTime)
				userSessionTimeout = setTimeout(
					() => firebase.auth().signOut(),
					expirationInMilliseconds
				)
			})
		}
	})

	const signin = async (email: string, password: string) => {
		setLoading(true)
		setDisabled(true)
		await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((value: any) => {
				router.push(Route.HOME)
				setDisabled(true)
				setLoading(false)
			})
			.catch((error: any) => {
				setErrorMsg("Email ou senha inválidos")
				setLoading(false)
			})
	}

	return (
		<AuthContext.Provider
			value={{
				AuthStateChanged,
				signin,
				logout,
				loading,
				disabled,
				errorMsg,
				setLoading,
				setDisabled,
				setErrorMsg,
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
