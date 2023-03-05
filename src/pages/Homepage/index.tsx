import Head from "next/head"
import React, { useEffect } from "react"
import Home from "../../components/organisms/Home"
import Footer from "../../components/molecules/Footer"
import { NextPage } from "next"
import useAuth from "@/hooks/useAuth"
import Header from "@/components/molecules/Header"

const Homepage: NextPage = () => {
	const { AuthStateChanged } = useAuth()

	useEffect(() => {
		AuthStateChanged
	}, [])

	return (
		<>
			<Head>
				<title>HOMEPAGE</title>

				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<Home />
			<Footer />
		</>
	)
}

export default Homepage
