import styled from "styled-components"

export const H1 = styled.h1.attrs(
	(props: { color: string; size: number }) => props
)`
	font-size: ${({ size }) => size || 1.86}rem;
	font-weight: 700;
	color: ${({ color }) => color};
`
export const H2 = styled.h2.attrs(
	(props: { color: string; weight: number }) => props
)`
	font-size: 1.25rem; //20px
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
