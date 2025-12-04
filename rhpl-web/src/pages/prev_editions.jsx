const Previous_editions = () => {
  return (
    <div className="content">

      <p className="contain py-10 listLink">
        <h1 className="text-[27px] font-bold">Previous Editions</h1>
        <hr className="border-black pb-6" />
        <ul className="list-disc space-y-1 ml-8">
          <li>
            <a href="https://fmindia.cmi.ac.in/rhpl2024/" className="underline">RHPL 2024</a> (Third edition)
          </li>
          <li>
            <a href="https://fmindia.cmi.ac.in/rhpl/" className="underline">RHPL 2023</a> (Second edition)
          </li>
          <li>
            <a href="https://www.microsoft.com/en-us/research/event/research-highlights-in-programming-languages-fsttcs-2020/" className="underline">RHPL 2020</a> (Inaugural edition)
          </li>
        </ul>
      </p>
    </div>
  )
};

export default Previous_editions;