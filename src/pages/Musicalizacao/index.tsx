import Head from "next/head"
import React, { useEffect } from "react"
import TeachersArea from "../../components/organisms/TeachersArea"
import Footer from "../../components/molecules/Footer"
import { NextPage } from "next"
import useAuth from "@/hooks/useAuth"
import Header from "@/components/molecules/Header"
import { PagesContainer } from "../../components/atoms"
import { RoomOf } from "@/utils/enum"

const Musicalizacao: NextPage = () => {
	const { AuthStateChanged } = useAuth()

	useEffect(() => {
		AuthStateChanged
	}, [])

	return (
		<PagesContainer background="/musicalization.png">
			<Head>
				<title>{RoomOf.MUSICALIZATION}</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<TeachersArea
				lesson={RoomOf.MUSICALIZATION}
				afternoonTeacher={
					process.env.NEXT_PUBLIC_AFERTERNOON_MUSIC_TEACHER
				}
				morningTeacher={process.env.NEXT_PUBLIC_MORNING_MUSIC_TEACHER}
				pathProject=""
				pathRepository="/Repertorio"
				morningTeacherUid=""
				afternoonTeacherUid=""
				nameButton="REPERTÓRIO"
				nameIcon="music"
				morningTeacherImage="/profMusica1.png"
				afternoonTeacherImage="/profMusica2.png"
			/>
			<div className="text-center mb-14 sm:mt-[-2rem] h-8">
				<Footer />
			</div>
		</PagesContainer>
	)
}

export default Musicalizacao
