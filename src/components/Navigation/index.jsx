import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from "next/future/image"
import { useTheme } from 'next-themes'
import { Links } from './LinksArray'

export const Navbar = () => {

  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const LogoByTheme = () => {
    if (mounted && resolvedTheme === "light") {
      return (
        <>
          <Link href="/"><Image src="/assets/logo-transparent.png" height="60" width="120" alt="ALStudio Logo" className='cursor-pointer' /></Link>
        </>
      )
    }

    else if (mounted && resolvedTheme === "dark") {
      return (
        <>
          <Link href="/"><Image src="/assets/logo.png" height="60" width="120" alt="ALStudio Logo" className='cursor-pointer' /></Link>
        </>
      )
    }

  }

  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-10 p-4 bg-white dark:shadow-none navbar-style-wrapper dark:bg-black '>
        <nav id="navbar"
          className='flex items-center justify-between mx-auto max-w-section'
        >
          {LogoByTheme()}

          <button id="mobileMenuTrigger" className={` ${toggleMobileMenu ? 'active z-20' : 'z-20 '}`} aria-expanded="false" aria-controls="navigationLinks"
            title="Open and Close Navigation" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}

          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </button>
          <ul id="navigationLinks" className={` lg:flex flex-row lg:items-center gap-x-5  ${toggleMobileMenu ? 'text-slate-200 flex flex-col items-center pt-20 lg:pl-5 fixed top-[100px] bg-slate-900 left-0 right-0 min-h-screen dark:bg-black gap-y-5' : 'hidden'} `}>

            {Links.map((item) => (
              <li key={item.title}>
                <Link href={item.location}>
                  <a className={`text-lg lg:text-base  font-nunito  dark:text-slate-200 ${item.title === "Login" ? "login-btn text-slate-100 hover:text-slate-600 py-2 px-6 rounded-lg dark:hover:text-black" : undefined}`} onClick={() => setToggleMobileMenu(false)}>
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
            <div className={`${toggleMobileMenu && "absolute top-0"}`}>
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="relative flex items-center justify-center transition-all bg-gray-200 rounded-lg w-9 h-9 dark:bg-gray-600 hover:ring-2 ring-gray-300 top-5 lg:top-0 "
                onClick={() =>
                  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                }
              >
                {mounted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-800 dark:text-gray-200"
                  >
                    {resolvedTheme === 'dark' ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    )}
                  </svg>
                )}
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar