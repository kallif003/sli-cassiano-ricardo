/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect } from "react"
import { PagesContainer } from "@/components/atoms"
import useAuth from "@/hooks/useAuth"
import Header from "@/components/molecules/Header"
import Newspaper from "@/components/organisms/Newspaper"
import { createClient } from "../../../prismicio"
import { INews } from "@/utils/interfaces"

const Projetos = ({ news }: INews) => {
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
			<Newspaper news={news} />
		</PagesContainer>
	)
}

export default Projetos

export async function getStaticProps() {
	const client = createClient()

	const data = await client.getAllByType("newspaper", {
		orderings: [
			{ field: "document.first_publication_date", direction: "desc" },
		],
	})

	const news = data.map((e: any) => ({
		slug: e.uid,
		introdution: e.data.introdution[0].text,
		first_title_page_one: e.data.first_title_page_one,
		first_text_page_one: e.data.first_text_page_one[0].text,
		first_img_page_one: e.data.first_img_page_one.url,
		alt_first_img_page_one: e.data.first_img_page_one.alt,
		second_title_page_one: e.data.second_title_page_one,
		second_text_page_one: e.data.second_text_page_one[0].text,
		second_img_page_one: e.data.second_img_page_one.url,
		alt_second_img_page_one: e.data.second_img_page_one.alt,
		first_title_page_two: e.data.first_title_page_two,
		first_text_page_two: e.data.first_text_page_two[0].text,
		first_img_page_two: e.data.first_img_page_two.url,
		alt_first_img_page_two: e.data.first_img_page_two.alt,
		second_title_page_two: e.data.second_title_page_two,
		second_text_page_two: e.data.second_text_page_two[0].text,
		second_img_page_two: e.data.second_img_page_two.url,
		alt_second_img_page_two: e.data.second_img_page_two.alt,
		edition: e.data.edition[0].text,
		responsible: e.data.responsible[0].text,
	}))
	return {
		props: { news },
	}
}
