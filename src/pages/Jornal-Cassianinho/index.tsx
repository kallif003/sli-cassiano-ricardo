import Head from "next/head"
import React from "react"
import { PagesContainer } from "@/components/atoms"
import { NextPage } from "next"
import Header from "@/components/molecules/Header"
import Newspaper from "@/components/organisms/Newspaper"

const JornalCassianimho: NextPage = () => {
	return (
		<PagesContainer background="/jornal.png">
			<Head>
				<title>JORNAL CASSIANINHO</title>

				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<Newspaper />
		</PagesContainer>
	)
}

export default JornalCassianimho
