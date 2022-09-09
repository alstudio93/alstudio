
const BupVideo = () => {
    return (
        <section
            className="flex flex-col items-center px-2 pt-32 mx-auto lg:pt-56 max-w-section gap-y-8"
        >
            <h2
                className="font-montserrat font-medium text-section-h2 leading-[1.2] py-4 text-center dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-[#949494] dark:to-[#fff] max-w-[1000px]"
            >
                Build an Accessible and Responsive Navigation
            </h2>

            <div className="w-full max-w-3xl">
                <iframe className="w-full rounded-lg aspect-video dark:shadow-none" src="https://www.youtube.com/embed/IdZ-ZHLyEHs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </section>

    )
}

export default BupVideo