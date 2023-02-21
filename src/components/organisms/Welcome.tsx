import React from "react"
import { WelcomeContainer, H1, H2 } from "../atoms"
import Image from "next/image"
import logo from "../../../assets/logo.png"

const Welcome = () => {
	return (
		<WelcomeContainer>
			<Image
				src={logo}
				alt="logo tipo da escola"
				width="200"
				className="mt-[-4rem]"
			/>

			<div className="w-[24rem] text-center mt-[-3rem]">
				<H1 size={2.5}>BEM-VINDO</H1>
				<H2 className="mt-2">
					ESSA É A PÁGINA SLI DA EMEI CASSIANO RICARDO. AQUI VOCÊ FICA
					A PAR DOS CONTEÚDOS DAS AULAS
				</H2>
			</div>
		</WelcomeContainer>
	)
}

export default Welcome
