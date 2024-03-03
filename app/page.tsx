import { PortfolioArray } from "@/util/portfolio-list";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<section className="flex flex-col items-center">
				<div className="flex justify-center items-center pt-32">
					<Image src="/heading.svg" alt="ALStudio" width={800} height={800} />
					<div className="flex flex-col items-center gap-y-5">
						<h1 className=" font-montserrat text-white text-[6rem] leading-tight text-center">
							Welcome to <br /> ALStudio
						</h1>
						<p className="font-nunito text-white text-center text-3xl">
							Your Vision is My Blueprint.
						</p>
						<Link
							href="#contact"
							className="mt-5 text-white font-semibold p-3 w-72 text-center text-xl border rounded-full hover:bg-white hover:text-[#010615] transition-all"
						>
							Let&apos;s Connect!
						</Link>
					</div>
				</div>
				<div className="mt-20 flex justify-center items-center gap-x-10">
					<div className="w-96 h-[2px] bg-white"></div>
					<Link href="">
						<ChevronDown size={64} className="text-white" />
					</Link>
					<div className="w-96 h-[2px] bg-white"></div>
				</div>
			</section>

			{/* About ALStudio Section */}
			<section className="max-w-7xl w-full mx-auto py-32">
				<h2 className="font-montserrat text-white text-[6rem] leading-tight text-center">
					About Me
				</h2>

				<div className="flex flex-col items-center gap-y-5 mt-10">
					<Image
						src="/andrew.webp"
						alt="About Me"
						width={160}
						height={160}
						className="rounded-full"
					/>
					<p className="font-nunito text-white text-center text-xl w-2/3 leading-normal">
						Hi there! Welcome to ALStudio. My name is Andrew and I make it my goal to
						cater to you not only as a client, but as a fellow person who is on a
						mission to build something great! Whether you need a website redesign or are
						starting from scratch, together we will develop a strategy and roadmap to
						get you to where you want to be. Your dream is our blueprint. Let&apos;s
						make something amazing happen. Welcome to the Studio!
					</p>
				</div>
			</section>

			{/* Portfolio Section */}
			<section
				id="portfolio"
				className="flex flex-col items-center max-w-5xl px-2 py-32 mx-auto md:pt-30 lg:pt-52 gap-y-10 text-white"
			>
				<h2 className="font-montserrat text-white text-[6rem] leading-tight text-center">
					Portfolio
				</h2>
				{PortfolioArray.map((entry) => (
					<div
						key={entry.title}
						className="flex flex-col items-center pt-10 lg:pt-0 lg:mt-10 gap-y-4 font-montserrat"
					>
						<h3 className="text-2xl text-center md:text-4xl">{entry.title}</h3>
						<h4 className="text-base text-center md:text-xl">{entry.createdBy}</h4>

						{entry.img && (
							<Image
								src={entry?.img}
								width="1000"
								height="900"
								quality={100}
								className="rounded-lg"
								alt={entry?.title}
							/>
						)}
						{entry.branding && (
							<div className="flex flex-wrap justify-center gap-3 py-5">
								{entry?.branding?.map((img) => (
									<Image
										key={img.img}
										src={img.img}
										alt="Portfolio Image"
										width={img.imgWidth}
										height={img.imgHeight}
									/>
								))}
							</div>
						)}
						<p className="text-center max-w-[320px] sm:max-w-[740px] lg:max-w-[830px] lg:text-lg font-nunito">
							{entry.about}
						</p>
						<div>
							<h4 className="text-xl font-bold text-center">Built with:</h4>
							<ul className="flex gap-x-4">
								{entry.builtWith.map((link) => (
									<div key={link.title}>
										<li>
											<Link href={link.url} target="_blank" rel="noreferrer">
												{link.title}
											</Link>
										</li>
									</div>
								))}
							</ul>
						</div>
						<Link
							href={entry?.websiteURL}
							target="_blank"
							rel="noreferrer"
							className="w-auto px-6 py-2 rounded-lg shadow-lg dark:border border-slate-200 dark:shadow-none"
						>
							{entry.websiteText}
						</Link>
					</div>
				))}
			</section>
		</>
	);
}
