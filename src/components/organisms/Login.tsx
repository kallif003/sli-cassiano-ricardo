import React, { useState } from "react"
import {
	LoginContainer,
	InputContainer,
	H1,
	Input,
	MainButton,
	IconContainer,
	H2,
	Paragraph,
} from "../atoms"
import Icon from "@mdi/react"
import { mdiEyeOutline } from "@mdi/js"
import { mdiEyeOffOutline } from "@mdi/js"
import FadeLoader from "react-spinners/FadeLoader"
import Image from "next/image"
import useAuth from "@/hooks/useAuth"

const Login = () => {
	const [eyeIcon, setEyeIcon] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const {
		loading,
		disabled,
		errorMsg,
		signin,
		setDisabled,
		setErrorMsg,
	} = useAuth()

	const showPassword = () => {
		setEyeIcon(!eyeIcon)

		const input = document.querySelector("#pass")
		if (input?.getAttribute("type") == "password") {
			input.setAttribute("type", "text")
		} else {
			input?.setAttribute("type", "password")
		}
	}

	const getPassword = (event: string) => {
		setPassword(event.trim())
		setErrorMsg("")
		console.log(email.length, event.length)

		if (email.length === 27 && event.length === 13) {
			setDisabled(false)
		} else {
			setDisabled(true)
		}
	}

	const getEmail = (event: string) => {
		setEmail(event.trim())
		setErrorMsg("")
		if (event === "") {
			setDisabled(true)
		}
	}

	const login = async () => {
		await signin(email, password)
	}

	return (
		<LoginContainer>
			<H1>VAMOS COMEÇAR?</H1>
			<p className="text-[0.93rem] text-[#b4b4b4] mt-1 sm:text-[0.7rem]">
				Após inserir email e senha, você terá acesso ao conteúdo
			</p>

			<InputContainer>
				<Input
					borderColor={errorMsg ? "#e30b21" : "#fff"}
					placeholder="Email:"
					type="email"
					onChange={(event) => getEmail(event.target.value)}
				/>
				<Input
					borderColor={errorMsg ? "#e30b21" : "#fff"}
					placeholder="Senha:"
					type="password"
					id="pass"
					value={password}
					onChange={(event) => getPassword(event.target.value)}
				/>

				<IconContainer onClick={showPassword}>
					<Icon
						path={mdiEyeOffOutline}
						size={1}
						className={!eyeIcon ? "block " : "hidden"}
					/>
					<Icon
						path={mdiEyeOutline}
						size={1}
						className={eyeIcon ? "block" : "hidden"}
					/>
				</IconContainer>
			</InputContainer>

			<Paragraph
				className="text-red-500 mt-[-6rem] mb-24"
				size={0.8}
				weight={700}>
				{errorMsg}
			</Paragraph>

			<MainButton
				disabled={disabled}
				onClick={() => login()}
				background={!disabled ? "#FECA04" : "#b4b4b4"}
				className={
					disabled === false
						? "active:scale-90 mt-[-4rem]"
						: "mt-[-4rem]"
				}>
				<FadeLoader
					color="#fff"
					loading={loading}
					margin={1}
					className="mt-2"
					height={10}
				/>
				<H2 className={loading ? "hidden" : "block"}>Acessar</H2>
			</MainButton>

			<div className="flex flex-col  mt-5 items-center justify-center xl:hidden lg:hidden">
				<Image
					src={"/logo.png"}
					alt="logo tipo da escola"
					width="80"
					height="80"
				/>
				<Paragraph size={0.5} weight={700} className="mt-[-1.6rem]">
					ESCOLA CASSIANO RICARDO
				</Paragraph>
			</div>
		</LoginContainer>
	)
}

export default Login
