"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

interface Props {}

export const Navbar: FC<Props> = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("home");

	return (
		<>
			<button type="button" onClick={()=> setIsOpen(true)} className="fixed top-2 right-3 bg-[#010615] p-3 rounded-lg lg:hidden text-white">
				<Menu size={40} />
			</button>
			<nav className={`lg:px-20 fixed overflow-auto top-0 left-0 right-0 bottom-0 lg:bottom-auto max-w-[2000px] w-full lg:h-32 ${isOpen ? "flex bg-[#000]" : "hidden"} lg:flex justify-center items-center mx-auto text-white font-montserrat bg-[#01040f]`}>
				<div className="relative pt-20 lg:pt-0 flex flex-col gap-y-20 lg:flex-row lg:justify-between items-center h-full w-full">
					<button type="button" onClick={()=> setIsOpen(false)} className="border rounded-full p-1 absolute top-5 right-5 lg:hidden text-white">
						<X size={40} />
					</button>
					<Link href="/">
						<Image src="/logo.webp" alt="ALStudio" width={160} height={160} className="w-52 lg:w-40" />
					</Link>
					<ul className="flex flex-col lg:flex-row items-center gap-y-12 lg:gap-10 text-xl md:text-2xl">
						<li onClick={()=> setIsOpen(false)}>
							<Link href="#home" onClick={()=> setActiveLink("home")} className={`${activeLink === "home" ? "underline" : ""}`}>Home</Link>
						</li>
						<li onClick={()=> setIsOpen(false)}>
							<Link href="#about" onClick={()=> setActiveLink("about")} className={`${activeLink === "about" ? "underline" : ""}`}>About</Link>
						</li>
						<li onClick={()=> setIsOpen(false)}>
							<Link href="#portfolio" onClick={()=> setActiveLink("portfolio")} className={`${activeLink === "portfolio" ? "underline" : ""}`}>Portfolio</Link>
						</li>
						<li onClick={()=> setIsOpen(false)}>
							<Link href="#contact" onClick={()=> setActiveLink("contact")} className={`${activeLink === "contact" ? "underline" : ""}`}>Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
