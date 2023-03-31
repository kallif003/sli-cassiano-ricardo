import { Posts } from "@/utils/interfaces"
import React from "react"
import Carousel from "react-elastic-carousel"
import { Paragraph, OverflowContainer } from "../atoms"
import Image from "next/image"
const TeachersPost = ({ post }: Posts) => {
	return (
		<>
			{post.map((p) => (
				<div
					key={p.slug}
					className="flex justify-evenly items-center sm:flex-col md:flex-col xl:mt-10">
					<div className="mt-24 md:mt-10 sm:mt-10 ">
						<h1 className="text-[1.8rem] sm:text-[1rem] font-bold sm:text-center">
							{p.title.toUpperCase()}
						</h1>
						<OverflowContainer>
							<Paragraph>{p.text.toUpperCase()}</Paragraph>
						</OverflowContainer>
					</div>

					<div className="w-[35rem] md:w-[45rem] sm:w-full mt-32 md:mt-12 mb-8 sm:px-7 sm:mt-5 ">
						<Carousel showArrows={false} className="sm:h-[15rem]">
							<div className="w-[28rem] h-[20rem] sm:h-[14rem] sm:w-[30rem]">
								<Image
									src={p.img_one_post}
									alt={p.alt_one_post}
									width="1200"
									height="1000"
									layout="responsive"
									className="rounded-md"
								/>
							</div>
							<div className="w-[28rem] h-[20rem] sm:h-[10rem] sm:w-[30rem]">
								<Image
									src={p.img_two_post as string}
									alt={p.alt_two_post as string}
									width="1200"
									height="1000"
									layout="responsive"
									className="rounded-md"
								/>
							</div>
							<div className="w-[28rem] h-[20rem] sm:h-[10rem] sm:w-[30rem]">
								<Image
									src={p.img_three_post as string}
									alt={p.alt_three_post as string}
									width="1200"
									height="1000"
									layout="responsive"
									className="rounded-md"
								/>
							</div>
						</Carousel>
					</div>
				</div>
			))}
		</>
	)
}
export default TeachersPost
