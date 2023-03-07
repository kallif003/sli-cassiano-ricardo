import Head from "next/head"
import React, { useEffect } from "react"
import Musicalization from "../../components/organisms/Musicalization"
import Footer from "../../components/molecules/Footer"
import { NextPage } from "next"
import useAuth from "@/hooks/useAuth"
import Header from "@/components/molecules/Header"
import { PagesContainer } from "../../components/atoms"

const Musicalizacao: NextPage = () => {
	const { AuthStateChanged } = useAuth()

	useEffect(() => {
		AuthStateChanged
	}, [])

	return (
		<PagesContainer background="/musicalization.png">
			<Head>
				<title>MUSICALIZAÇÃO</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<Musicalization />
			<Footer />
		</PagesContainer>
	)
}

export default Musicalizacao
