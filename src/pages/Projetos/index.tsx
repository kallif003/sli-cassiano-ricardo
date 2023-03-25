/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect } from "react"
import { PagesContainer } from "@/components/atoms"
import useAuth from "@/hooks/useAuth"
import Header from "@/components/molecules/Header"
import Projects from "@/components/organisms/Projects"
import { createClient } from "../../../prismicio"
import { IProject } from "@/utils/interfaces"

const Projetos = ({ project }: IProject) => {
	const { AuthStateChanged } = useAuth()

	useEffect(() => {
		AuthStateChanged()
	}, [AuthStateChanged])

	return (
		<PagesContainer background="/wallpaper.png">
			<Head>
				<title>PROJETOS</title>

				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<Projects project={project} />
		</PagesContainer>
	)
}

export default Projetos

export async function getStaticProps() {
	const client = createClient()

	const data = await client.getAllByType("projects", {
		orderings: [
			{ field: "document.first_publication_date", direction: "desc" },
		],
	})

	const project = data.map((e: any) => ({
		slug: e.uid,
		title: e.data.title,
		text: e.data.text[0].text,
		img_one_project: e.data.img_one_project.url,
		alt_one_project: e.data.img_one_project.alt,

		img_two_project: e.data.img_two_project.url,
		alt_two_project: e.data.img_two_project.alt,

		img_three_project: e.data.img_three_project.url,
		alt_three_project: e.data.img_three_project.alt,

		img_four_project: e.data.img_four_project.url,
		alt_four_project: e.data.img_four_project.alt,
	}))

	return {
		props: { project },
	}
}
