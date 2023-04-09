/* eslint-disable new-cap */
/* eslint-disable camelcase */
import Head from "next/head"
import React, { useEffect, useState } from "react"
import TeachersArea from "../../components/organisms/TeachersArea"
import useAuth from "@/hooks/useAuth"
import Header from "@/components/molecules/Header"
import {
	FloatingButton,
	PagesContainer,
} from "../../components/atoms"
import { RoomOf, Route } from "@/utils/enum"
import { createClient } from "../../../prismicio"
import { Iteachers } from "@/utils/interfaces"
import { useRouter } from "next/router"
import { mdiArrowLeft } from "@mdi/js"
import Icon from "@mdi/react"

const Musicalizacao = () => {
	const { AuthStateChanged } = useAuth()
	const router = useRouter()

	const [mormingTeacher, setMormingTeacher] = useState<Iteachers[]>(
		[]
	)

	const [afternoonTeacher, setAfternoonTeacher] = useState<
		Iteachers[]
	>([])

	const getTeachers = async () => {
		const client: any = createClient()

		const morningTeacher_data = await client.getAllByType(
			"morning_music_teacher_profile",
			{}
		)

		const afternoonTeacher_data = await client.getAllByType(
			"afternoon_music_teacher_profile",
			{}
		)

		const mormingTeacherData = morningTeacher_data.map((e: any) => ({
			slug: e.uid,
			teacherName: e.data.teacher_name,
			teacherImg: e.data.teacher_img.url,
			alt: e.data.teacher_img.alt,
		}))

		const afternoonTeacherData = afternoonTeacher_data.map(
			(e: any) => ({
				slug: e.uid,
				teacherName: e.data.teacher_name,
				teacherImg: e.data.teacher_img.url,
				alt: e.data.teacher_img.alt,
			})
		)

		setMormingTeacher(mormingTeacherData)
		setAfternoonTeacher(afternoonTeacherData)
	}

	useEffect(() => {
		AuthStateChanged()
		getTeachers()
	}, [AuthStateChanged, getTeachers])

	return (
		<PagesContainer background="/musicalization.png">
			<Head>
				<title>{RoomOf.MUSICALIZATION}</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<TeachersArea
				lesson={RoomOf.MUSICALIZATION}
				pathRepository={Route.REPERTOIRE}
				nameButton="REPERTÓRIO/VÍDEOS"
				nameIcon="music"
				morningTeacher={mormingTeacher}
				afternoonTeacher={afternoonTeacher}
				mormingTeacherSlug={"posts_professora_musica_manha"}
				afternoonTeacherSlug={"posts_professora_musica_tarde"}
			/>

			<FloatingButton onClick={router.back}>
				<Icon path={mdiArrowLeft} size={1} />
			</FloatingButton>
		</PagesContainer>
	)
}

export default Musicalizacao
