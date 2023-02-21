import React, { useState } from "react"
import {
	LoginContainer,
	InputContainer,
	H1,
	Input,
	MainButton,
	IconContainer,
	H2,
} from "../atoms"
import Icon from "@mdi/react"
import { mdiEyeOutline } from "@mdi/js"
import { mdiEyeOffOutline } from "@mdi/js"
import firebase from "../../connection/firebaseConnection"
import FadeLoader from "react-spinners/FadeLoader"
import { useRouter } from "next/router"

const Login = () => {
	const [eyeIcon, setEyeIcon] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [disabled, setDisabled] = useState(true)
	const [loading, setLoading] = useState(false)
	const router = useRouter()

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
		console.log(event, email)
		setPassword(event)
		if (email !== "" && event !== "") {
			setDisabled(false)
		} else {
			setDisabled(true)
		}
	}

	const getEmail = (event: string) => {
		setEmail(event)
		if (event === "") {
			setDisabled(true)
		}
	}

	const login = async () => {
		setLoading(true)
		setDisabled(true)
		await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((value: any) => {
				router.push("./Home")
				setLoading(false)
			})
			.catch((error) => {
				console.log(error)
				// setMsg("Email ou senha invalidos")
				setLoading(false)
				// setTimeout(() => {
				// 	setMsg("")
				// }, 20000)
			})
	}
	return (
		<LoginContainer>
			<H1>VAMOS COMEÇAR?</H1>
			<p className="text-[0.8rem] text-[#b4b4b4] mt-1">
				Após inserir email e senha, você terá acesso ao conteúdo
			</p>
			<InputContainer>
				<Input
					placeholder="Email:"
					type="email"
					onChange={(event) => getEmail(event.target.value)}
				/>
				<Input
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
						className={!eyeIcon ? "block" : "hidden"}
					/>
					<Icon
						path={mdiEyeOutline}
						size={1}
						className={eyeIcon ? "block" : "hidden"}
					/>
				</IconContainer>
			</InputContainer>
			<MainButton
				disabled={disabled}
				onClick={() => login()}
				background={!disabled ? "#89b2a2" : "#b4b4b4"}
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
		</LoginContainer>
	)
}

export default Login
