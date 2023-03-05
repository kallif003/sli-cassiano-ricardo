import styled from "styled-components"

export const H1 = styled.h1.attrs(
	(props: { color: string; size: number }) => props
)`
	font-size: ${({ size }) => size || 1.86}rem;
	font-weight: 700;
	color: ${({ color }) => color};
	white-space: nowrap;
	overflow: hidden;
	padding-left: 15rem;
	width: 43rem;

	@media (min-width: 0px) and (max-width: 700px) {
		font-size: 1.5rem;
	}

	animation-duration: 4s;
	animation-name: type2;

	:nth-child(3) {
		animation-name: type;
		animation-delay: 2s;
		animation-duration: 4s;
	}
	:nth-child(5) {
		animation-name: type;
		animation-delay: 3s;
		animation-duration: 4s;
	}
	@keyframes type {
		from {
			width: 0;
		}
		to {
			width: 100;
		}
	}

	@keyframes type2 {
		0% {
			width: 0;
		}
		50% {
			width: 0;
		}
		100% {
			width: 100;
		}
	}
`
export const H2 = styled.h2.attrs(
	(props: { color: string; weight: number; size: number }) => props
)`
	font-size: ${({ size }) => size || 1.25}rem; //20px
	font-weight: ${({ weight }) => weight || 700};
	color: ${({ color }) => color};
`
export const Paragraph = styled.p.attrs(
	(props: { color: string; size: number; weight: number }) => props
)`
	font-size: ${({ size }) => size || 1.12}rem; //18px
	font-weight: ${({ weight }) => weight || 400};
	color: ${({ color }) => color};
`
export const TextError = styled.p.attrs(
	(props: { size: number; color: string }) => props
)`
	font-size: ${({ size }) => size}rem;
	font-weight: 800;
	color: ${({ color }) => color};
	margin-bottom: -2rem;
`
