import React from "react"
import {
	H1,
	MusicalizationContainer,
	MusicButton,
	GeneralContainer,
	ReadButton,
	GeneralContainer2,
	TeacherContainer,
	ImageContainer,
	H2,
	TeacherInfoContainer,
	MusicalizationGrid,
} from "../atoms"
import Icon from "@mdi/react"
import { mdiBookOpenPageVariant, mdiMusic } from "@mdi/js"

interface IText {
	id: string
	paragraph: string
}

const Musicalization = () => {
	const rows: IText[] = [
		{
			id: "1",
			paragraph:
				"A IMPORTÂNCIA DA MUSICALIZAÇÃO NA EDUCAÇÃO INFANTIL.",
		},
		{
			id: "2",
			paragraph: "AQUI VOCÊ PODE ACOMPANHAR O CONTEÚDO SEMANAL, O",
		},
		{
			id: "2",
			paragraph: "REPERTÓRIO E O PROJETO",
		},
	]

	return (
		<MusicalizationGrid>
			<GeneralContainer>
				<MusicalizationContainer>
					<div className="px-2 py-1 ">
						<Icon
							path={mdiMusic}
							size={3}
							color="#FF8343"
							className="sm:ml-3 absolute top-4 left-3 "
						/>
						<H1 size={1.5} className="text-center sm:ml-10">
							MUSICALIZAÇÃO
						</H1>
						<hr className="border-dashed border-[#d1cece] " />
					</div>
					{rows.map((p) => (
						<div
							key={p.id}
							className="px-2 py-1 sm:w-[17.9rem] truncate ">
							<p className="mx-2 text-[0.98rem] sm:text-[0.6rem]">
								{p.paragraph}
							</p>
							<hr className="border-dashed border-[#d1cece] " />
						</div>
					))}

					<div className=" flex justify-end  h-10 mt-3">
						<MusicButton className="mr-3">
							<Icon path={mdiMusic} size={1} className="sm:ml-3 " />
							<h1 className="ml-1 mt-1 text-[0.75rem]">PROJETO</h1>
						</MusicButton>
						<ReadButton>
							<Icon
								path={mdiBookOpenPageVariant}
								size={1}
								className="sm:ml-2 mt-0"
							/>
							<h1 className="ml-1 mt-1 text-[0.75rem]">REPERTÓRIO</h1>
						</ReadButton>
					</div>
				</MusicalizationContainer>
			</GeneralContainer>

			<GeneralContainer2>
				<TeacherContainer>
					<div className="flex justify-between pl-2 ml-14 sm:ml-0 sm:flex-col sm:items-center">
						<ImageContainer
							src="/profMusica1.png"
							alt="professora"
							width={1200}
							height={1600}
							className="mt-3 bg-[#48D2B0]"
						/>
						<TeacherInfoContainer>
							<H1 size={1}>PROFESSORA MARILI</H1>
							<H2 size={1}>MANHÃ</H2>
							<MusicButton className="mt-2">
								<Icon
									path={mdiMusic}
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
							<H1 size={1}>PROFESSORA TALITA</H1>
							<H2 size={1}>TARDE</H2>
							<ReadButton className="mt-2">
								<Icon path={mdiMusic} size={1} className="sm:ml-3" />
								<h1 className="ml-1 mt-1  text-[0.75rem]">
									VER CONTEÚDO
								</h1>
							</ReadButton>
						</TeacherInfoContainer>

						<ImageContainer
							src="/profMusica2.png"
							alt="professora"
							width={1200}
							height={1600}
							className="mt-3 sm:mb-2 bg-[#9B58B5]"
						/>
					</div>
				</TeacherContainer>
			</GeneralContainer2>
		</MusicalizationGrid>
	)
}

export default Musicalization
