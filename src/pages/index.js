import { About, Footer, Hero, Portfolio } from '../components'
import Navbar from '../components/Navigation'

const Home = () => {
  return (
    <>
      <Navbar />
      <main className='flex flex-col mt-[89px] bg-slate-900 dark:bg-black pt-20 lg:pt-44 min-h-screen text-slate-200'>
        <Hero />
        <div
          className="hidden lg:block h-5 bg-gradient-to-br from-[#ffffff] to-[#000000] w-full mt-80 -skew-y-12"
        >
        </div>
        <About />
        <div
          className="hidden lg:block h-5 bg-gradient-to-br from-[#ffffff] to-[#000000] w-full mt-80 skew-y-12"
        >
        </div>
        <Portfolio />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  )
}

export default Home

