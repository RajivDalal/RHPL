import { VscLinkExternal } from "react-icons/vsc";
import { LuExternalLink } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";
import { HiExternalLink } from "react-icons/hi";
const Organizers = () => {
  return (
    <div className="content">
      <p className="pt-10 org">
        <ul className="list-[square] space-y-1">
          <li>
            <a href="https://www.csa.iisc.ac.in/~deepakd/"> <span className="underline">Deepak D'Souza</span> (IISc Bangalore) <RiExternalLinkLine className="inline"/> </a>
          </li>
          <li>
            <a href="https://www.cse.iitb.ac.in/~uday/"><span className="underline">Uday Khedker</span> (IIT Bombay) <RiExternalLinkLine className="inline"/></a>
          </li>
          <li>
            <a href="https://kumarmadhukar.github.io/"><span className="underline"> Kumar Madhukar</span> (IIT Delhi) <RiExternalLinkLine className="inline"/></a>
          </li>
          <li>
            <a href="https://kartiknagar.github.io/"><span className="underline"> Kartik Nagar</span> (IIT Madras) <RiExternalLinkLine className="inline"/></a>
          </li>
          <li>
            <a href="https://www.microsoft.com/en-us/research/people/grama/"><span className="underline"> Ganesan Ramalingam</span> (Microsoft) <RiExternalLinkLine className="inline"/></a>
          </li>
          <li>
            <a href="https://abhikrc.com/"><span className="underline"> Abhik Roychoudhury</span> (National University of Singapore) <RiExternalLinkLine className="inline"/></a>
          </li>
          <li>
            <a href="https://abhisekhs.github.io/"><span className="underline"> Abhisekh Sankaran</span> (Tata Consultancy Services Research) <RiExternalLinkLine className="inline"/></a>
          </li>
          <li>
            <a href="https://divyeshunadkat.github.io/"><span className="underline"> Divyesh Unadkat</span> (Synopsys) <RiExternalLinkLine className="inline"/></a>
          </li>
        </ul>
      </p>
    </div>
  )
};

export default Organizers;