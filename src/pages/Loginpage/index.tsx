import Head from "next/head"
import React from "react"
import { Container, Login, Welcome } from "@/components"

const LoginPage = () => {
	return (
		<Container>
			<Head>
				<title>SLI-CASSINO-RICARDO</title>

				<link rel="icon" href="/logo.ico" />
			</Head>
			<Login />
			<Welcome />
		</Container>
	)
}

export default LoginPage
