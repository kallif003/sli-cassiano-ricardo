import Head from "next/head"
import React from "react"
import { Container, Login, Welcome } from "@/components"
import { NextPage } from "next"

const LoginPage: NextPage = () => {
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
