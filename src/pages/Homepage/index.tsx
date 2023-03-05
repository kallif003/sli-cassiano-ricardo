import Head from "next/head"
import React from "react"
import Home from "../../components/organisms/Home"
import Footer from "../../components/molecules/Footer"
import { NextPage } from "next"

const Homepage: NextPage = () => {
	return (
		<>
			<Head>
				<title>SLI-CASSINO-RICARDO</title>

				<link rel="icon" href="/logo.ico" />
			</Head>
			<Home />
			<Footer />
		</>
	)
}

export default Homepage
