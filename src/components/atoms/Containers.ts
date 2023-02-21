import styled from "styled-components"

export const Container = styled.div`
	display: grid;
	grid-template-columns: 50% 70%;
	justify-content: center;
	width: auto;
	background: #ccc;
	height: 100vh;
`
export const LoginContainer = styled.div`
	padding: 0 15rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #f8f8f8;
	@media (min-width: 1024px) and (max-width: 1279px) {
		padding: 6rem 0 4rem 8rem;
	}
	@media (min-height: 0px) and (max-height: 700px) {
		height: 100%;
		padding: 0 0 2rem 8rem;
	}
`
export const WelcomeContainer = styled.div`
	padding: -3rem 2rem;
	width: 85%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #b0d1b2;
	color: #fff;
	@media (min-height: 0px) and (max-height: 700px) {
		height: 100%;
	}
`
export const InputContainer = styled.form`
	height: 22rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	@media (min-width: 0) and (max-width: 767px) {
		width: 22rem;
	}
`
export const IconContainer = styled.div`
	position: relative;
	color: #a4a4a4;
	top: -5.8rem;
	left: 10rem;
	@media (min-width: 0px) and (max-width: 767px) {
		left: -8.5rem;
	}
`
