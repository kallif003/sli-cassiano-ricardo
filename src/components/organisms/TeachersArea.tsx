import React from "react"
import {
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
import Link from "next/link"

const TeachersArea = ({
	lesson,
	nameButton,
	nameIcon,
	pathRepository,
	morningTeacher,
	afternoonTeacher,
	mormingTeacherSlug,
	afternoonTeacherSlug,
}: ITeachersArea) => {
	const aboutMusicalization: string[] = [
		"O trabalho com musicalização infantil feito na escola é ",
		"indispensável, pois, além do desenvolvimento da sensibilidade",
		"musical, potencializa a concentração, memória, coordenação",
		"motora, socialização, acuidade auditiva e disciplina.",
	]

	const aboutTheLiterature: string[] = [
		"A experiência com a literatura infantil, proposta pelo",
		"educador, mediador entre textos e as crianças, contribuem",
		"para o desenvolvimentodo gosto pela leitura, do estímulo",
		"à imaginação e da ampliação do conhecimento de mundo.",
	]

	const router = useRouter()

	const currentRoute = router.pathname

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
						<h1 className="text-center sm:ml-10 sm:text-[1.2rem] text-[1.5rem] font-bold">
							{lesson}
						</h1>
						<hr className="border-dashed border-[#d1cece] sm:mb-2 " />
					</div>
					{lesson === RoomOf.MUSICALIZATION ? (
						<div>
							{aboutMusicalization.map((text, index) => (
								<div className="px-2 sm:text-center" key={index}>
									<div className="sm:hidden  text-[0.98rem] ">
										<p className={index === 0 ? "ml-8" : ""}>
											{text.toUpperCase()}
										</p>
										<hr className="border-dashed border-[#d1cece] " />
									</div>
									<p className="lg:hidden xl:hidden md:hidden ">
										{text.toUpperCase()}
									</p>
								</div>
							))}
						</div>
					) : (
						<div>
							{aboutTheLiterature.map((text, index) => (
								<div className="px-2 sm:text-center " key={index}>
									<div className="sm:hidden  text-[0.98rem]">
										<p className={index === 0 ? "ml-8" : ""}>
											{text.toUpperCase()}
										</p>
										<hr className="border-dashed border-[#d1cece] " />
									</div>
									<p className="lg:hidden xl:hidden md:hidden">
										{text.toUpperCase()}
									</p>
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
							src={morningTeacher[0]?.teacherImg}
							alt={morningTeacher[0]?.alt}
							width={1800}
							height={1800}
							className="mt-3 bg-[#48D2B0]"
						/>
						<TeacherInfoContainer>
							<h1 className="sm:text-[1rem] font-bold text-[1.2rem]">
								PROFESSORA{" "}
								{morningTeacher[0]?.teacherName.toUpperCase()}
							</h1>
							<H2 size={1}>MANHÃ</H2>
							<Link
								href={{
									pathname: `${currentRoute}/Posts`,
									query: { slug: mormingTeacherSlug },
								}}>
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
							</Link>
						</TeacherInfoContainer>
					</div>

					<hr className="border-dashed border-[#d1cece] mt-1 sm:mt-3" />

					<div className="flex justify-between pr-2 mr-14 sm:mr-0 sm:flex-col-reverse sm:items-center">
						<TeacherInfoContainer>
							<h1 className="sm:text-[1rem] font-bold text-[1.2rem]">
								PROFESSORA{" "}
								{afternoonTeacher[0]?.teacherName.toUpperCase()}
							</h1>
							<H2 size={1}>TARDE</H2>
							<Link
								href={{
									pathname: `${currentRoute}/Posts`,
									query: { slug: afternoonTeacherSlug },
								}}>
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
							</Link>
						</TeacherInfoContainer>

						<ImageContainer
							src={afternoonTeacher[0]?.teacherImg}
							alt={afternoonTeacher[0]?.alt}
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
