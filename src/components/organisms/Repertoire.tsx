import React from "react"
import {
	H2,
	MusicButton,
	Paragraph,
	RepertoireContainer,
} from "@/components/atoms"
import { IRepertoire } from "@/utils/interfaces"
import Link from "next/link"

const Repertoire = ({ repertoire }: IRepertoire) => {
	return (
		<div className="flex justify-evenly flex-wrap items-center mt-10">
			{repertoire.map((r) => (
				<RepertoireContainer key={r.slug}>
					<iframe
						width="200"
						height="100"
						src={r.video}
						title="YouTube video player"
						className={r.video === "" ? "hidden" : "rounded-md mb-2"}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
					<Paragraph className="mb-2">{r.title}</Paragraph>
					<MusicButton>
						<Link href={r.lyrics} passHref target="_blank">
							<H2>Letra</H2>
						</Link>
					</MusicButton>
				</RepertoireContainer>
			))}
		</div>
	)
}

export default Repertoire
