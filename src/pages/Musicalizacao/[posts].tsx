/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect } from "react"
import { PagesContainer } from "@/components/atoms"
import Header from "@/components/molecules/Header"
import { createClient } from "../../../prismicio"
import { Posts } from "@/utils/interfaces"
import useAuth from "@/hooks/useAuth"
import AllPosts from "@/components/organisms/AllPosts"

const TodosOsPosts = ({ post }: Posts) => {
	const { AuthStateChanged } = useAuth()

	useEffect(() => {
		AuthStateChanged()
	}, [AuthStateChanged])

	return (
		<PagesContainer background="/musicalization.png">
			<Head>
				<title>POSTS</title>

				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<AllPosts post={post} />
		</PagesContainer>
	)
}

export default TodosOsPosts

export async function getStaticProps(context: any) {
	const { params } = context

	const client = createClient()

	const data = await client.getAllByType(params.posts, {
		orderings: [
			{ field: "document.first_publication_date", direction: "desc" },
		],
	})

	const post = data.map((e: any) => ({
		slug: e.uid,
		title: e.data.title,
		text: e.data.text[0].text,
		img_one_post: e.data.img_one_post.url,
		alt_one_post: e.data.img_one_post.alt,
		posts: params.posts,
	}))

	return {
		props: {
			post,
		},
	}
}

export async function getStaticPaths() {
	const data = [
		{ morningTeacher: "posts_professora_musica_manha" },
		{ afternoonTeacher: "posts_professora_musica_tarde" },
	]

	return {
		paths: [
			{
				params: { posts: data[0].morningTeacher },
			},
			{
				params: { posts: data[1].afternoonTeacher },
			},
		],
		fallback: false,
	}
}
