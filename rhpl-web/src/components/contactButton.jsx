import { FaEnvelope } from "react-icons/fa";

const ContactButton =() =>{
    return (
        <>
        <button className="z-10 fixed bottom-5 right-5 flex justify-center items-center contact bg-[#0e6ba8] text-white rounded-[100%]">
            <div>
            <FaEnvelope className="text-2xl"/>
            </div>
        </button>
        </>
    )
}
export default ContactButton;