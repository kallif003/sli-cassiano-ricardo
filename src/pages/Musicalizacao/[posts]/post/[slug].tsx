/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect } from "react"
import { PagesContainer } from "@/components/atoms"
import Header from "@/components/molecules/Header"
import { createClient } from "../../../../../prismicio"
import { Posts } from "@/utils/interfaces"
import useAuth from "@/hooks/useAuth"
import TeachersPost from "@/components/organisms/TeachersPost"

const Post = ({ post }: Posts) => {
	const { AuthStateChanged } = useAuth()

	useEffect(() => {
		AuthStateChanged()
	}, [AuthStateChanged])

	return (
		<PagesContainer background="/musicalization.png">
			<Head>
				<title>POST</title>

				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<TeachersPost post={post} />
		</PagesContainer>
	)
}

export default Post

export async function getStaticProps(context: any) {
	const { params } = context

	const client = createClient()

	const data = [await client.getByUID(params.posts, params.slug)]

	const post = data.map((e: any) => ({
		slug: e.uid,
		title: e.data.title,
		text: e.data.text[0].text,
		img_one_post: e.data.img_one_post.url,
		alt_one_post: e.data.img_one_post.alt,
		img_two_post: e.data.img_two_post.url,
		alt_two_post: e.data.img_two_post.alt,
		img_three_post: e.data.img_three_post.url,
		alt_three_post: e.data.img_three_post.alt,
	}))

	return {
		props: { post },
	}
}

export async function getStaticPaths() {
	const paths: any[] = []

	return {
		paths,
		fallback: true,
	}
}
