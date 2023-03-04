import React, { createContext } from "react"
import { Props, PropsContextType } from "../utils/interfaces"

const PropsContext = createContext({} as PropsContextType)

export const PropsProvider = ({ children }: Props) => {
	return (
		<PropsContext.Provider value={{}}>
			{children}
		</PropsContext.Provider>
	)
}

export default PropsContext
