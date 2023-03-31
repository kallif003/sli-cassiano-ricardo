/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect } from "react"
import { PagesContainer, FloatingButton } from "@/components/atoms"
import Header from "@/components/molecules/Header"
import Video from "@/components/organisms/Videos"
import { createClient } from "../../../../prismicio"
import { IVideo } from "@/utils/interfaces"
import useAuth from "@/hooks/useAuth"
import { useRouter } from "next/router"

const Videos = ({ videos }: IVideo) => {
	const { AuthStateChanged } = useAuth()

	const router = useRouter()

	useEffect(() => {
		AuthStateChanged()
	}, [AuthStateChanged])

	return (
		<PagesContainer background="/literature.png">
			<Head>
				<title>VIDEOS</title>

				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<Video videos={videos} />

			<FloatingButton onClick={router.back}>Voltar</FloatingButton>
		</PagesContainer>
	)
}

export default Videos

export async function getStaticProps() {
	const client = createClient()

	const data = await client.getAllByType("videos", {
		orderings: [
			{ field: "document.first_publication_date", direction: "desc" },
		],
	})

	const videos = data.map((e: any) => ({
		slug: e.uid,
		title: e.data.title,
		videos: e.data.videos.url,
		date: e.data.date,
		link_type: e.data.videos.link_type,
	}))

	return {
		props: { videos },
	}
}
