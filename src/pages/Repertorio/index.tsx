import Head from "next/head"
import React from "react"
import { PagesContainer } from "@/components/atoms"
import Header from "@/components/molecules/Header"
import Repertoire from "@/components/molecules/Repertoire"
import { createClient } from "../../../prismicio"
import { IRepertoire } from "@/utils/interfaces"

const RepertoirePage = ({ repertoire }: IRepertoire) => {
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
	}))

	return {
		props: {
			repertoire,
		},
	}
}
