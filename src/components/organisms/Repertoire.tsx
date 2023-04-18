import React, { useState, useEffect } from "react"
import { H2, MusicButton, Paragraph, Card } from "@/components/atoms"
import { IRepertoire } from "@/utils/interfaces"
import ReactPaginate from "react-paginate"
import Link from "next/link"
import Icon from "@mdi/react"
import { mdiChevronLeftCircle, mdiChevronRightCircle } from "@mdi/js"

const Repertoire = ({ repertoire }: IRepertoire) => {
	const [itemOffset, setItemOffset] = useState(0)
	const [itemsPerPage, setItemsPerPage] = useState(0)

	useEffect(() => {
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
	}, [])

	const endOffset = itemOffset + itemsPerPage
	const currentItems = repertoire.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(repertoire.length / itemsPerPage)

	const handlePageClick = (event: { selected: number }) => {
		const newOffset =
			(event.selected * itemsPerPage) % repertoire.length
		setItemOffset(newOffset)
	}

	return (
		<div>
			<div className="flex justify-evenly flex-wrap items-center mt-10">
				{currentItems.map((r) => (
					<Card key={r?.slug} width={20} height={20}>
						{r?.link_type === "Web" ? (
							<iframe
								src={r?.video}
								className="rounded-md"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
						) : (
							<div className="sm:px-5 px-10 w-[23rem] sm:w-[21rem]">
								<video controls className="rounded-md">
									<source src={r?.video} type="video/mp4" />
								</video>
							</div>
						)}
						<div className="w-[18rem] flex justify-center items-center h-12 relative">
							<Paragraph
								className="mb-2 mt-5 overFlow"
								weight={700}
								size={1}>
								{r?.title.toUpperCase()}
							</Paragraph>
						</div>
						{r.lyrics != "" && (
							<MusicButton>
								<Link href={r?.lyrics} passHref target="_blank">
									<H2>Letra</H2>
								</Link>
							</MusicButton>
						)}
					</Card>
				))}
			</div>
			<div className="fixed xl:top-[46rem] top-[44.5rem] flex justify-center w-full">
				<div className="sm:w-[20rem]">
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

export default Repertoire
