import Image from 'next/future/image'
import Link from 'next/link'
import React from 'react'
import { PortfolioArray } from './PortfolioArray'

const Portfolio = () => {
    return (
        <section id="portfolio" className='flex flex-col items-center max-w-4xl pb-20 mx-auto pt-60 gap-y-10 px-2'>
            <h2 className='font-quicksand text-section-h2 text-center text-transparent bg-clip-text bg-gradient-to-br from-[#949494] to-[#fff]'>Portfolio</h2>
            {
                PortfolioArray.map((entry) => (
                    <div key={entry.title} className='flex flex-col items-center gap-y-4  pt-20'>
                        <h3 className='text-center text-4xl'>{entry.title}</h3>
                        <div>
                            <Image src={entry.img}
                                width="800"
                                height="250"
                                quality={100}
                                className="rounded-lg"
                            />
                        </div>
                        <p className='text-center max-w-[320px] sm:max-w-[740px]'>{entry.about}</p>
                        <div>
                            <h4 className='text-center'>Built with:</h4>
                            <ul className=' flex gap-x-4'>
                                {
                                    entry.builtWith.map((link) => (
                                        <div key={link.title}>
                                            <li>
                                                <Link href={link.url}><a target="_blank" rel="noreferrer">{link.title}</a></Link>
                                            </li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                        <Link href={entry?.websiteURL}><a target="_blank" rel="noreferrer" className='py-2 px-4 border border-slate-200 rounded-lg'>{entry.websiteText}</a></Link>
                    </div>
                ))
            }
        </section>
    )
}

export default Portfolio