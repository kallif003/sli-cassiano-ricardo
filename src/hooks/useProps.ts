import { useContext } from "react"
import PropsContext from "../context/PropsProvider"

const useProps = () => useContext(PropsContext)

export default useProps
