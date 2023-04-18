import React, { useEffect, useState } from "react"
import { Paragraph, Card } from "../../components/atoms"
import { IVideo } from "../../utils/interfaces"
import ReactPaginate from "react-paginate"
import Icon from "@mdi/react"
import { mdiChevronLeftCircle, mdiChevronRightCircle } from "@mdi/js"

const Repertoire = ({ videos }: IVideo) => {
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
	const currentItems = videos.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(videos.length / itemsPerPage)

	const handlePageClick = (event: { selected: number }) => {
		const newOffset = (event.selected * itemsPerPage) % videos.length
		setItemOffset(newOffset)
	}
	return (
		<div>
			<div className="flex justify-evenly flex-wrap items-center mt-10">
				{currentItems.map((v) => (
					<Card key={v?.slug} width={25} height={18}>
						{v?.link_type === "Web" ? (
							<iframe
								src={v?.videos}
								className="rounded-md"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
						) : (
							<div className="sm:px-5 px-10 w-[23rem] sm:w-[21rem]">
								<video controls className="rounded-md">
									<source src={v?.videos} type="video/mp4" />
								</video>
							</div>
						)}
						<div className="flex justify-between items-center w-full px-10 mt-5 flex-col relative">
							<div className="w-[18rem] flex justify-center items-center h-12">
								<h1 className="sm:text-[0.8rem] font-[700] overFlow">
									{v?.title.toUpperCase()}
								</h1>
							</div>

							<Paragraph size={0.8} className="text-[#b4b4b4]">
								{v?.date.split("-").reverse().join("/")}
							</Paragraph>
						</div>
					</Card>
				))}
			</div>
			<div className="fixed xl:top-[46rem] top-[45rem] flex justify-center w-full">
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
