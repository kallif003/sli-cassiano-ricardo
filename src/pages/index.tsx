import React, { useEffect } from "react"
import LoginPage from "./Loginpage"
import useProps from "@/hooks/useProps"
import { IConfig } from "../utils/interfaces"

export default function Home(props: IConfig) {
	const { setFirebaseConfig } = useProps()

	useEffect(() => {
		setFirebaseConfig({
			apiKey: props.apiKey,
			authDomain: props.authDomain,
			projectId: props.projectId,
			storageBucket: props.storageBucket,
			messagingSenderId: props.messagingSenderId,
			appId: props.appId,
		})
	}, [props, setFirebaseConfig])

	return (
		<>
			<LoginPage />
		</>
	)
}

export async function getStaticProps() {
	const apiKey = process.env.API_KEY
	const authDomain = process.env.AUTH_DOMAIN
	const projectId = process.env.PROJECT_ID
	const storageBucket = process.env.STORAGE_BUCKET
	const messagingSenderId = process.env.MESSAGING_SENDER_ID
	const appId = process.env.APP_ID

	return {
		props: {
			apiKey,
			authDomain,
			projectId,
			storageBucket,
			messagingSenderId,
			appId,
		},
	}
}
