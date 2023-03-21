import React from "react"
import {
	NewspaperContainer,
	H1,
	H2,
	NewspaperArticleContainer,
	Paragraph,
} from "@/components/atoms"
import Image from "next/image"
import { INews } from "@/utils/interfaces"

const Newspaper = ({ news }: INews) => {
	return (
		<NewspaperContainer>
			{news.map((news) => (
				<div
					key={news.slug}
					className="text-center  flex flex-col items-center leading-8">
					<div className="flex justify-evenly sm:flex-col-reverse items-center sm:h-28 sm:mb-2">
						<H1 size={3} className="sm:mt-[-2rem]">
							CASSIANINHO NOTÍCIAS
						</H1>
						<Image
							src={"/logo.png"}
							alt="logo tipo da escola"
							width="80"
							height="80"
						/>
					</div>

					<div className="sm:w-[20rem] w-[26rem] text-[#3d3d3d] text-center">
						<Paragraph size={0.8}>{news.introdution}</Paragraph>
					</div>

					<NewspaperArticleContainer>
						<div className="px-16 mt-4 text-[#3d3d3d] sm:mt-[-1rem] sm:px-16">
							<H2>{news.first_title_page_one}</H2>
							<Paragraph size={0.8}>
								{news.first_text_page_one}
							</Paragraph>

							<div style={{ margin: "1rem 0" }}>
								<Image
									src={news.first_img_page_one}
									alt={news.alt_first_img_page_one}
									width={1200}
									height={1200}
								/>
							</div>

							<H2>{news.second_title_page_one}</H2>
							<Paragraph size={0.8}>
								{news.second_text_page_one}
							</Paragraph>

							<div style={{ marginTop: "1rem" }}>
								<Image
									src={news.second_img_page_one}
									alt={news.alt_second_img_page_one}
									width={1200}
									height={1200}
								/>
							</div>
						</div>

						<div
							style={{
								background: "#b4b4b4",
								borderRadius: "0.75rem",
								marginTop: "1.5rem",
							}}></div>

						<div className="px-16 mt-4 text-[#3d3d3d] sm:mt-[-4rem] sm:px-16">
							<H2>{news.first_title_page_two}</H2>
							<Paragraph size={0.8}>
								{news.first_text_page_two}
							</Paragraph>

							<div style={{ margin: "1rem 0" }}>
								<Image
									src={news.first_img_page_two}
									alt={news.alt_first_img_page_two}
									width={1200}
									height={1200}
								/>
							</div>

							<H2>{news.second_title_page_two}</H2>
							<Paragraph size={0.8}>
								{news.second_text_page_two}
							</Paragraph>

							<div style={{ margin: "1rem 0" }}>
								<Image
									src={news.second_img_page_two}
									alt={news.alt_second_img_page_two}
									width={1200}
									height={1200}
								/>
							</div>

							<div
								style={{
									lineHeight: 1.5,
									marginTop: "2rem",
								}}>
								<Paragraph size={0.8} weight={700}>
									{news.edition}
								</Paragraph>
								<Paragraph size={0.8} weight={700}>
									{news.responsible}
								</Paragraph>
							</div>
						</div>
					</NewspaperArticleContainer>
				</div>
			))}
		</NewspaperContainer>
	)
}

export default Newspaper
