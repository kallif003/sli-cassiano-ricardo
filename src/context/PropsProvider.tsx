import React, { createContext, useState } from "react"
import { IConfig, Props, PropsContextType } from "../utils/interfaces"

const PropsContext = createContext({} as PropsContextType)

export const PropsProvider = ({ children }: Props) => {
	const [firebaseConfig, setFirebaseConfig] = useState<IConfig>()
	console.log(firebaseConfig?.apiKey)

	return (
		<PropsContext.Provider
			value={{ firebaseConfig, setFirebaseConfig }}>
			{children}
		</PropsContext.Provider>
	)
}

export default PropsContext
