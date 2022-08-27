import Link from 'next/link'
const Hero = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-y-5 sm:gap-y-5'>
                <h1 className='font-medium text-center text-hero-h1 font-quicksand text-transparent bg-clip-text bg-gradient-to-br from-[#949494] to-[#fff]'>Welcome to ALStudio</h1>
                <p className='text-center text-hero-p'>Website Design and Development</p>
                <div className='flex flex-col sm:flex-row gap-y-5 md:gap-y-0 gap-x-10'>
                    <Link href=""><a className='w-screen px-4 py-2 text-base text-center sm:w-40 sm:rounded-lg btn-gradient md:text-xl'>Get in Touch!</a></Link>
                    <Link href=""><a className='w-screen px-4 py-2 text-base text-center sm:w-40 sm:rounded-lg btn-gradient md:text-xl'>Portfolio</a></Link>
                </div>
            </div>
        </>
    )
}
export default Hero