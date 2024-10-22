"use client";

import { PortfolioArray } from "@/util/portfolio-list";
import axios from "axios";
import { ChevronDown, Hammer, LoaderIcon, Palette, PartyPopper, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Home() {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		websiteType: "",
		message: "",
	});

	const [isLoading, setIsLoading] = useState(false);
	const [emailSuccess, setEmailSuccess] = useState(false);

	const handleSendEmail = async (e: FormEvent) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			const response = await axios.post("api/sendgrid", formData);
			if (response.status === 201) {
				setEmailSuccess(true);
				setTimeout(() => {
					setEmailSuccess(false);
				}, 4000);
				setIsLoading(false);
				setFormData({
					fullName: "",
					email: "",
					websiteType: "",
					message: "",
				});
			}
		} catch (error: any) {
			console.log(error.message);
		}
	};

	return (
		<div className="flex flex-col items-center gap-y-40 max-w-7xl w-full mx-auto mt-32 lg:mt-60">
			{/* Hero Section */}
			<section className="w-full">
				<div className="w-full flex flex-col xl:flex-row justify-center items-center gap-x-44 gap-y-5">
					<Image src="/heading-cropped.png" alt="ALStudio" width={720} height={720} className="ml-10 xl:ml-0 max-w-[500px] w-2/3 sm:w-5/12" />
					<div className="flex flex-col items-center">
						<h1 className="font-montserrat text-white text-h1-clamp leading-tight text-center">
							Welcome to <br /> ALStudio
						</h1>
						<p className="mt-3 font-nunito text-white text-center text-sub-heading-clamp">Web Design & Development</p>
						<Link
							href="#contact"
							className="mt-5 text-white font-semibold p-3 w-11/12 text-center text-xl border rounded-full hover:bg-white hover:text-[#010615] transition-all"
						>
							Let&apos;s Connect!
						</Link>
					</div>
				</div>
			</section>

			{/* About ALStudio Section */}
			<section id="about" className="xs:scroll-m-16 sm:scroll-m-32 text-white">
				<h2 className="font-montserrat font-semibold  text-h1-clamp leading-tight text-center">About Me</h2>

				<div className="flex flex-col items-center gap-y-10 mt-10">
					<Image src="/andrew.webp" alt="About Me" width={160} height={160} className="rounded-full w-1/3 sm:w-3/12 object-cover" />
					<p className="font-nunito  text-center text-xl md:text-[1.2rem] leading-loose ">
						Hi there! Welcome to ALStudio. My name is Andrew and I make it my goal to cater to you not only as a client, but as a fellow person who is on a mission to
						build something great! Whether you need a website redesign or are starting from scratch, together we will collaborate and develop a roadmap to get you to
						where you want to be. Your dream is my blueprint. Welcome to the Studio!
					</p>

					<h4 className="flex flex-col lg:flex-row gap-y-3 items-center gap-x-3 text-[1.5rem] leading-relaxed sm:text-[2.25rem] text-center font-montserrat font-semibold">
						<PartyPopper className=" size-10 lg:size-8" /> ALStudio is now partnered with LoomCo!
						<PartyPopper className="hidden lg:block lg:size-8" />
					</h4>

					<p className="font-nunito  text-center text-xl md:text-[1.2rem] leading-loose  ">
						Why is this exciting? With the collaboration between ALStudio and LoomCo, we have become YOUR one-stop-shop for all your branding needs! Whether you
						require assistance in naming your business, designing or redesigning your website, or developing tailored marketing strategies to elevate your brand, our
						team is here to support you every step of the way!
					</p>
				</div>
			</section>

			{/* Services Section */}
			

			{/* Portfolio Section */}
			<section id="portfolio" className="flex flex-col items-center px-2 text-white scroll-m-16 lg:scroll-m-40">
				<h2 className="font-montserrat font-semibold text-white text-h1-clamp leading-tight text-center">Portfolio</h2>
				<div className="flex flex-col gap-y-10">
					{PortfolioArray.map((entry) => (
						<div key={entry.title} className="flex flex-col items-center pt-10 lg:pt-0 lg:mt-10 gap-y-4 font-montserrat">
							<h3 className="text-3xl text-center md:text-6xl">{entry.title}</h3>
							<h4 className="text-lg text-center md:text-2xl">{entry.createdBy}</h4>

							{entry.img && <Image src={entry?.img} width="1000" height="900" quality={100} className="rounded-lg" alt={entry?.title} />}
							{entry.branding && (
								<div className="flex flex-wrap justify-center gap-3 py-5">
									{entry?.branding?.map((img) => (
										<Image key={img.img} src={img.img} alt="Portfolio Image" width={img.imgWidth} height={img.imgHeight} />
									))}
								</div>
							)}
							<p className="text-center sm:max-w-[740px] lg:max-w-full text-[1.3rem] leading-loose font-nunito ">{entry.about}</p>
							<div className="">
								<h4 className="text-2xl font-bold text-center">Built with:</h4>
								<ul className="flex flex-col items-center gap-y-4 gap-x-4 pt-4">
									{entry.builtWith.map((link) => (
										<li key={link.title} className="text-xl">
											{link.title}
										</li>
									))}
								</ul>
							</div>
							<Link
								href={entry?.websiteURL}
								target="_blank"
								rel="noreferrer"
								className="text-center w-64 py-3 rounded-lg border border-slate-200  text-2xl hover:bg-[#ffffff13] hover:text-white transition-all"
							>
								Visit Website
							</Link>
						</div>
					))}
				</div>
			</section>

			<section id="contact" className="scroll-m-16 lg:scroll-m-32">
				<h2 className="font-montserrat font-semibold text-white text-h1-clamp leading-tight text-center">Contact</h2>
				<div className="max-w-2xl mx-auto my-10 p-8 rounded-lg bg-white">
					<h2 className=" text-contact-heading-clamp text-center mb-6 font-montserrat">
						Tell me about <br className="sm:hidden" /> your project
					</h2>
					<form onSubmit={handleSendEmail} className="font-nunito">
						<div className="mb-4">
							<label htmlFor="firstName" className=" text-gray-700">
								Full Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								className="mt-1 py-1 px-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
								placeholder="Andrew Ladd"
								required
								value={formData.fullName}
								onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
								required
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="websiteType" className=" text-gray-700">
								Select the type of website you need:
							</label>
							<select
								id="websiteType"
								name="websiteType"
								className="mt-1 block w-full rounded-md p-[6px] shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
								required
								value={formData.websiteType}
								onChange={(e) => setFormData({ ...formData, websiteType: e.target.value })}
							>
								<option value="">Select a Website Option</option>
								<option value="personal">Personal</option>
								<option value="portfolio">Portfolio</option>
								<option value="business">Business</option>
								<option value="non_profit">Non Profit</option>
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
								required
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
							/>
						</div>
						<div className="flex flex-col items-center justify-center">
							<button type="submit" className="mt-3 px-6 py-3 w-full text-lg rounded-full text-white bg-[#152042] flex justify-center items-center gap-x-2">
								<LoaderIcon size={20} className={`${isLoading ? "block animate-spin" : "hidden"}`} />
								{isLoading ? "Sending Email..." : "Send Message"}
							</button>

							{emailSuccess && (
								<>
									<h5 className="mt-8 text-green-700 text-center text-lg">Email Sent Successfully! </h5>

									<p className="mt-8 text-green-700 text-center">
										{" "}
										Please check your inbox to view a <br /> recap of this inquiry. Please check your spam folder if you do not see it.
									</p>
								</>
							)}
						</div>
					</form>
				</div>
			</section>

			<footer className="max-w-7xl w-full mx-auto pb-10 text-white text-center">
				<p className="font-nunito text-lg">&copy; {new Date().getFullYear()} ALStudio. All rights reserved.</p>
			</footer>
		</div>
	);
}
