import React from "react"
import {
	ProjectsContainer,
	H1,
	Paragraph,
	ImageProject,
} from "@/components/atoms"
import { IProject } from "@/utils/interfaces"
import { PrismicRichText } from "@prismicio/react"
import Carousel from "react-elastic-carousel"

const Projects = ({ project }: IProject) => {
	return (
		<ProjectsContainer>
			{project.map((p) => (
				<div
					key={p?.slug}
					className="text-justify w-[80%] leading-8 mb-5 ">
					<div className="xl:w-[68rem] lg:w-[53rem] w-full flex justify-center items-center h-12">
						<H1 className="text-center sm:mt-5 overFlow_title">
							{p?.title.toUpperCase()}
						</H1>
					</div>

					<PrismicRichText
						field={p.text}
						components={{
							paragraph: ({ children }) => (
								<Paragraph className="mt-4 indent-10">
									{children}
								</Paragraph>
							),
						}}
					/>

					<Carousel showArrows={false} className="mt-5 mb-8 ">
						<ImageProject
							src={p?.img_one_project}
							alt={p?.alt_one_project}
							width={1800}
							height={1800}
						/>

						<ImageProject
							src={p?.img_two_project}
							alt={p?.alt_two_project}
							width={1800}
							height={1800}
						/>

						<ImageProject
							src={p?.img_three_project}
							alt={p?.alt_three_project}
							width={1800}
							height={1800}
						/>

						<ImageProject
							src={p?.img_four_project}
							alt={p?.alt_four_project}
							width={1800}
							height={1800}
						/>
					</Carousel>
				</div>
			))}
		</ProjectsContainer>
	)
}

export default Projects
