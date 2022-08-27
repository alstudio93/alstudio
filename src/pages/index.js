import Head from 'next/head'
import { About, Footer, Hero, Portfolio } from '../components'
import Navbar from '../components/Navigation'

const Home = () => {

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- HTML Meta Tags --> */}
        <meta name="description" content="Design and Develop beautiful and performant websites." />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.alstudio.net" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ALStudio" />
        <meta property="og:description" content="Design and Develop beautiful and performant websites." />
        <meta property="og:image" content="http://www.alstudio.net/assets/logo-ogimage.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="alstudio.net" />
        <meta property="twitter:url" content="https://www.alstudio.net" />
        <meta name="twitter:title" content="ALStudio" />
        <meta name="twitter:description" content="Design and Develop beautiful and performant websites." />
        <meta name="twitter:image" content="http://www.alstudio.net/assets/logo-ogimage.png" />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
        <title>ALStudio</title>
      </Head>
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

