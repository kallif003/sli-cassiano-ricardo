/* eslint-disable new-cap */
import Head from "next/head"
import React, { useEffect } from "react"
import TeachersArea from "../../components/organisms/TeachersArea"
import Footer from "../../components/molecules/Footer"
import useAuth from "@/hooks/useAuth"
import Header from "@/components/molecules/Header"
import { PagesContainer } from "../../components/atoms"
import { RoomOf, Route } from "@/utils/enum"
import { createClient } from "../../../prismicio"
import { Teachers } from "@/utils/interfaces"

const Musicalizacao = ({
	MormingTeacher,
	AfternoonTeacher,
}: Teachers) => {
	const { AuthStateChanged } = useAuth()

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
				nameButton="REPERTÓRIO"
				nameIcon="music"
				MorningTeacher={MormingTeacher}
				AfternoonTeacher={AfternoonTeacher}
			/>
			<div className="text-center mb-14 sm:mt-[-2rem] h-8">
				<Footer />
			</div>
		</PagesContainer>
	)
}

export default Musicalizacao

export async function getStaticProps() {
	const client = createClient()

	const morningTeacher = await client.getAllByType(
		"morning_music_teacher_profile",
		{}
	)

	const afternoonTeacher = await client.getAllByType(
		"afternoon_music_teacher_profile",
		{}
	)

	const AfternoonTeacher = afternoonTeacher.map((e: any) => ({
		slug: e.uid,
		teacherName: e.data.teacher_name,
		teacherImg: e.data.teacher_img.url,
		alt: e.data.teacher_img.alt,
	}))

	const MormingTeacher = morningTeacher.map((e: any) => ({
		slug: e.uid,
		teacherName: e.data.teacher_name,
		teacherImg: e.data.teacher_img.url,
		alt: e.data.teacher_img.alt,
	}))

	return {
		props: {
			MormingTeacher,
			AfternoonTeacher,
		},
	}
}
