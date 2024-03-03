"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

interface Props {}

export const Navbar: FC<Props> = () => {
	return (
		<>
		<button>
			<Menu size={32} className="lg:hidden text-white absolute top-5 right-5" />
		</button>
		<nav className="px-10 sticky top-0 left-0 right-0 max-w-[2000px] w-full h-32 hidden lg:flex justify-center items-center mx-auto text-white font-montserrat bg-[#010615]">
			<div className="flex items-center justify-between w-full">
				<Link href="/">
					<Image src="/logo.webp" alt="ALStudio" width={160} height={160} />
				</Link>
				<ul className="flex items-center gap-10 text-2xl">
					<li>
						<Link href="#home">Home</Link>
					</li>
					<li>
						<Link href="#about">About</Link>
					</li>
					<li>
						<Link href="#portfolio">Portfolio</Link>
					</li>
					<li>
						<Link href="#contact">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
		</>
	);
};
