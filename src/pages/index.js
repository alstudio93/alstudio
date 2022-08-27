import { About, Footer, Hero, Portfolio, Head, Divider } from '../components'
import Navbar from '../components/Navigation'

const Home = () => {

  return (
    <>
      <Head />
      <Navbar />
      <main className='flex flex-col mt-[89px] bg-slate-900 dark:bg-black pt-20 lg:pt-44 min-h-screen text-slate-200'>
        <Hero />
        <Divider skew="-skew-y-12" />
        <About />
        <Divider skew="skew-y-12" />
        <Portfolio />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  )
}

export default Home

