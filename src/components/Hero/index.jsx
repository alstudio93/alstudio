import Link from 'next/link'
import Image from 'next/future/image'
const Hero = () => {
    return (
        <>
            <div className='flex flex-col items-center px-2'>
                <Image src="/assets/andrew.jpg" width="150" height="150" className='rounded-full'/>
                <div className='flex flex-col items-center pt-6 gap-y-3'>
                <h1 className='xs:leading-snug leading-[0.8] font-medium text-center text-hero-h1 font-quicksand text-transparent bg-clip-text bg-gradient-to-br from-[#949494] to-[#fff]'>Welcome to ALStudio</h1>
                <p className='text-center text-hero-p'>Website Design and Development</p>
                <div className='flex flex-col xs:pt-4 sm:flex-row gap-y-5 md:gap-y-0 gap-x-10'>
                    <Link href="#contact"><a className='w-40 px-4 py-2 text-base text-center rounded-lg btn-gradient md:text-xl'>Get in Touch!</a></Link>
                    <Link href="#portfolio"><a className='w-40 px-4 py-2 text-base text-center rounded-lg btn-gradient md:text-xl'>Portfolio</a></Link>
                </div>
                </div>
            </div>
        </>
    )
}
export default Hero