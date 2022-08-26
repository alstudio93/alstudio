import Link from 'next/link'
const Hero = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-y-5 sm:gap-y-5'>
                <h1 className='text-hero-h1 font-quicksand text-center'>Welcome ALStudio</h1>
                <p className='text-hero-p text-center'>Website Design and Development</p>
                <div className='flex flex-col sm:flex-row gap-y-5 md:gap-y-0 gap-x-10'>
                    <Link href=""><a className=' w-screen sm:w-40 px-4 py-2  text-center sm:rounded-lg btn-gradient text-base md:text-xl'>Get in Touch!</a></Link>
                    <Link href=""><a className=' w-screen sm:w-40 px-4 py-2  text-center sm:rounded-lg btn-gradient text-base md:text-xl'>Portfolio</a></Link>
                </div>
            </div>
        </>
    )
}
export default Hero