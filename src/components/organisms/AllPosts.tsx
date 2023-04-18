import React, { useEffect, useState } from "react"
import { Card, AllPostsContainer, ImageCard } from "../atoms"
import { ISlug, IPost } from "@/utils/interfaces"
import Link from "next/link"
import { useRouter } from "next/router"
import { createClient } from "../../../prismicio"
import ReactPaginate from "react-paginate"
import Icon from "@mdi/react"
import { mdiChevronLeftCircle, mdiChevronRightCircle } from "@mdi/js"

const AllPosts = ({ slug }: ISlug) => {
	const router = useRouter()
	const [posts, setPosts] = useState<IPost[]>([])

	const currentRoute = router.pathname.split("/")[1]

	const [itemOffset, setItemOffset] = useState(0)
	const [itemsPerPage, setItemsPerPage] = useState(0)

	const endOffset = itemOffset + itemsPerPage
	const currentItems = posts.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(posts.length / itemsPerPage)

	const handlePageClick = (event: { selected: number }) => {
		const newOffset = (event.selected * itemsPerPage) % posts.length
		setItemOffset(newOffset)
	}

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

		const screen = window.screen.width

		if (screen < 769) {
			setItemsPerPage(4)
		} else if (screen > 768 && screen < 1024) {
			setItemsPerPage(4)
		} else if (screen > 1023 && screen < 1279) {
			setItemsPerPage(6)
		} else {
			setItemsPerPage(8)
		}
	}, [slug, getPosts])

	return (
		<div>
			<AllPostsContainer>
				{currentItems.map((p) => (
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
			<div className="h-20 flex justify-center w-full">
				<div className="sm:w-[20rem] sm:flex items-center justify-center ">
					<ReactPaginate
						breakLabel="..."
						nextLabel={
							<Icon
								path={mdiChevronRightCircle}
								size={1.2}
								color="#FF8343"
							/>
						}
						onPageChange={handlePageClick}
						pageCount={pageCount}
						previousLabel={
							<Icon
								path={mdiChevronLeftCircle}
								size={1.2}
								color="#FF8343"
							/>
						}
						marginPagesDisplayed={2}
						className="flex"
					/>
				</div>
			</div>
		</div>
	)
}

export default AllPosts
