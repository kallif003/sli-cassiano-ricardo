import React from "react"
import {
	NewspaperContainer,
	H1,
	H2,
	NewspaperArticleContainer,
	Paragraph,
} from "@/components/atoms"
import Image from "next/image"
import kids from "../../../public/criancas.jpg"

const Newspaper = () => {
	return (
		<NewspaperContainer>
			<H1 size={3} className="text-center">
				CASSIANINHO NOTÍCIAS
			</H1>

			<div className="w-[26rem] text-center text-[#3d3d3d]">
				<Paragraph size={0.8}>
					NESTA EDIÇÃO DO JORNAL CASSIANINHO NOTÍCIAS, VAMOS MOSTRAR E
					FALAR SOBRE NOVOS ESPAÇOS QUE FORAM CARINHOSAMENTE E
					INTENCIONALMENTE ORGANIZADOS PARA AS CRIANÇAS. ESPERAMOS QUE
					GOSTEM.
				</Paragraph>
			</div>

			<NewspaperArticleContainer>
				<div className=" flex flex-col items-center px-16 mt-4">
					<H2>ESPAÇO DE LEITURA</H2>
					<Paragraph className="text-[#3d3d3d] mt-2" size={0.8}>
						NOSSA ESCOLA GANHOU UM ESPAÇO DE LEITURA COM LIVROS DE
						DIFERENTES GÊNEROS TEXTUAIS, ESPAÇO PARA DESENHO,
						FANTASIAS E FANTOCHES À DISPOSIÇÃO PARA QUE AS CRIANÇAS
						POSSAM BRINCAR, INVENTAR E RECONTAR HISTÓRIAS OUVIDAS OU
						CONHECIDAS POR ELAS. TER UM ESPAÇO ONDE A CRIANÇA POSSA
						BRINCAR DE FAZ DE CONTA, AUXILIA NO DESENVOLVIMENTO DE
						HABILIDADES IMPORTANTES COMO CRIATIVIDADE, COMUNICAÇÃO E
						COMPETÊNCIAS SOCIAIS.
					</Paragraph>

					<Image src={kids} alt="oi" />
				</div>

				<div className="bg-[#b4b4b4] rounded-xl mt-6"></div>

				<div className=" flex flex-col items-center px-16 mt-4">
					<H2>ESPAÇO DE LEITURA</H2>
					<Paragraph className="text-[#3d3d3d] mt-2" size={0.8}>
						NOSSA ESCOLA GANHOU UM ESPAÇO DE LEITURA COM LIVROS DE
						DIFERENTES GÊNEROS TEXTUAIS, ESPAÇO PARA DESENHO,
						FANTASIAS E FANTOCHES À DISPOSIÇÃO PARA QUE AS CRIANÇAS
						POSSAM BRINCAR, INVENTAR E RECONTAR HISTÓRIAS OUVIDAS OU
						CONHECIDAS POR ELAS. TER UM ESPAÇO ONDE A CRIANÇA POSSA
						BRINCAR DE FAZ DE CONTA, AUXILIA NO DESENVOLVIMENTO DE
						HABILIDADES IMPORTANTES COMO CRIATIVIDADE, COMUNICAÇÃO E
						COMPETÊNCIAS SOCIAIS.
					</Paragraph>

					<Image src={kids} alt="oi" />
				</div>
			</NewspaperArticleContainer>
		</NewspaperContainer>
	)
}

export default Newspaper
