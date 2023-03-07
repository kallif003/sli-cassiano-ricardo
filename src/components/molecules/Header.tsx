import { mdiClose, mdiMenu } from "@mdi/js"
import Icon from "@mdi/react"
import React, { useState } from "react"
import useAuth from "@/hooks/useAuth"
import { useRouter } from "next/router"
import {
	HeaderContainer,
	HeaderButtonsContainer,
	HeaderTitleContainer,
	Paragraph,
	MobileContainer,
} from "../atoms"

const Header = () => {
	const [id, setId] = useState("")
	const [active, setActive] = useState(true)
	const { logout } = useAuth()
	const router = useRouter()

	const change = () => {
		setActive(!active)
	}

	const buttons = [
		{ id: "inicio", button: "INICIO" },
		{ id: "musicalizacao", button: "MUSICALIZAÇÃO" },
		{ id: "literatura", button: "LITERATURA" },
		{ id: "sair", button: "SAIR" },
	]

	const handleButton = async (idBtn: string) => {
		setId(idBtn)

		if (idBtn === "sair") {
			await logout()
		}

		if (idBtn === "inicio") {
			router.push("/Home")
		}

		if (idBtn === "musicalizacao") {
			router.push("/Musicalizacao")
		}
	}
	return (
		<HeaderContainer>
			<HeaderTitleContainer>
				<Paragraph weight={600} size={1}>
					SALA DE LEITURA INTERATIVA
				</Paragraph>
			</HeaderTitleContainer>

			<HeaderButtonsContainer>
				<div className="flex flex-row justify-evenly w-[30rem] text-[0.8rem] sm:hidden md:hidden">
					{buttons.map((btn) => (
						<button
							key={btn.id}
							onClick={() => handleButton(btn.id)}
							className={
								id === btn.id
									? "bg-[#FF8343] text-[#fff] px-2 py-1 rounded-md"
									: ""
							}>
							{btn.button}
						</button>
					))}
				</div>

				<MobileContainer onClick={change}>
					<Icon
						path={mdiMenu}
						size="35px"
						className={active ? "block " : "hidden"}
						data-cy="cy-hamburguer-menu"
					/>
					<Icon
						path={mdiClose}
						size="35px"
						className={active ? "hidden " : "block"}
						data-cy="cy-close-menu"
						color={"#fff"}
					/>
				</MobileContainer>
			</HeaderButtonsContainer>

			<nav
				className={
					active
						? "hidden"
						: "block text-[25px] bg-[#f8f8f8] w-screen h-screen z-10"
				}>
				{buttons.map((btn) => (
					<ul
						key={btn.id}
						className=" p-3 font-bold text-[0.8rem] text-[#1f1f20] flex">
						<button
							onClick={() => handleButton(btn.id)}
							className={
								id === btn.id
									? "bg-[#FF8343] text-[#fff] px-2 py-1 rounded-md"
									: ""
							}>
							{btn.button}
						</button>
					</ul>
				))}
			</nav>
		</HeaderContainer>
	)
}

export default Header
