import iitdImage from '../images/iitd.jpg';

const Venue = () => {
  return (
    <div className="content">

      <div className="contain py-10 paraLink">
        <h1 className="text-[27px] font-bold">Venue</h1>
        <hr className="border-black pb-4" />

        <img
          src={iitdImage}
          alt="IIT Delhi Campus"
          className="w-full max-w-4xl rounded-lg drop-shadow-lg mb-6 h-auto"
        />

        <p>The workshop will be held at <a className="underline" href="https://home.iitd.ac.in/" >IIT Delhi, New Delhi Campus</a>.</p>
      </div>
    </div>
  )
};

export default Venue;