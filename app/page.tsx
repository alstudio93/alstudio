import { PortfolioArray } from "@/util/portfolio-list";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<section className="mt-8 lg:mt-5 flex flex-col items-center justify-between max-w-7xl w-full mx-auto">
				<div className="w-full flex flex-col xl:flex-row justify-center items-center gap-x-44 gap-y-5 pt-10">
					<Image
						src="/heading-cropped.png"
						alt="ALStudio"
						width={720}
						height={720}
						className="ml-10 xl:ml-0 max-w-[500px] w-2/3 sm:w-5/12"
					/>
					<div className="flex flex-col items-center">
						<h1 className="font-montserrat text-white text-h1-clamp leading-tight text-center">
							Welcome to <br /> ALStudio
						</h1>
						<p className="mt-3 font-nunito text-white text-center text-sub-heading-clamp">
							Web Design & Development
						</p>
						<Link
							href="#contact"
							className="mt-5 text-white font-semibold p-3 w-11/12 text-center text-xl border rounded-full hover:bg-white hover:text-[#010615] transition-all"
						>
							Let&apos;s Connect!
						</Link>
					</div>
				</div>

				<Link href="#about" className="mt-20 md:mt-10">
					<ChevronDown className="text-white stroke-1" />
				</Link>
			</section>

			{/* About ALStudio Section */}
			<section
				id="about"
				className="flex flex-col justify-between h-full items-center max-w-7xl w-[98%] mx-auto mt-32 xs:scroll-m-12 sm:scroll-m-52"
			>
				<h2 className="font-montserrat text-white text-h1-clamp leading-tight text-center">
					About Me
				</h2>

				<div className="flex flex-col items-center gap-y-5 mt-10 max-w-2xl">
					<Image
						src="/andrew.webp"
						alt="About Me"
						width={160}
						height={160}
						className="rounded-full w-1/3 sm:w-3/12 object-cover"
					/>
					<p className="font-nunito text-white text-center text-xl leading-normal">
						Hi there! Welcome to ALStudio. My name is Andrew and I make it my goal to
						cater to you not only as a client, but as a fellow person who is on a
						mission to build something great! Whether you need a website redesign or are
						starting from scratch, together we will develop a strategy and roadmap to
						get you to where you want to be. Your dream is my blueprint. Let&apos;s make
						something amazing happen. Welcome to the Studio!
					</p>
				</div>

				{/* <Link href="#portfolio" className="mt-8">
					<ChevronDown size={64} className="text-white" />
				</Link> */}
			</section>

			{/* Portfolio Section */}
			<section
				id="portfolio"
				className="flex flex-col items-center max-w-5xl px-2 py-32 mx-auto md:pt-30 lg:mt-52 gap-y-10 text-white"
			>
				<h2 className="font-montserrat text-white text-h1-clamp leading-tight text-center">
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
						<p className="text-center max-w-[320px] sm:max-w-[740px] lg:max-w-[830px] text-lg font-nunito ">
							{entry.about}
						</p>
						<div className="">
							<h4 className="text-xl font-bold text-center">Built with:</h4>
							<ul className="flex flex-col items-center gap-y-4 gap-x-4 pt-4">
								{entry.builtWith.map((link) => (
									<li key={link.title}>
										<Link href={link.url} target="_blank" rel="noreferrer">
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<Link
							href={entry?.websiteURL}
							target="_blank"
							rel="noreferrer"
							className="text-center px-6 py-2 rounded-lg shadow-lg dark:border border-slate-200 dark:shadow-none"
						>
							{entry.websiteText}
						</Link>
					</div>
				))}
			</section>

			<section id="contact" className="max-w-7xl w-full mx-auto mt-32 mb-16 scroll-m-28">
				<h2 className="font-montserrat text-white text-h1-clamp leading-tight text-center">
					Contact
				</h2>
				<div className="max-w-2xl mx-auto my-10 p-8 rounded-lg bg-white">
					<h2 className=" text-contact-heading-clamp text-center mb-6 font-montserrat">
						Tell me about <br className="sm:hidden" /> your project
					</h2>
					<form action="#" method="POST" className="font-nunito">
						<div className="mb-4">
							<label htmlFor="firstName" className=" text-gray-700">
								First Name
							</label>
							<input
								type="text"
								name="firstName"
								id="firstName"
								className="mt-1 py-1 px-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
								placeholder="Andrew"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="lastName" className="font-medium text-gray-700">
								Last Name
							</label>
							<input
								type="text"
								name="lastName"
								id="lastName"
								className="mt-1 py-1 px-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
								placeholder="Ladd"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="font-medium text-gray-700">
								Email Address
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="mt-1 py-1 px-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
								placeholder="andrew.laddstudio@gmail.com"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="websiteType" className=" text-gray-700">
								Type of Website
							</label>
							<select
								id="websiteType"
								name="websiteType"
								className="mt-1 block w-full rounded-md p-[6px] shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
							>
								<option value="personal">Personal</option>
								<option value="professional">Professional</option>
								<option value="portfolio">Portfolio</option>
								<option value="other">Other</option>
							</select>
						</div>
						<div className="mb-4">
							<label htmlFor="message" className=" text-gray-700">
								Your Message
							</label>
							<textarea
								id="message"
								name="message"
								rows={4}
								className="mt-1 p-1 w-full rounded-lg border border-gray-200 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
								placeholder="Tell me about your project..."
							/>
						</div>
						<div className="flex justify-center">
							<button
								type="submit"
								className="mt-3 px-6 py-3 w-full text-lg rounded-full text-white bg-[#152042]"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
