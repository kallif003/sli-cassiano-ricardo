/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect } from "react"
import TeachersArea from "../../components/organisms/TeachersArea"
import Footer from "../../components/molecules/Footer"
import useAuth from "../../hooks/useAuth"
import Header from "../../components/molecules/Header"
import { PagesContainer } from "../../components/atoms"
import { RoomOf, Route } from "../../utils/enum"
import { createClient } from "../../../prismicio"
import { Teachers } from "@/utils/interfaces"

const Literatura = ({
	mormingTeacher,
	afternoonTeacher,
}: Teachers) => {
	const { AuthStateChanged } = useAuth()

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
				pathRepository={Route.NEWSPAPER}
				nameButton="JORNAL"
				nameIcon="read"
				morningTeacher={mormingTeacher}
				afternoonTeacher={afternoonTeacher}
			/>
			<div className="text-center mb-14 xl:mt-2 mt-[-2rem]  h-20 xl:h-8">
				<Footer />
			</div>
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
