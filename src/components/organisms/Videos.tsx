import React from "react"
import { Paragraph, Card } from "../../components/atoms"
import { IVideo } from "../../utils/interfaces"

const Repertoire = ({ videos }: IVideo) => {
	return (
		<div className="flex justify-evenly flex-wrap items-center mt-10">
			{videos.map((v) => (
				<Card key={v.slug} width={25} height={15}>
					{v.link_type === "Web" ? (
						<iframe
							src={v.videos}
							className="rounded-md"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
					) : (
						<div className="sm:px-5 px-10 w-[23rem] sm:w-[21rem]">
							<video controls className="rounded-md">
								<source src={v.videos} type="video/mp4" />
							</video>
						</div>
					)}
					<div className="flex justify-between items-center w-full px-10 mt-5 flex-col">
						<h1 className="sm:text-[0.8rem] font-[700]">
							{v.title.toUpperCase()}
						</h1>
						<Paragraph size={0.8} className="text-[#b4b4b4]">
							{v.date.split("-").reverse().join("/")}
						</Paragraph>
					</div>
				</Card>
			))}
		</div>
	)
}

export default Repertoire
