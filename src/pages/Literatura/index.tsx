import Head from "next/head"
import React, { useEffect } from "react"
import TeachersArea from "../../components/organisms/TeachersArea"
import Footer from "../../components/molecules/Footer"
import { NextPage } from "next"
import useAuth from "../../hooks/useAuth"
import Header from "../../components/molecules/Header"
import { PagesContainer } from "../../components/atoms"
import { RoomOf } from "../../utils/enum"

const Literatura: NextPage = () => {
	const { AuthStateChanged } = useAuth()

	useEffect(() => {
		AuthStateChanged
	}, [])

	return (
		<PagesContainer background="/literature.png">
			<Head>
				<title>{RoomOf.LITERATURE}</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<TeachersArea
				lesson={RoomOf.LITERATURE}
				morningTeacher={
					process.env.NEXT_PUBLIC_MORNING_LITERATURE_TEACHER
				}
				afternoonTeacher={
					process.env.NEXT_PUBLIC_AFERTERNOON_LITERATURE_TEACHER
				}
				pathProject=""
				pathRepository=""
				morningTeacherUid=""
				afternoonTeacherUid=""
				nameButton="JORNAL"
				nameIcon="read"
				morningTeacherImage="/profLiteratura1.png"
				afternoonTeacherImage="/profLiteratura2.png"
			/>
			<div className="text-center mb-14 sm:mt-[-2rem] h-8">
				<Footer />
			</div>
		</PagesContainer>
	)
}

export default Literatura
