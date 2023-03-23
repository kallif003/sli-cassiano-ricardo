import React from "react"
import {
	H1,
	AboutClassContainer,
	MusicButton,
	ProjectContainer,
	ReadButton,
	ProfileTeacherContainer,
	TeacherContainer,
	ImageContainer,
	H2,
	TeacherInfoContainer,
	TeachersGrid,
} from "../atoms"
import Icon from "@mdi/react"
import { useRouter } from "next/router"
import {
	mdiBookOpenPageVariant,
	mdiMusic,
	mdiPlaylistMusic,
	mdiNewspaperVariantOutline,
	mdiPostOutline,
} from "@mdi/js"
import { ITeachersArea } from "@/utils/interfaces"
import { RoomOf } from "@/utils/enum"

const TeachersArea = ({
	lesson,
	nameButton,
	nameIcon,
	pathRepository,
	morningTeacher,
	afternoonTeacher,
}: ITeachersArea) => {
	const aboutMusicalization: string[] = [
		"O TRABALHO COM A MUSICALIZAÇÃO INFANTIL NA ESCOLA É",
		"INDISPENSÁVEL, POIS, ALÉM DO DESENVOLVIMENTO DA SENSIBILIDADE",
		"À MÚSICA CONTRIBUI PARA A CONCENTRAÇÃO, MEMÓRIA,",
		"COORDENAÇÃO MOTORA, SOCIALIZAÇÃO, ACUIDADE AUDITIVA E",
		"DISCIPLINA. PARA AS AULAS DE MUSICALIZAÇÃO, PERCEBEMOS UMA",
		"GRANDE EXPECTATIVA, AS CRIANÇAS ANSEIAM A CHEGADA DA",
		"PROFESSORA NA SALA DE AULA",
	]

	const aboutTheLiterature: string[] = [
		"AS EXPERIÊNCIAS COM A LITERATURA INFANTIL, PROPOSTAS PELO",
		"EDUCADOR, MEDIADOR ENTRE OS TEXTOS E AS CRIANÇAS,",
		"CONTRIBUEM PARA O DESENVOLVIMENTO DO GOSTO PELA LEITURA,",
		"DO ESTÍMULO À IMAGINAÇÃO E DA AMPLIAÇÃO DO CONHECIMENTO",
		"DE MUNDO.",
	]

	const router = useRouter()

	return (
		<TeachersGrid>
			<ProjectContainer>
				<AboutClassContainer>
					<div className="px-2 py-1 ">
						<Icon
							path={
								nameIcon === "music"
									? mdiMusic
									: mdiBookOpenPageVariant
							}
							size={3}
							color="#FF8343"
							className={
								nameIcon === "music"
									? "sm:ml-3 absolute top-4 left-3 "
									: "absolute top-3 left-6"
							}
						/>
						<H1 size={1.5} className="text-center sm:ml-10">
							{lesson}
						</H1>
						<hr className="border-dashed border-[#d1cece] sm:mb-2 " />
					</div>
					{lesson === RoomOf.MUSICALIZATION ? (
						<div>
							{aboutMusicalization.map((text, index) => (
								<div className="px-2 sm:text-center" key={index}>
									<div className="sm:hidden md:hidden text-[0.98rem] ">
										<p>{text}</p>
										<hr className="border-dashed border-[#d1cece] " />
									</div>
									<p className="lg:hidden xl:hidden ">{text}</p>
								</div>
							))}
						</div>
					) : (
						<div>
							{aboutTheLiterature.map((text, index) => (
								<div className="px-2 sm:text-center " key={index}>
									<div className="sm:hidden md:hidden text-[0.98rem] ">
										<p>{text}</p>
										<hr className="border-dashed border-[#d1cece] " />
									</div>
									<p className="lg:hidden xl:hidden ">{text}</p>
								</div>
							))}
						</div>
					)}
					<div className=" flex justify-end  h-10 mt-3">
						<ReadButton onClick={() => router.push(pathRepository)}>
							<Icon
								path={
									nameIcon === "music"
										? mdiPlaylistMusic
										: mdiNewspaperVariantOutline
								}
								size={1}
								className="sm:ml-2 mt-0"
							/>
							<h1 className="ml-1 mt-1 text-[0.75rem]">
								{nameButton}
							</h1>
						</ReadButton>
					</div>
				</AboutClassContainer>
			</ProjectContainer>

			<ProfileTeacherContainer>
				<TeacherContainer>
					<div className="flex justify-between pl-2 ml-14 sm:ml-0 sm:flex-col sm:items-center">
						<ImageContainer
							src={morningTeacher[0].teacherImg}
							alt={morningTeacher[0].alt}
							width={1800}
							height={1800}
							className="mt-3 bg-[#48D2B0]"
						/>
						<TeacherInfoContainer>
							<H1 size={1}>
								PROFESSORA {morningTeacher[0].teacherName}
							</H1>
							<H2 size={1}>MANHÃ</H2>
							<MusicButton className="mt-2">
								<Icon
									path={mdiPostOutline}
									size={1}
									className="sm:ml-3 sm:mt-2"
								/>
								<h1 className="ml-1 mt-1 sm:mt-2 text-[0.75rem]">
									VER CONTEÚDO
								</h1>
							</MusicButton>
						</TeacherInfoContainer>
					</div>

					<hr className="border-dashed border-[#d1cece] mt-1 sm:mt-3" />

					<div className="flex justify-between pr-2 mr-14 sm:mr-0 sm:flex-col-reverse sm:items-center">
						<TeacherInfoContainer>
							<H1 size={1}>
								PROFESSORA {afternoonTeacher[0].teacherName}
							</H1>
							<H2 size={1}>TARDE</H2>
							<ReadButton className="mt-2">
								<Icon
									path={mdiPostOutline}
									size={1}
									className="sm:ml-3"
								/>
								<h1 className="ml-1 mt-1  text-[0.75rem]">
									VER CONTEÚDO
								</h1>
							</ReadButton>
						</TeacherInfoContainer>

						<ImageContainer
							src={afternoonTeacher[0].teacherImg}
							alt={afternoonTeacher[0].alt}
							width={1800}
							height={1800}
							className="mt-3 sm:mb-2 bg-[#9B58B5]"
						/>
					</div>
				</TeacherContainer>
			</ProfileTeacherContainer>
		</TeachersGrid>
	)
}

export default TeachersArea
