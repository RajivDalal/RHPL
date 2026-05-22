const Banner = () => {
    return (
        <div
    style={{ /*background: "linear-gradient(to bottom, #17253d, #06142c)"*/ 
        // background: "linear-gradient(135deg, #14213d 0%, #1d3557 45%, #2c5a86 100%)"
        background: "linear-gradient(120deg, #0f172a 0%, #1e3a5f 50%, #274c77 100%)"
    }}
    className="
        text-[#f5f5f5]
        min-h-[calc(50vh-72px)]
        flex
        items-center
        justify-center
        px-6
        py-16
    "
>
    <div className="max-w-[1240px] w-full">
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
                mt-1 text-center font-[IBM_Plex_Serif]
                lg:text-[1.35rem]
md:text-xl
text-lg
                text-[#e2e8f0] navmenu
            ">
                <a href="https://www.bits-pilani.ac.in/goa/"
                    className="hover:text-white transition-colors duration-200">
                    BITS Pilani, K K Birla Goa Campus
                </a>
            </p>

            {/* Co-located */}
            <p className="
                mt-1 text-center font-[Inter]
                lg:text-xl md:text-lg text-base
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