import Image from 'next/future/image'
import Link from 'next/link'
import { PostData } from './BlogData'

const Blog = () => {
  return (
    <section id="blog" className='px-2 pt-32 mx-auto md:pt-30 lg:pt-52 '>
        <h2 className='text-center text-section-h2 font-montserrat'>Featured Posts</h2>
        <div className='grid grid-cols-1 py-10 mx-auto gap-y-10 lg:grid-cols-2 gap-x-20 max-w-section justify-items-center'>
            {
                PostData.map((post)=> (
                    <article className='shadow-lg dark:shadow-none flex flex-col items-center max-w-[400px]  rounded-2xl   border border-[#ffffffa4]'>
                        <div className='relative w-full h-80'>
                            <Image src={post.image} className='object-cover w-full rounded-tl-2xl rounded-tr-2xl' fill  />
                        </div>            
                        <div className='flex flex-col justify-between flex-1 px-2 py-5 gap-y-5'>
                            <h3 className='text-center text-blog-card-h3 '>{post.title}</h3>
                            <p className='text-center '>{post.description}</p>
                            <Link href={post.link}><a className='w-1/2 py-2 mx-auto text-center bg-transparent shadow-lg dark:shadow-none dark:border rounded-2xl' target="_blank" rel="noreferrer">Read Blog</a></Link>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
  )
}

export default Blog