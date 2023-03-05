import React from "react"
import Header from "../molecules/Header"
import {
	AboutProjectContainer,
	MusicButton,
	H1,
	ReadButton,
} from "../atoms"
import Icon from "@mdi/react"
import { mdiMusic } from "@mdi/js"
import { mdiBookOpenPageVariant } from "@mdi/js"

interface IText {
	id: number
	paragraph: string
}

const sheetHoles: any[] = []

const rows: IText[] = [
	{
		id: 1,
		paragraph: "Eswwsssssssssssssswwwwwwwwwwwwwwwwwwwwwwwwww",
	},
	{ id: 2, paragraph: "dddddddddddfffffffffffffffffffffffffffff" },
	{ id: 3, paragraph: "gggggggggggggggggggggggggggggggggggggg" },
	{ id: 4, paragraph: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" },
	{ id: 5, paragraph: "fffffffffffffffffffffffffffffffff" },
	{
		id: 6,
		paragraph: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
	},
	{
		id: 7,
		paragraph: "fffffffffffffffffffffffffffffffffffffffffffff",
	},
	{ id: 8, paragraph: "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww" },
	{
		id: 9,
		paragraph: "wwwwwwwwyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
	},
	{
		id: 10,
		paragraph: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
	},
	{
		id: 11,
		paragraph: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
	},
]
for (let i = 0; i < 20; i++) {
	sheetHoles.push(
		<div className="bg-[#fff]  rounded-full h-4 w-4"></div>
	)
}

const Home = () => {
	return (
		<>
			<Header title="PROJETO SALA DE LEITURA INTERATIVA" />
			<div className="flex justify-center items-center h-[40rem] mt-6">
				<AboutProjectContainer>
					<div className="flex flex-col justify-evenly p-2 bg-[#567ebb]">
						{sheetHoles}
					</div>
					<div className="py-3 px-8 w-full">
						<H1 size={1.5} className="text-center">
							SEJA BEM VINDO
						</H1>

						<hr className="border-dashed border-[#d1cece] " />
						{rows.map((p) => (
							<div key={p.id} className="px-2 py-1">
								<p>{p.paragraph}</p>
								<hr className="border-dashed border-[#d1cece] " />
							</div>
						))}
						<div className=" flex justify-end  h-10 text-white">
							<MusicButton className="mr-3 ">
								<Icon
									path={mdiMusic}
									size={1}
									className="ml-3 mt-2"
								/>
								<h1 className="ml-1 mt-2 text-[0.75rem]">
									MUSICALIZAÇÃO
								</h1>
							</MusicButton>
							<ReadButton>
								<Icon
									path={mdiBookOpenPageVariant}
									size={1}
									className="ml-3 mt-2"
								/>
								<h1 className="ml-1 mt-3 text-[0.75rem]">
									LITERATURA
								</h1>
							</ReadButton>
						</div>
					</div>
				</AboutProjectContainer>
			</div>
		</>
	)
}

export default Home
