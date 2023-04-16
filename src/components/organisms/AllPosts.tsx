import React, { useEffect, useState } from "react"
import { Card, AllPostsContainer, ImageCard } from "../atoms"
import { ISlug, IPost } from "@/utils/interfaces"
import Link from "next/link"
import { useRouter } from "next/router"
import { createClient } from "../../../prismicio"

const AllPosts = ({ slug }: ISlug) => {
	const router = useRouter()
	const [posts, setPosts] = useState<IPost[]>([])

	const currentRoute = router.pathname.split("/")[1]

	const getPosts = async () => {
		const client = createClient()

		const data = await client.getAllByType(String(slug), {
			orderings: [
				{
					field: "document.first_publication_date",
					direction: "desc",
				},
			],
		})

		const posts = data.map((e: any) => ({
			slug: e.uid,
			title: e.data.title,
			text: e.data.text[0].text,
			img_one_post: e.data.img_one_post.url,
			alt_one_post: e.data.img_one_post.alt,
			type: slug,
		}))

		setPosts(posts)
	}

	useEffect(() => {
		if (slug !== undefined) {
			getPosts()
		}
	}, [slug, getPosts])

	return (
		<AllPostsContainer>
			{posts.map((p) => (
				<Link
					href={{
						pathname: `/${currentRoute}/Posts/post`,
						query: { type: p?.type, slug: p?.slug },
					}}
					key={p?.slug}>
					<Card width={20} height={15}>
						<ImageCard
							src={p?.img_one_post}
							alt={p?.alt_one_post}
							width={1800}
							height={1800}
						/>

						<div className="w-[18rem] h-10 relative flex justify-center items-center">
							<h1 className="sm:text-[0.8rem] font-[700] overFlow">
								{p?.title.toUpperCase()}
							</h1>
						</div>
					</Card>
				</Link>
			))}
		</AllPostsContainer>
	)
}

export default AllPosts
