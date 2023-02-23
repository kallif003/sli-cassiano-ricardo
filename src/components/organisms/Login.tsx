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
import firebase from "../../connection/firebaseConnection"
import FadeLoader from "react-spinners/FadeLoader"
import { useRouter } from "next/router"
import Image from "next/image"

const Login = () => {
	const [eyeIcon, setEyeIcon] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [disabled, setDisabled] = useState(true)
	const [loading, setLoading] = useState(false)
	const [errorMsg, setErrorMsg] = useState("")
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
		setPassword(event)
		setErrorMsg("")
		if (email !== "" && event !== "") {
			setDisabled(false)
		} else {
			setDisabled(true)
		}
	}

	const getEmail = (event: string) => {
		setEmail(event)
		setErrorMsg("")
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
				setErrorMsg("Email ou senha inválidos")
				setLoading(false)
			})
	}
	return (
		<LoginContainer>
			<H1>VAMOS COMEÇAR?</H1>
			<p className="text-[0.8rem] text-[#b4b4b4] mt-1 sm:text-[0.7rem]">
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

// this.firebaseAuth.onAuthStateChanged((user) => {
//     let userSessionTimeout = null;

//     if (user === null && userSessionTimeout) {
//       clearTimeout(userSessionTimeout);
//       userSessionTimeout = null;
//     } else {
//       user.getIdTokenResult().then((idTokenResult) => {
//         const authTime = idTokenResult.claims.auth_time * 1000;
//         const sessionDurationInMilliseconds = 60 * 60 * 1000; // 60 min
//         const expirationInMilliseconds = sessionDurationInMilliseconds - (Date.now() - authTime);
//         userSessionTimeout = setTimeout(() => this.firebaseAuth.signOut(), expirationInMilliseconds);
//       });
//     }
//   });
