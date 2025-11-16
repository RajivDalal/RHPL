const Banner =() =>{
    return (
        <>
        <div className="bg-gradient-to-t from-[#0b2545] to-[#0e6ba8] text-[#e5e5e5] lg:pt-14 pt-10 lg:pb-10 pb-4">
            <p className="mt-[-10px] lg:text-5xl md:text-[2.5rem] text-4xl leading-none text-center pb-6 font-share">
                <span className="lg:text-4xl md:text-[2rem] text-3xl">Workshop on</span> <br/> Research Highlights in Programming Languages
            </p>
            <p className="lg:text-3xl md:text-2xl text-xl leading-none text-center pb-2 font-share">December 17 - 19, 2025</p>
            <p className="lg:text-3xl md:text-2xl text-xl leading-none text-center pb-2 font-share"><a href="https://www.bits-pilani.ac.in/goa/">BITS Pilani, K K Birla Goa Campus</a></p>
            {/* <p className="lg:text-3xl md:text-2xl text-xl leading-none text-center pb-2 font-share">December 17 - 19, 2025, BITS Goa</p> */}
            <p className="mb-[-20px] navmenu lg:text-3xl md:text-2xl text-xl leading-none text-center font-share">(co-located with <a href="https://www.fsttcs.org.in/2025/">FSTTCS 2025</a>)</p>
        </div>
        </>
    )
}
export default Banner;
