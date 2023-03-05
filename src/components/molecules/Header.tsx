import { IHeader } from "@/utils/interfaces"
import React, { useState } from "react"
import {
	HeaderContainer,
	HeaderButtonsContainer,
	HeaderTitleContainer,
	Paragraph,
} from "../atoms"

const Header = ({ title }: IHeader) => {
	const [id, setId] = useState("")

	const buttons = [
		{ id: "inicio", button: "INICIO" },
		{ id: "musicalizacao", button: "MUSICALIZAÇÃO" },
		{ id: "literatura", button: "LITERATURA" },
		{ id: "sair", button: "SAIR" },
	]

	const handleButton = (idBtn: string) => {
		setId(idBtn)
	}
	return (
		<HeaderContainer>
			<HeaderTitleContainer>
				<Paragraph weight={600} size={1}>
					{title}
				</Paragraph>
			</HeaderTitleContainer>
			<HeaderButtonsContainer>
				<div className="flex flex-row justify-evenly w-[30rem] text-[0.8rem]">
					{buttons.map((btn) => (
						<button
							key={btn.id}
							onClick={() => handleButton(btn.id)}
							className={
								id === btn.id
									? "bg-[#dce0e6] text-[#1f1f20] px-2 py-1 rounded-md"
									: ""
							}>
							{btn.button}
						</button>
					))}
				</div>
			</HeaderButtonsContainer>
		</HeaderContainer>
	)
}

export default Header
