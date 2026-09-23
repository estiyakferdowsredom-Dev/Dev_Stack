import banner from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <section className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-12">
        <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#101522] sm:text-6xl">
                Build Your Ideal<br />
                <span className="bg-linear-to-r from-[#ff451d] via-[#ff1d6b] to-[#8a2be2] bg-clip-text text-transparent">
                    Development Stack
                </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-6 text-gray-600 sm:text-base">
                Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
                <button
                    className="rounded-md bg-linear-to-r from-[#ff451d] via-[#ff1d6b] to-[#8a2be2] px-5 py-3 text-xs font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
                    type="button"
                >
                    Explore Technologies
                </button>
                <button
                    className="rounded-md border border-gray-200 bg-white px-7 py-3 text-xs font-medium text-gray-700 transition-colors hover:border-[#d8217d] hover:text-[#d8217d]"
                    type="button"
                >
                    Learn More
                </button>
            </div>
        </div>
        <div className="flex justify-center lg:justify-end">
            <img className="w-full max-w-md object-contain" src={banner} alt="Development stack illustration" />
        </div>
        </section>
    );
};

export default Banner;