import styled from "styled-components"

export const Container = styled.div`
	display: grid;
	grid-template-columns: 50% 70%;
	justify-content: center;
	width: auto;
	background: #ccc;
	height: 100vh;
	@media (min-width: 0px) and (max-width: 1023px) {
		grid-template-columns: 100%;
	}
	@media (min-width: 1024px) and (max-width: 1279px) {
		grid-template-columns: 50% 70%;
	}
`
export const LoginContainer = styled.div`
	padding: 0 0 0 8rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #f8f8f8;
	@media (min-width: 0px) and (max-width: 1023px) {
		height: 100vh;
		padding: 0;
	}
	@media (min-width: 1024px) and (max-width: 1279px) {
		padding: 0 0 0 7rem;
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
	@media (min-width: 0px) and (max-width: 1023px) {
		display: none;
	}
`
export const InputContainer = styled.form`
	height: 22rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`
export const IconContainer = styled.div`
	position: relative;
	color: #a4a4a4;
	top: -5.8rem;
	left: 10rem;
	@media (min-width: 0px) and (max-width: 767px) {
		left: 8.9rem;
	}
`
