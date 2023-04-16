import React from "react"
import { H2, MusicButton, Paragraph, Card } from "@/components/atoms"
import { IRepertoire } from "@/utils/interfaces"
import Link from "next/link"

const Repertoire = ({ repertoire }: IRepertoire) => {
	return (
		<div className="flex justify-evenly flex-wrap items-center mt-10">
			{repertoire.map((r) => (
				<Card key={r?.slug} width={20} height={20}>
					{r?.link_type === "Web" ? (
						<iframe
							src={r?.video}
							className="rounded-md"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
					) : (
						<div className="sm:px-5 px-10 w-[23rem] sm:w-[21rem]">
							<video controls className="rounded-md">
								<source src={r?.video} type="video/mp4" />
							</video>
						</div>
					)}
					<div className="w-[18rem] flex justify-center items-center h-12 relative">
						<Paragraph
							className="mb-2 mt-5 overFlow"
							weight={700}
							size={1}>
							{r?.title.toUpperCase()}
						</Paragraph>
					</div>
					{r.lyrics != "" && (
						<MusicButton>
							<Link href={r?.lyrics} passHref target="_blank">
								<H2>Letra</H2>
							</Link>
						</MusicButton>
					)}
				</Card>
			))}
		</div>
	)
}

export default Repertoire
