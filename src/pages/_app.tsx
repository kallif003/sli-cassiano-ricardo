import "../styles/index.css"
import type { AppProps } from "next/app"
import { AuthProvider } from "../context/AuthProvider"
import React from "react"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	)
}
