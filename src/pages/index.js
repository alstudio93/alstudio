import { About, Footer, Hero, Portfolio, Head, Divider, Media, Blog } from '../components'
import Navbar from '../components/Navigation'

const Home = () => {

  return (
    <>
      <Head />
      <Navbar />
      <main className='flex flex-col mt-[89px] bg-white dark:text-slate-200 dark:bg-black pt-20 lg:pt-36 min-h-screen '>
        <Hero />
        <Divider skew="-skew-y-12" margin="mt-[18rem]" />
        <About />
        <Divider skew="skew-y-12" />
        <Media />
        <Divider skew="-skew-y-12" margin="mt-[18rem]" />
        <Portfolio />
        <Divider skew="skew-y-12" />
        <Blog />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  )
}

export default Home

