/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect } from "react"
import TeachersArea from "../../components/organisms/TeachersArea"
import Footer from "../../components/molecules/Footer"
import useAuth from "@/hooks/useAuth"
import Header from "@/components/molecules/Header"
import {
	FloatingButton,
	PagesContainer,
} from "../../components/atoms"
import { RoomOf, Route } from "@/utils/enum"
import { createClient } from "../../../prismicio"
import { Teachers } from "@/utils/interfaces"
import { useRouter } from "next/router"

const Musicalizacao = ({
	mormingTeacher,
	afternoonTeacher,
}: Teachers) => {
	const { AuthStateChanged } = useAuth()
	const router = useRouter()

	useEffect(() => {
		AuthStateChanged()
	}, [AuthStateChanged])

	return (
		<PagesContainer background="/musicalization.png">
			<Head>
				<title>{RoomOf.MUSICALIZATION}</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<TeachersArea
				lesson={RoomOf.MUSICALIZATION}
				pathProject=""
				pathRepository={Route.REPERTOIRE}
				nameButton="REPERTÓRIO/VÍDEOS"
				nameIcon="music"
				morningTeacher={mormingTeacher}
				afternoonTeacher={afternoonTeacher}
				mormingTeacherSlug={"posts_professora_musica_manha"}
				afternoonTeacherSlug={"posts_professora_musica_tarde"}
			/>

			<Footer />

			<FloatingButton onClick={router.back}>Voltar</FloatingButton>
		</PagesContainer>
	)
}

export default Musicalizacao

export async function getStaticProps() {
	const client: any = createClient()

	const dataMorningTeacher = await client.getAllByType(
		"morning_music_teacher_profile",
		{}
	)

	const dataAfternoonTeacher = await client.getAllByType(
		"afternoon_music_teacher_profile",
		{}
	)

	const mormingTeacher: Teachers[] = dataMorningTeacher.map(
		(e: any) => ({
			slug: e.uid,
			teacherName: e.data.teacher_name,
			teacherImg: e.data.teacher_img.url,
			alt: e.data.teacher_img.alt,
		})
	)

	const afternoonTeacher: Teachers[] = dataAfternoonTeacher.map(
		(e: any) => ({
			slug: e.uid,
			teacherName: e.data.teacher_name,
			teacherImg: e.data.teacher_img.url,
			alt: e.data.teacher_img.alt,
		})
	)

	return {
		props: {
			mormingTeacher,
			afternoonTeacher,
		},
	}
}
