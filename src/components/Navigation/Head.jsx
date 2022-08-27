import React from 'react'
import Head from 'next/head'

const HeadComp = () => {
    return (
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
    )
}

export default HeadComp