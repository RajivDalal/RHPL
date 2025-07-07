const Footer =() =>{
    return (
        <div className="sm:flex justify-between bg-[#0b2545] text-[#e5e5e5] py-5 text-sm">
            <div className="flex items-center px-4 w-max">&copy; IARCS, 2025</div>
            {/* Abhishek sir, Rajiv, Nidhi */}
            <br />
            <div className="px-4 grid grid-flow-col grid-rows-2 auto-cols-[fit-content(10px)]">
                <div className="row-span-2 flex justify-end pr-5 items-center">Contact:</div>
                <div className="w-max">abhisekh.sankaran@tcs.com </div> 
                <div className="w-max"> divyesh.unadkat@synopsys.com</div>
            </div>

            
            {/* <div>
                <p className="py-10 space-y-2">
                    <div>Please write to any of the following organizers for any queries.</div>
                    <ul className="list-disc space-y-1 ml-7">
                    <li>Abhisekh Sankaran (abhisekh.sankaran@tcs.com)</li>
                    <li>Divyesh Unadkat (divyesh.unadkat@synopsis.com) </li>
                    </ul>
                </p>
            </div> */}
        </div>
    )
}
export default Footer;  