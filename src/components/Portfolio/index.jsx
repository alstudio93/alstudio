import Image from 'next/future/image'
import Link from 'next/link'
import React from 'react'
import { PortfolioArray } from './PortfolioArray'

const Portfolio = () => {
    return (
        <section id="portfolio" className='flex flex-col items-center max-w-5xl px-2 pt-32 pb-20 mx-auto md:pt-30 lg:pt-52 gap-y-10'>
            <h2 className='font-quicksand font-medium text-section-h2 text-center text-transparent bg-clip-text bg-gradient-to-br from-[#949494] to-[#fff]'>Portfolio</h2>
            {
                PortfolioArray.map((entry) => (
                    <div key={entry.title} className='flex flex-col items-center lg:mt-10 gap-y-4'>
                        <h3 className='text-2xl text-center md:text-4xl'>{entry.title}</h3>
                        <h4 className='text-base text-center md:text-xl'>{entry.createdBy}</h4>

                        {
                            entry.img && (
                                <Image src={entry?.img}
                                    width="1000"
                                    height="250"
                                    quality={100}
                                    className="rounded-lg"
                                    alt={entry?.title}
                                />
                            )
                        }
                        {
                            entry.branding && (
                                <div className='flex flex-wrap justify-center gap-3 py-5'>
                                    {
                                        entry?.branding?.map((img) => (
                                            <Image key={img.img} src={img.img} width={img.imgWidth} height={img.imgHeight} />
                                        ))
                                    }
                                </div>
                            )
                        }
                        <p className='text-center max-w-[320px] sm:max-w-[740px] lg:max-w-[830px] lg:text-lg'>{entry.about}</p>
                        <div>
                            <h4 className='text-xl font-bold text-center'>Built with:</h4>
                            <ul className='flex gap-x-4'>
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
                        <Link href={entry?.websiteURL}><a target="_blank" rel="noreferrer" className='px-4 py-2 border rounded-lg border-slate-200'>{entry.websiteText}</a></Link>
                    </div>
                ))
            }
        </section>
    )
}

export default Portfolio