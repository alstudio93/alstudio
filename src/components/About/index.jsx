import React from 'react'
import Link from 'next/link'

const AboutComp = () => {
    return (
        <section id="about" className='flex flex-col items-center max-w-4xl  mx-auto pt-60 gap-y-10 px-2'>
            <h2 className='font-quicksand text-section-h2  text-center text-transparent bg-clip-text bg-gradient-to-br from-[#949494] to-[#fff]'>About the Studio</h2>
            <p className=''>Following his Bachelor&#39;s of Music Education, ALStudio was founded by Andrew T. Ladd after discovering a new passion for creating beautiful and performant websites. Now more than ever, humans are impatient creatures, which is why it is crucial to make their first impression of your website a lasting one! By working with ALStudio, you will be guaranteed:
            </p>
            <ul className='px-5  md:text-left list-disc w-full'>
                <li>
                    A sleek, modern user-interface optimized for its users experience
                </li>
                <li>
                    A website that is effortless to navigate
                </li>
                and finally...
                <li>
                    A website that will hook your viewer in and help make that conversion!
                </li>

            </ul>

            <span className='block text-3xl font-bold w-full text-center '>Exciting News!</span>
            <p className='w-full'>
                ALStudio has officially partnered with <span><Link href="/"><a>LoomCo</a></Link></span>! <span className='block py-5 font-bold text-xl'>What does this mean for you?</span>Between ALStudio and LoomCo, we are now YOUR one-stop-shop for all of your brand identity needs!</p>
        </section>
    )
}

export default AboutComp