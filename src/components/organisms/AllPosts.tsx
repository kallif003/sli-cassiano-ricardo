import React from "react"
import { Card } from "../atoms"
import Image from "next/image"
import { Posts } from "@/utils/interfaces"
import Link from "next/link"
import { useRouter } from "next/router"

const AllPosts = ({ post }: Posts) => {
	const router = useRouter()

	const currentRoute = router.pathname.split("/")[1]

	return (
		<div className="flex justify-evenly flex-wrap items-center mt-10">
			{post.map((p) => (
				<Link
					href={{
						pathname: `/${currentRoute}/${p.posts}/post/${p.slug}`,
					}}
					key={p.slug}>
					<Card width={20} height={15}>
						<div className="w-[18rem] h-[12rem] sm:h-[10rem] sm:w-[16rem]">
							<Image
								src={p.img_one_post}
								alt={p.alt_one_post}
								width="1200"
								height="100"
								layout="responsive"
								className="rounded-md"
							/>
						</div>
						<h1 className="sm:text-[0.8rem] font-[700]">
							{p.title.toUpperCase()}
						</h1>
					</Card>
				</Link>
			))}
		</div>
	)
}

export default AllPosts
