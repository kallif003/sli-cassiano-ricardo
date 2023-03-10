import { SliceSimulator } from "@prismicio/slice-simulator-react"
import { SliceZone } from "@prismicio/react"
import React from "react"

import { components } from "../slices"

const SliceSimulatorPage = () => (
	<SliceSimulator
		sliceZone={({ slices }) => (
			<SliceZone slices={slices} components={components} />
		)}
		state={{}}
	/>
)

export default SliceSimulatorPage
