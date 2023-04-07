import React, { useEffect, useState } from "react"
import Carousel from "react-elastic-carousel"
import {
	Paragraph,
	OverflowContainer,
	TeacherPostContainer,
} from "../atoms"
import { createClient } from "../../../prismicio"
import Image from "next/image"
import { IPost } from "@/utils/interfaces"

interface IPrismic {
	type: string
	slug: string
}

const TeachersPost = ({ type, slug }: IPrismic) => {
	const [post, setPost] = useState<IPost[]>([])

	const getPost = async () => {
		const client = createClient()

		const data = [await client.getByUID(String(type), String(slug))]

		const post = data.map((e: any) => ({
			slug: e.uid,
			title: e.data.title,
			text: e.data.text[0].text,
			img_one_post: e.data.img_one_post.url,
			alt_one_post: e.data.img_one_post.alt,
			img_two_post: e.data.img_two_post.url,
			alt_two_post: e.data.img_two_post.alt,
			img_three_post: e.data.img_three_post.url,
			alt_three_post: e.data.img_three_post.alt,
		}))

		setPost(post)
	}

	useEffect(() => {
		if (type && slug) getPost()
	}, [type, slug, getPost])

	return (
		<>
			{post.map((p) => (
				<TeacherPostContainer key={p?.slug}>
					<div className="mt-24">
						<h1 className="text-[1.8rem] sm:text-[1rem] font-bold text-center">
							{p?.title.toUpperCase()}
						</h1>
						<OverflowContainer>
							<Paragraph>{p?.text.toUpperCase()}</Paragraph>
						</OverflowContainer>
					</div>

					<div className="w-[35rem] md:w-[45rem] sm:w-full mt-32 md:mt-12 mb-8 sm:px-7 sm:mt-5 ">
						<Carousel showArrows={false} className="sm:h-[15rem]">
							<div className="w-[28rem] h-[20rem] sm:h-[14rem] sm:w-[30rem]">
								<Image
									src={p?.img_one_post}
									alt={p?.alt_one_post}
									width="1200"
									height="1000"
									layout="responsive"
									className="rounded-md"
								/>
							</div>
							<div className="w-[28rem] h-[20rem] sm:h-[10rem] sm:w-[30rem]">
								<Image
									src={p?.img_two_post as string}
									alt={p?.alt_two_post as string}
									width="1200"
									height="1000"
									layout="responsive"
									className="rounded-md"
								/>
							</div>
							<div className="w-[28rem] h-[20rem] sm:h-[10rem] sm:w-[30rem]">
								<Image
									src={p?.img_three_post as string}
									alt={p?.alt_three_post as string}
									width="1200"
									height="1000"
									layout="responsive"
									className="rounded-md"
								/>
							</div>
						</Carousel>
					</div>
				</TeacherPostContainer>
			))}
		</>
	)
}
export default TeachersPost
