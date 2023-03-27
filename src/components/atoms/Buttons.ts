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
export const MusicButton = styled.button`
	background-image: url("/marcaTexto.png");
	background-repeat: no-repeat;
	background-size: cover;
	z-index: 0;
	border-radius: 0.3rem;
	width: 13rem;
	height: 4rem;
	color: #fff;
	font-weight: 600;
	border-style: dashed;
	border-color: #616060;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const ReadButton = styled.button`
	background-image: url("/marcaTexto2.png");
	background-repeat: no-repeat;
	background-size: cover;
	z-index: 0;
	border-radius: 0.3rem;
	width: 13rem;
	height: 4rem;
	color: #fff;
	font-weight: 600;
	border-style: dashed;
	border-color: #616060;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const ProjectButton = styled.button`
	background-image: url("/marcaTexto3.png");
	background-repeat: no-repeat;
	background-size: cover;
	z-index: 0;
	border-radius: 0.3rem;
	width: 12rem;
	height: 3.5rem;
	color: #fff;
	font-weight: 600;
	border-style: dashed;
	border-color: #616060;
	display: flex;
	justify-content: center;
	align-items: center;
`
