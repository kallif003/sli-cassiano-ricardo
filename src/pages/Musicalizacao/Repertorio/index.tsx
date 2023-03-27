/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect } from "react"
import { PagesContainer } from "@/components/atoms"
import Header from "@/components/molecules/Header"
import Repertoire from "@/components/organisms/Repertoire"
import { createClient } from "../../../../prismicio"
import { IRepertoire } from "@/utils/interfaces"
import useAuth from "@/hooks/useAuth"

const RepertoirePage = ({ repertoire }: IRepertoire) => {
	const { AuthStateChanged } = useAuth()

	useEffect(() => {
		AuthStateChanged()
	}, [AuthStateChanged])

	return (
		<PagesContainer background="/musicalization.png">
			<Head>
				<title>REPERTÓRIO</title>

				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<Repertoire repertoire={repertoire} />
		</PagesContainer>
	)
}

export default RepertoirePage

export async function getStaticProps() {
	const client = createClient()

	const data = await client.getAllByType("repertoire", {
		orderings: [
			{ field: "document.first_publication_date", direction: "desc" },
		],
	})

	const repertoire = data.map((e: any) => ({
		slug: e.uid,
		title: e.data.titulo,
		video: e.data.video.url || "",
		lyrics: e.data.letramusica.url,
		link_type: e.data.video.link_type,
	}))

	return {
		props: {
			repertoire,
		},
	}
}
