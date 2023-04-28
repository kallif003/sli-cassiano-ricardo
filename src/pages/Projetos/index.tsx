/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect, useState } from "react"
import { PagesContainer, FloatingButton } from "@/components/atoms"
import useAuth from "@/hooks/useAuth"
import Header from "@/components/molecules/Header"
import Projects from "@/components/organisms/Projects"
import { createClient } from "../../../prismicio"
import { IProjects } from "@/utils/interfaces"
import { useRouter } from "next/router"
import { mdiArrowLeft } from "@mdi/js"
import Icon from "@mdi/react"

const Projetos = () => {
	const [project, setProject] = useState<IProjects[]>([])

	const { AuthStateChanged } = useAuth()
	const router = useRouter()

	const getProjects = async () => {
		const client = createClient()

		const data = await client.getAllByType("projects", {
			orderings: [
				{
					field: "document.first_publication_date",
					direction: "desc",
				},
			],
		})

		const project = data.map((e: any) => ({
			slug: e.uid,
			title: e.data.title,
			text: e.data.text,
			img_one_project: e.data.img_one_project.url,
			alt_one_project: e.data.img_one_project.alt,

			img_two_project: e.data.img_two_project.url,
			alt_two_project: e.data.img_two_project.alt,

			img_three_project: e.data.img_three_project.url,
			alt_three_project: e.data.img_three_project.alt,

			img_four_project: e.data.img_four_project.url,
			alt_four_project: e.data.img_four_project.alt,
		}))

		setProject(project)
	}

	useEffect(() => {
		AuthStateChanged()
		getProjects()
	}, [AuthStateChanged])

	return (
		<PagesContainer background="/wallpaper.png">
			<Head>
				<title>PROJETOS</title>

				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<Projects project={project} />

			<FloatingButton onClick={router.back}>
				<Icon path={mdiArrowLeft} size={1} />
			</FloatingButton>
		</PagesContainer>
	)
}

export default Projetos
