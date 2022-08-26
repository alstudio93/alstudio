import React from 'react'
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"
import { FaFileContract } from "react-icons/fa"
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer id="contact" className="mx-auto pt-6 flex flex-col gap-y-5 items-center pb-3 justify-center shadow-lg dark:shadow-none dark:bg-black dark:text-slate-200">

                {/* <!-- icons --> */}
                <div className="flex items-center gap-x-5">
                    {/* <Link href="https://www.linkedin.com/company/bupcards"><a target="_blank" rel="noreferrer" title="Visit LinkedIn"><BsLinkedin className='text-2xl' /></a></Link> */}
                    <Link href="https://www.instagram.com/alstudio93/"><a target="_blank" rel="noreferrer" title="Visit Instagram"><BsInstagram className='text-2xl' /></a></Link>
                    <Link href="https://twitter.com/AndrewTLadd"><a target="_blank" rel="noreferrer" title="Visit Twitter"><BsTwitter className='text-2xl' /></a></Link>
                    <>
                        <label htmlFor="my-modal" className="cursor-pointer modal-button "><FaFileContract className='text-2xl' title='View Contract' /></label>

                        <input type="checkbox" id="my-modal" className="modal-toggle" />

                        <div className="modal dark:text-black">
                            <div className="modal-box">
                                <h3 className="text-lg font-bold text-center"></h3>
                                <div className="flex flex-col items-center pt-10 gap-y-5 ">
                                    <Link href="mailto: hello@bup.bio">General - hello@bup.bio</Link>
                                    <Link href="mailto: design@bup.bio">Design - design@bup.bio</Link>
                                    <Link href="mailto: enterprise@bup.bio">Enterprise - enterprise@bup.bio</Link>
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn">Close</label>
                                </div>
                            </div>
                        </div>
                    </>


                </div>



                {/* <!-- Copyright --> */}
                <span className="text-xs font-nunito"
                >Copyright &copy; {new Date().getFullYear()} ALStudio
                </span>

            </footer>
        </>

    )
}

export default Footer