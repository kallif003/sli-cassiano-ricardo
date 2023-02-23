import "../styles/index.css"
import type { AppProps } from "next/app"
import { PropsProvider } from "../context/PropsProvider"
import { FirebaseProvider } from "@/context/FirebaseProvider"
import React from "react"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<PropsProvider>
			<FirebaseProvider>
				<Component {...pageProps} />
			</FirebaseProvider>
		</PropsProvider>
	)
}
