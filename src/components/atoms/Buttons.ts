import styled from "styled-components"

export const MainButton = styled.button.attrs(
	(props: { background: string }) => props
)`
	box-shadow: 0 0.3rem 0.62rem #e0e4ee;
	box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.1);
	background: ${({ background }) => background};
	border-radius: 3rem;
	width: 26rem;
	height: 3.75rem;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: 0) and (max-width: 767px) {
		width: 20rem;
	}
`
export const Button = styled.button.attrs(
	(props: { background: string }) => props
)`
	background-image: url(${({ background }) => background});
	background-repeat: no-repeat;
	background-size: cover;
	z-index: 0;
	border-radius: 0.3rem;
	width: 12rem;
	height: 3.5rem;
	color: #1f1f20;
	font-weight: 600;
	border-style: dashed;
	border-color: #616060;
	display: flex;
	justify-content: center;
	align-items: center;
`
