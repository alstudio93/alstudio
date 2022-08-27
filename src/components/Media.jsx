
const BupVideo = () => {
    return (
        <section
            className="flex flex-col items-center pt-20 mx-auto max-w-section gap-y-8"
        >
            <h2
                className="font-quicksand font-medium sm:text-section-h2 text-center text-transparent bg-clip-text bg-gradient-to-br from-[#949494] to-[#fff]"
            >
                Build an Accessible, <br />Responsive Navigation
            </h2>

            <div className="w-full max-w-3xl">
                <iframe className="w-full rounded-lg shadow-lg aspect-video dark:shadow-none" src="https://www.youtube.com/embed/IdZ-ZHLyEHs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </section>

    )
}

export default BupVideo