
const BupVideo = () => {
    return (
        <section
            className="flex flex-col items-center pt-32 mx-auto lg:pt-56 max-w-section gap-y-8"
        >
            <h2
                className="font-quicksand font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl py-4 text-center text-transparent bg-clip-text bg-gradient-to-br from-[#949494] to-[#fff]"
            >
                Build an Accessible, <br />Responsive Navigation
            </h2>

            <div className="w-full max-w-3xl">
                <iframe className="w-full rounded-lg aspect-video dark:shadow-none" src="https://www.youtube.com/embed/IdZ-ZHLyEHs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </section>

    )
}

export default BupVideo