/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect, useState } from "react"
import { PagesContainer, FloatingButton } from "@/components/atoms"
import Header from "@/components/molecules/Header"
import Repertoire from "@/components/organisms/Repertoire"
import { createClient } from "../../../../prismicio"
import { IRepertoires } from "@/utils/interfaces"
import useAuth from "@/hooks/useAuth"
import { useRouter } from "next/router"
import { mdiArrowLeft } from "@mdi/js"
import Icon from "@mdi/react"

const RepertoirePage = () => {
	const [repertoire, setRepertoire] = useState<IRepertoires[]>([])

	const { AuthStateChanged } = useAuth()

	const router = useRouter()

	const getRepertoire = async () => {
		const client = createClient()

		const data = await client.getAllByType("repertoire", {
			orderings: [
				{
					field: "document.first_publication_date",
					direction: "desc",
				},
			],
		})

		const repertoire = data.map((e: any) => ({
			slug: e.uid,
			title: e.data.titulo,
			video: e.data.video.url || "",
			lyrics: e.data.letramusica.url || "",
			link_type: e.data.video.link_type,
		}))

		setRepertoire(repertoire)
	}

	useEffect(() => {
		AuthStateChanged()
		getRepertoire()
	}, [AuthStateChanged])

	return (
		<PagesContainer background="/musicalization.png">
			<Head>
				<title>REPERTÓRIO</title>

				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<Repertoire repertoire={repertoire} />

			<FloatingButton onClick={router.back}>
				<Icon path={mdiArrowLeft} size={1} />
			</FloatingButton>
		</PagesContainer>
	)
}

export default RepertoirePage
