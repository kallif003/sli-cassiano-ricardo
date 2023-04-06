/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect } from "react"
import { PagesContainer, FloatingButton } from "@/components/atoms"
import Header from "@/components/molecules/Header"

import useAuth from "@/hooks/useAuth"
import AllPosts from "@/components/organisms/AllPosts"
import { useRouter } from "next/router"
import { mdiArrowLeft } from "@mdi/js"
import Icon from "@mdi/react"

const TodosOsPosts = () => {
	const { AuthStateChanged } = useAuth()
	const router = useRouter()

	const { slug } = router.query

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
			<AllPosts slug={slug as string} />

			<FloatingButton onClick={router.back}>
				<Icon path={mdiArrowLeft} size={1} />
			</FloatingButton>
		</PagesContainer>
	)
}

export default TodosOsPosts
