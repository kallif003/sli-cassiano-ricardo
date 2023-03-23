/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect } from "react"
import Home from "../../components/organisms/Home"
import Footer from "../../components/molecules/Footer"
import { NextPage } from "next"
import useAuth from "@/hooks/useAuth"
import Header from "@/components/molecules/Header"
import { PagesContainer } from "../../components/atoms"

const Homepage: NextPage = () => {
	const { AuthStateChanged } = useAuth()

	useEffect(() => {
		AuthStateChanged()
	}, [AuthStateChanged])

	return (
		<PagesContainer background="/wallpaper.png">
			<Head>
				<title>HOMEPAGE</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<Home />
			<div className="text-center mb-14 xl:mt-6 mt-[2rem] h-14 xl:h-8">
				<Footer />
			</div>
		</PagesContainer>
	)
}

export default Homepage
