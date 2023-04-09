/* eslint-disable new-cap */
/* eslint-disable camelcase */
import Head from "next/head"
import React, { useEffect, useState } from "react"
import TeachersArea from "../../components/organisms/TeachersArea"
import useAuth from "../../hooks/useAuth"
import Header from "../../components/molecules/Header"
import {
	FloatingButton,
	PagesContainer,
} from "../../components/atoms"
import { RoomOf, Route } from "../../utils/enum"
import { createClient } from "../../../prismicio"
import { Iteachers } from "@/utils/interfaces"
import { useRouter } from "next/router"
import { mdiArrowLeft } from "@mdi/js"
import Icon from "@mdi/react"

const Literatura = () => {
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
			"morning_literature_teacher",
			{}
		)

		const afternoonTeacher_data = await client.getAllByType(
			"afternoon_literature_teacher",
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
	}, [AuthStateChanged])

	return (
		<PagesContainer background="/literature.png">
			<Head>
				<title>{RoomOf.LITERATURE}</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<TeachersArea
				lesson={RoomOf.LITERATURE}
				pathRepository={Route.VIDEOS}
				nameButton="VIDEOS"
				nameIcon="read"
				morningTeacher={mormingTeacher}
				afternoonTeacher={afternoonTeacher}
				mormingTeacherSlug={"posts_professora_literatura_manha"}
				afternoonTeacherSlug={"posts_professora_literatura_tarde"}
			/>

			<FloatingButton onClick={router.back}>
				<Icon path={mdiArrowLeft} size={1} />
			</FloatingButton>
		</PagesContainer>
	)
}

export default Literatura
