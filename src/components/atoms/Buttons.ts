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
`
export const ModalButton = styled.button`
	box-shadow: 0 0.3rem 0.62rem #e0e4ee;
	background: #fff;
	border-radius: 0.3rem;
	width: 16.87rem;
	height: 2.5rem;
	color: #fff;
`
