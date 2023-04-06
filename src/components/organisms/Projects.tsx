import React from "react"
import { ProjectsContainer, H1, Paragraph } from "@/components/atoms"
import { IProject } from "@/utils/interfaces"
import Carousel from "react-elastic-carousel"
import Image from "next/image"

const Projects = ({ project }: IProject) => {
	return (
		<ProjectsContainer>
			{project.map((p) => (
				<div
					key={p.slug}
					className="text-justify w-[80%] leading-8 mb-5 ">
					<H1 className="text-center sm:mt-5">
						{p.title.toUpperCase()}
					</H1>
					<Paragraph className="mt-4 indent-8">
						{p.text.toUpperCase()}
					</Paragraph>
					<Carousel
						showArrows={false}
						className="mt-5 mb-8 sm:h-[12rem] h-[26rem]">
						<div className="w-[60rem] h-[30rem] sm:h-[10rem] sm:w-[30rem]">
							<Image
								src={p.img_one_project}
								alt={p.alt_one_project}
								width="1200"
								height="100"
								layout="responsive"
								className="rounded-md"
							/>
						</div>

						<div className="w-[60rem] h-[35rem]">
							<Image
								src={p.img_two_project}
								alt={p.alt_two_project}
								width="1200"
								height="1200"
								layout="responsive"
								className="rounded-md"
							/>
						</div>

						<div className="w-[60rem] h-[35rem]">
							<Image
								src={p.img_three_project}
								alt={p.alt_three_project}
								width="1200"
								height="1200"
								layout="responsive"
								className="rounded-md"
							/>
						</div>

						<div className="w-[60rem] h-[35rem]">
							<Image
								src={p.img_four_project}
								alt={p.alt_four_project}
								width="1200"
								height="1200"
								layout="responsive"
							/>
						</div>
					</Carousel>
				</div>
			))}
		</ProjectsContainer>
	)
}

export default Projects
