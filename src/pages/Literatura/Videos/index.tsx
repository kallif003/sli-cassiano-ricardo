/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect, useState } from "react"
import { PagesContainer, FloatingButton } from "@/components/atoms"
import Header from "@/components/molecules/Header"
import Video from "@/components/organisms/Videos"
import { createClient } from "../../../../prismicio"
import { IVideos } from "@/utils/interfaces"
import useAuth from "@/hooks/useAuth"
import { useRouter } from "next/router"
import { mdiArrowLeft } from "@mdi/js"
import Icon from "@mdi/react"

const Videos = () => {
	const [videos, setVideos] = useState<IVideos[]>([])

	const { AuthStateChanged } = useAuth()

	const router = useRouter()

	const getVideos = async () => {
		const client = createClient()

		const data = await client.getAllByType("videos", {
			orderings: [
				{
					field: "document.first_publication_date",
					direction: "desc",
				},
			],
		})

		const videos = data.map((e: any) => ({
			slug: e.uid,
			title: e.data.title,
			videos: e.data.videos.url,
			date: e.data.date,
			link_type: e.data.videos.link_type,
		}))

		setVideos(videos)
	}

	useEffect(() => {
		AuthStateChanged()
		getVideos()
	}, [AuthStateChanged])

	return (
		<PagesContainer background="/literature.png">
			<Head>
				<title>VIDEOS</title>

				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<Video videos={videos} />

			<FloatingButton onClick={router.back}>
				<Icon path={mdiArrowLeft} size={1} />
			</FloatingButton>
		</PagesContainer>
	)
}

export default Videos
