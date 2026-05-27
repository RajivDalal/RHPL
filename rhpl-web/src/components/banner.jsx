const Banner = () => {
    return (
        <div
            style={{
                background: "linear-gradient(135deg, #060b16 0%, #0e1b38 45%, #182e56 80%, #203f70 100%)"
            }}
            className="
        relative
        overflow-hidden
        text-[#f5f5f5]
        min-h-[calc(50vh-72px)]
        flex
        items-center
        justify-center
        px-6
        py-16
    "
        >
            {/* Ambient background glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[#ff821c] opacity-[0.06] blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full bg-[#3b82f6] opacity-[0.14] blur-[140px] pointer-events-none" />
            <div className="absolute top-[20%] right-[15%] w-[35%] h-[45%] rounded-full bg-[#8b5cf6] opacity-[0.05] blur-[110px] pointer-events-none" />

            <div className="relative z-10 max-w-[1240px] w-full">
                {/* Workshop heading */}
                <p className="
    text-center
    leading-tight
    max-w-[980px]
    mx-auto
">
                    <span className="
                    block font-[IBM_Plex_Serif]
                   lg:text-2xl md:text-xl text-lg
                    font-medium tracking-wide text-[#d6e4f0] mb-2
                ">
                        Workshop on
                    </span>

                    <span className="
                    block font-calson
                    xl:text-[3.7rem]
lg:text-[3rem]
md:text-[2.5rem]
text-[2.1rem]
                    font-semibold leading-[1.15] text-white 
                ">
                        Research Highlights in <br /> Programming Languages
                    </span>
                </p>

                {/* Date */}
                <p className="
                mt-6 mb-3 text-center font-[Inter]
                lg:text-[1.35rem]
md:text-xl
text-lg
                font-medium tracking-wide text-[#d6d6d6]
            ">
                    December 17 – 19, 2025
                </p>

                {/* Venue */}
                <p className="
                mt-6 text-center font-[IBM_Plex_Serif] font-semibold
                lg:text-[1.6rem]
                md:text-[1.45rem]
                text-xl
                text-[#e2e8f0] navmenu
            ">
                    <a href="https://www.bits-pilani.ac.in/goa/"
                        className="hover:text-white transition-colors duration-200">
                        BITS Pilani, K K Birla Goa Campus
                    </a>
                </p>

                {/* Co-located */}
                <p className="
                mt-2 text-center font-[Inter]
                lg:text-[1.3rem]
                md:text-[1.2rem]
                text-lg
                text-[#b8c1cc] italic navmenu
            ">
                    co-located with{" "}
                    <a href="https://www.fsttcs.org.in/2025/"
                        className="hover:text-white transition-colors duration-200">
                        FSTTCS 2025
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Banner;