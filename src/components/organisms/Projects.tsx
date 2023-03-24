import React from "react"
import { ProjectsContainer, H1, Paragraph } from "@/components/atoms"
import { IProject } from "@/utils/interfaces"

const Projects = ({ project }: IProject) => {
	return (
		<ProjectsContainer>
			{project.map((p) => (
				<div
					key={p.slug}
					className="text-justify w-[60%] leading-8 mb-5 ">
					<H1 className="text-center">{p.title.toUpperCase()}</H1>
					<Paragraph className="mt-4 indent-8">
						{p.text.toUpperCase()}
					</Paragraph>
				</div>
			))}
		</ProjectsContainer>
	)
}

export default Projects
