import Image from 'next/future/image'
import Link from 'next/link'
import React from 'react'
import { About, Footer, Hero, Portfolio } from '../components'
import Navbar from '../components/Navigation'

const Home = () => {
  return (
    <>
      <Navbar />
      <main className='flex flex-col mt-[89px] bg-slate-900 dark:bg-black pt-20 lg:pt-44 min-h-screen text-slate-200'>
        <Hero />
        <About />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Home

