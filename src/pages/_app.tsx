import "../styles/index.css"
import type { AppProps } from "next/app"
import { AuthProvider } from "../context/AuthProvider"
import React from "react"
import Link from "next/link"
import { PrismicProvider } from "@prismicio/react"
import { PrismicPreview } from "@prismicio/next"
import { repositoryName } from "../../prismicio"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<PrismicProvider
				internalLinkComponent={(props) => <Link {...props} />}>
				<PrismicPreview repositoryName={repositoryName}>
					<Component {...pageProps} />
				</PrismicPreview>
			</PrismicProvider>
		</AuthProvider>
	)
}
