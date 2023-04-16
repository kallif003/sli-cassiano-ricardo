import React from "react"
import {
	AboutProjectContainer,
	MusicButton,
	H1,
	ReadButton,
	SheetHolesContainer,
	ProjectButton,
	OverflowHomeContainer,
} from "../atoms"
import Icon from "@mdi/react"
import {
	mdiBookOpenPageVariant,
	mdiTextBoxEditOutline,
	mdiMusic,
} from "@mdi/js"
import { useRouter } from "next/router"
import { Route } from "@/utils/enum"

const sheetHoles: any[] = []

const rows: string[] = [
	"O CURRÍCULO DA REDE DE ENSINO MUNICIPAL DE SÃO JOSÉ DOS CAMPOS",
	"CONSIDERA A EDUCAÇÃO INTEGRAL COMO PRINCÍPIO FORMATIVO QUE",
	"PROMOVE A FORMAÇÃO DA CRIANÇA NAS DIMENSÕES FÍSICA,",
	"INTELECTUAL, AFETIVA, CULTURAL E SOCIAL, VISANDO SUA INTERAÇÃO",
	"DE FORMA AUTÔNOMA E CRÍTICA CONSIGO MESMO E COM O MUNDO,",
	"EXERCENDO O PROTAGONISMO. CONSIDERANDO QUE O TRABALHO COM",
	"MUSICALIZAÇÃO E LITERATURA OFERECEM POSSIBILIDADES DE",
	"CAPACIDADES NECESSÁRIAS NESSA FAIXA ETÁRIA E AO LONGO DA VIDA,",
	"CADA SALA É ATENDIDA SEMANALMENTE COM QUATRO AULAS DE 50",
	"MINUTOS, SENDO DUAS DE DE LITERATURA E DUAS DE MUSICALIZAÇÃO.",
	"ABAIXO VOCÊ PODE CONFERIR UM POUCO DO QUE É TRABALHADO",
	"E FICAR A PAR DA NOSSA SEMANA:",
]

for (let i = 0; i < 12; i++) {
	sheetHoles.push(
		<div className="bg-[#fff] rounded-full h-4 w-4"></div>
	)
}

const Home = () => {
	const router = useRouter()

	return (
		<>
			<div className="flex justify-center items-center pt-12 sm:pt-10 sm:mx-auto">
				<AboutProjectContainer>
					<SheetHolesContainer>{sheetHoles}</SheetHolesContainer>
					<div className="py-3 px-8 sm:px-6 w-full sm:w-[22rem]">
						<div className="px-2 py-1 ">
							<H1 size={1.5} className="text-center" color="#3d3d3d">
								SOBRE O PROJETO
							</H1>

							<hr className="border-dashed border-[#d1cece] " />
						</div>

						<OverflowHomeContainer>
							{rows.map((text, index) => (
								<div key={index}>
									<div className="px-2 py-1 sm:hidden">
										<p
											className={
												index === 0 || index === 10 ? "ml-2" : "ml-0"
											}>
											{text}
										</p>
										<hr className="border-dashed border-[#d1cece]" />
									</div>
									<p className="lg:hidden xl:hidden md:hidden text-justify">
										{text}
									</p>
								</div>
							))}
						</OverflowHomeContainer>

						<div className="flex justify-end h-10 mt-5 sm:hidden md:mt-8">
							<MusicButton
								className="mr-3"
								onClick={() => router.push(Route.MUSICALIZATION)}>
								<Icon path={mdiMusic} size={1} />
								<h1 className="ml-1 mt-1 text-[0.75rem]">
									MUSICALIZAÇÃO
								</h1>
							</MusicButton>

							<ReadButton
								onClick={() => router.push(Route.LITERATURE)}>
								<Icon path={mdiBookOpenPageVariant} size={1} />
								<h1 className="ml-1 mt-1 text-[0.75rem]">
									LITERATURA
								</h1>
							</ReadButton>
							<ProjectButton
								onClick={() => router.push(Route.PROJECTS)}>
								<Icon path={mdiTextBoxEditOutline} size={1} />
								<h1 className="ml-1 mt-1 text-[0.75rem]">PROJETOS</h1>
							</ProjectButton>
						</div>

						<div className="flex justify-evenly h-10 mt-3 text-[0.5rem] lg:hidden xl:hidden md:hidden">
							<button
								className="text-[#FECA04] flex justify-evenly items-center ml-[-0.8rem]"
								onClick={() => router.push(Route.MUSICALIZATION)}>
								<Icon path={mdiMusic} size={1} className="mr-1" />
								<h1>MUSICALIZAÇÃO</h1>
							</button>
							<button
								className="text-[#4FB9F3] flex justify-evenly items-center"
								onClick={() => router.push(Route.LITERATURE)}>
								<Icon
									path={mdiBookOpenPageVariant}
									size={1}
									className="mr-1"
								/>
								<h1>LITERATURA</h1>
							</button>
							<button
								className="text-[#FF8343] flex justify-evenly items-center"
								onClick={() => router.push(Route.PROJECTS)}>
								<Icon
									path={mdiTextBoxEditOutline}
									size={1}
									className="mr-1"
								/>
								<h1>PROJETOS</h1>
							</button>
						</div>
					</div>
				</AboutProjectContainer>
			</div>
		</>
	)
}

export default Home
