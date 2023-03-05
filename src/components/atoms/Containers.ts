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
	background: #4fb9f3;
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
	@media (min-width: 0px) and (max-width: 767px) {
		grid-template-columns: 60% 40%;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		grid-template-columns: 33% 67%;
	}
	@media (min-width: 1024px) and (max-width: 1279px) {
		grid-template-columns: 40% 60%;
	}
`
export const HeaderButtonsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background: #feca04;
	padding: 1rem 0;
`
export const HeaderTitleContainer = styled.div`
	display: flex;
	background: #feca04;
	justify-content: center;
	align-items: center;
	padding: 1rem 0;
	color: #fff;
	@media (min-width: 1024px) and (max-width: 1279px) {
		justify-content: flex-start;
		padding-left: 1rem;
	}
	@media (min-width: 1280px) {
		justify-content: flex-start;
		padding-left: 1rem;
	}
	@media (max-width: 767px) {
		justify-content: flex-start;
		padding-left: 1rem;
	}
`
export const AboutProjectContainer = styled.div`
	box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.8);
	width: 50rem;
	height: 31rem;
	color: #111111;
	display: flex;
	background: #f8f8f8;
	@media (min-width: 0) and (max-width: 1023px) {
		flex-direction: column;
		width: 25rem;
		height: 33rem;
	}
`
export const SheetHolesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 0.5rem;
	background: #ff8343;
	@media (min-width: 0) and (max-width: 1023px) {
		flex-direction: row;
		padding-left: 1rem;
	}
`

export const MobileContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-left: 1.25rem;
	padding-right: 1.25rem;
	@media (min-width: 1023px) {
		display: none;
	}
`

// #FF8343
// #F03D5A
// #FECA04
// #48D2B0
// #6561AB
// #9B58B5
// #4FB9F3
