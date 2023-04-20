/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect } from "react"
import { PagesContainer, FloatingButton } from "@/components/atoms"
import Header from "@/components/molecules/Header"
import useAuth from "@/hooks/useAuth"
import TeachersPost from "@/components/organisms/TeachersPost"
import { useRouter } from "next/router"
import { mdiArrowLeft } from "@mdi/js"
import Icon from "@mdi/react"

const Post = () => {
	const { AuthStateChanged } = useAuth()

	const router = useRouter()

	const { type, slug } = router.query

	useEffect(() => {
		AuthStateChanged()
	}, [AuthStateChanged])

	return (
		<PagesContainer background="/literature.png">
			<Head>
				<title>POST</title>

				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<TeachersPost type={type as string} slug={slug as string} />

			<FloatingButton onClick={router.back}>
				<Icon path={mdiArrowLeft} size={1} />
			</FloatingButton>
		</PagesContainer>
	)
}

export default Post
