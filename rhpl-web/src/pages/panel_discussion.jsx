import { RiExternalLinkLine } from "react-icons/ri";
const Panel = () => {
  return (
    <div className="content">
      
      <p className="py-10 listLink">
        <h1 className="text-[27px] font-bold md-6">Panel Discussion</h1>
                 <hr className="border-black pb-6"/>
         <h1 className="text-[20px] font-bold mb-2">Theme</h1>

         Information about the theme of the discussion. <br />
         And other details.
        <h1 className="text-[20px] font-bold mt-10 mb-2">Panelists</h1>
    
        <ul className="list-[square] space-y-2 ml-8">
          <li>
            <a href="https://abhisekhs.github.io/"><span className="underline"> Abhisekh Sankaran</span> (TCS Research) (co-Chair) </a>
          </li>
          <li>
            <a href="https://divyeshunadkat.github.io/"><span className="underline"> Divyesh Unadkat</span> (Synopsys) (co-Chair) </a>
          </li>
          <li>
            <a href="https://www.csa.iisc.ac.in/~deepakd/"> <span className="underline">Deepak D'Souza</span> (IISc Bangalore) </a>
          </li>
          <li>
            <a href="https://www.cse.iitb.ac.in/~uday/"><span className="underline">Uday Khedker</span> (IIT Bombay) </a>
          </li>
          <li>
            <a href="https://kumarmadhukar.github.io/"><span className="underline"> Kumar Madhukar</span> (IIT Delhi) </a>
          </li>
          <li>
            <a href="https://kartiknagar.github.io/"><span className="underline"> Kartik Nagar</span> (IIT Madras) </a>
          </li>
          <li>
            <a href="https://sumanthsprabhu.github.io//"> <span className="underline">Sumanth Prabhu</span> (TCS Research)  </a>
          </li>
          <li>
            <a href="https://www.microsoft.com/en-us/research/people/grama/"><span className="underline"> Ganesan Ramalingam</span> (Microsoft) </a>
          </li>
          <li>
            <a href="https://abhikrc.com/"><span className="underline"> Abhik Roychoudhury</span> (National University of Singapore) </a>
          </li>
        </ul>
      </p>
    </div>
  )
};
export default Panel;