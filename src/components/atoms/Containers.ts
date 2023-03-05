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
	background: #2b4c7e;
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
	@media (min-width: 0px) and (max-width: 767px) {
		width: 20rem;
	}
`
export const IconContainer = styled.div`
	position: relative;
	color: #a4a4a4;
	top: -5.8rem;
	left: 10rem;
	@media (min-width: 0px) and (max-width: 767px) {
		left: 7.9rem;
	}
`

export const HeaderContainer = styled.div`
	display: grid;
	height: 200px;
	grid-template-columns: 25% 1fr;
	grid-template-rows: 3rem;
	height: 3rem;
	color: #fff;
	box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.5);
`
export const HeaderButtonsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background: #2b4c7e;
	padding: 1rem 0;
`
export const HeaderTitleContainer = styled.div`
	display: flex;
	background: #2b4c7e;
	justify-content: center;
	align-items: center;
	padding: 1rem 0;
`
export const AboutProjectContainer = styled.div`
	box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.8);
	width: 50rem;
	height: 30rem;
	color: #1f1f20;
	display: flex;
	background: #f8f8f8;
`
// .color1 { #fb7968 };
// .color2 { #f9c593 };
// .color3 { #fafad4 };
// .color4 { #b0d1b2 };
// .color5 { #89b2a2 };
// .color1 { #1f1f20 };
// .color2 { #2b4c7e };
// .color3 { #567ebb };
// .color4 { #606d80 };
// .color5 { #dce0e6 };
