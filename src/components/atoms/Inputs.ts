import styled from "styled-components"

export const Input = styled.input.attrs(
	(props: { borderColor: string }) => props
)`
	background: #ffff;
	border-radius: 3rem;
	padding: 0.2rem 2.5rem;
	font-size: 0.9rem;
	box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.1);
	width: 26rem;
	height: 4.5rem;
	outline-color: #b4b4b4;
	border: 2px solid ${({ borderColor }) => borderColor};
	::placeholder,
	::-webkit-input-placeholder {
		color: #b4b4b4;
	}
	:-ms-input-placeholder {
		color: #b4b4b4;
	}
	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input {
		-moz-appearance: textfield;
	}

	@media (min-width: 0) and (max-width: 767px) {
		width: 23rem;
	}
`
