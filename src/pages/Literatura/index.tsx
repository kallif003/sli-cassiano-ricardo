/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect } from "react"
import TeachersArea from "../../components/organisms/TeachersArea"
import useAuth from "../../hooks/useAuth"
import Header from "../../components/molecules/Header"
import {
	FloatingButton,
	PagesContainer,
} from "../../components/atoms"
import { RoomOf, Route } from "../../utils/enum"
import { createClient } from "../../../prismicio"
import { Teachers } from "@/utils/interfaces"
import { useRouter } from "next/router"
import { mdiArrowLeft } from "@mdi/js"
import Icon from "@mdi/react"

const Literatura = ({
	mormingTeacher,
	afternoonTeacher,
}: Teachers) => {
	const { AuthStateChanged } = useAuth()
	const router = useRouter()
	useEffect(() => {
		AuthStateChanged()
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
				pathProject=""
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

export async function getStaticProps() {
	const client = createClient()

	const dataMorningTeacher = await client.getAllByType(
		"morning_literature_teacher",
		{}
	)

	const dataAfternoonTeacher = await client.getAllByType(
		"afternoon_literature_teacher",
		{}
	)

	const mormingTeacher = dataMorningTeacher.map((e: any) => ({
		slug: e.uid,
		teacherName: e.data.teacher_name,
		teacherImg: e.data.teacher_img.url,
		alt: e.data.teacher_img.alt,
	}))

	const afternoonTeacher = dataAfternoonTeacher.map((e: any) => ({
		slug: e.uid,
		teacherName: e.data.teacher_name,
		teacherImg: e.data.teacher_img.url,
		alt: e.data.teacher_img.alt,
	}))

	return {
		props: {
			mormingTeacher,
			afternoonTeacher,
		},
	}
}
