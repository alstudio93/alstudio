import React from 'react'
import Link from 'next/link'

const AboutComp = () => {
    return (
        <section id="about" className='relative flex flex-col items-center max-w-4xl  mx-auto pt-28 md:pt-30 lg:pt-[15rem] gap-y-10 px-2 '>

            <h2 className='font-montserrat font-medium text-section-h2  text-center dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-[#949494] dark:to-[#fff]'>About the Studio</h2>
            <p className=''>Following his Bachelor&#39;s of Music Education, ALStudio was founded by Andrew T. Ladd after discovering a new passion for creating beautiful and performant websites. Now more than ever, humans are impatient creatures, which is why it is crucial to make their first impression of your website a lasting one! By working with ALStudio, you will be guaranteed:
            </p>
            <ul className='w-full px-5 list-disc md:text-left'>
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

            <span className='block w-full text-3xl font-bold text-center '>Exciting News!</span>
            <p className='w-full'>
                ALStudio has officially partnered with <span><Link href="/"><a>LoomCo</a></Link></span>! <span className='block py-5 text-xl font-bold'>Why is this exciting?!</span>Between ALStudio and LoomCo, we are now YOUR one-stop-shop for all of your branding solutions! Whether you need help naming your business, designing your website (or redesigning!), or you just need help developing marketing strategies to fit your brand, we are the team for you! </p>

        </section>
    )
}

export default AboutComp