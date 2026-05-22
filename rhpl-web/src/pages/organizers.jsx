// import { RiExternalLinkLine } from "react-icons/ri";
// const Organizers = () => {
//   return (
//     <div className="content">
      
//       <p className="contain py-10 listLink">
//         <h1 className="text-[27px] font-bold">Organizers</h1>
//       <hr className="border-black pb-6"/>
//         <ul className="list-[square] space-y-2 ml-8">
//           <li>
//             <a href="https://abhisekhs.github.io/"><span className="underline"> Abhisekh Sankaran</span> (TCS Research) (co-Chair) </a>
//           </li>
//           <li>
//             <a href="https://divyeshunadkat.github.io/"><span className="underline"> Divyesh Unadkat</span> (Synopsys) (co-Chair) </a>
//           </li>
//           <li>
//             <a href="https://www.csa.iisc.ac.in/~deepakd/"> <span className="underline">Deepak D'Souza</span> (IISc Bangalore) </a>
//           </li>
//           <li>
//             <a href="https://www.cse.iitb.ac.in/~uday/"><span className="underline">Uday Khedker</span> (IIT Bombay) </a>
//           </li>
//           <li>
//             <a href="https://kumarmadhukar.github.io/"><span className="underline"> Kumar Madhukar</span> (IIT Delhi) </a>
//           </li>
//           <li>
//             <a href="https://kartiknagar.github.io/"><span className="underline"> Kartik Nagar</span> (IIT Madras) </a>
//           </li>
//           <li>
//             <a href="https://sumanthsprabhu.github.io//"> <span className="underline">Sumanth Prabhu</span> (TCS Research)  </a>
//           </li>
//           <li>
//             <a href="https://www.microsoft.com/en-us/research/people/grama/"><span className="underline"> Ganesan Ramalingam</span> (Microsoft) </a>
//           </li>
//           <li>
//             <a href="https://abhikrc.com/"><span className="underline"> Abhik Roychoudhury</span> (National University of Singapore) </a>
//           </li>
//         </ul>
//       </p>
//     </div>
//   )
// };

// export default Organizers;
const organizers = [
  { name: "Abhisekh Sankaran",   affiliation: "TCS Research",                     href: "https://abhisekhs.github.io/"},
  { name: "Divyesh Unadkat",     affiliation: "Synopsys",                          href: "https://divyeshunadkat.github.io/"},
  { name: "Deepak D'Souza",      affiliation: "IISc Bangalore",                    href: "https://www.csa.iisc.ac.in/~deepakd/" },
  { name: "Uday Khedker",        affiliation: "IIT Bombay",                        href: "https://www.cse.iitb.ac.in/~uday/" },
  { name: "Kumar Madhukar",      affiliation: "IIT Delhi",                         href: "https://kumarmadhukar.github.io/" },
  { name: "Kartik Nagar",        affiliation: "IIT Madras",                        href: "https://kartiknagar.github.io/" },
  { name: "Sumanth Prabhu",      affiliation: "TCS Research",                      href: "https://sumanthsprabhu.github.io/" },
  { name: "Ganesan Ramalingam",  affiliation: "Microsoft Research",                href: "https://www.microsoft.com/en-us/research/people/grama/" },
  { name: "Abhik Roychoudhury", affiliation: "National University of Singapore",  href: "https://abhikrc.com/" },
];

const Organizers = () => {
  return (
  <div className="
  bg-gradient-to-b
  from-[#f4f7fb]
  to-[#e9eef5]
">
  <div className="max-w-[1120px] mx-auto px-6"></div>
    <div className="max-w-[1120px] mx-auto px-6 py-16">
      <div className="max-w-[820px] mx-auto bg-white border border-[#c6c6cd] rounded-xl p-10
        shadow-[0_4px_20px_rgba(15,23,42,.05)]">
        <h2 className="font-['Libre_Caslon_Text'] text-[26px] font-bold text-black mb-5 pb-4
          border-b border-[#c6c6cd]">
          Organizers
        </h2>

        <div className="flex flex-col">
          {organizers.map(({ name, affiliation, href, role }, i) => (
            <>
              
              <div key={name}
                className="flex items-center gap-2.5 px-4 py-3.5 rounded-lg
                  hover:bg-[#f2f4f6] transition-colors group">
                <span className="text-[#fd8a42] text-[9px] shrink-0">■</span>
                <a href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 no-underline flex-wrap">
                  <span className="text-[15px] font-medium text-black underline
                    decoration-[#fd8a42] decoration-2 underline-offset-[3px]
                    group-hover:text-[#9b4500] transition-colors">
                    {name}
                  </span>
                  <span className="text-[13px] text-[#45464d]">({affiliation})</span>
                  {role && (
                    <span className="text-[11px] font-semibold bg-[#fd8a42] text-[#331200]
                      px-2 py-0.5 rounded">
                      {role}
                    </span>
                  )}
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
export default Organizers;