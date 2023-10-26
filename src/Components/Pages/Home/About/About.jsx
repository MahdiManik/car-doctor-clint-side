/* eslint-disable react/no-unescaped-entities */
import parson from "../../../../assets/images/about_us/person.jpg";
import parts from "../../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero h-full mb-12">
      <div className="hero-content flex-col w-4/5 gap-14 lg:flex-row-reverse py-20">
        <div className="text-center lg:text-left">
          <p className="pb-3 font-bold text-[#ff3811]">About Us</p>
          <h1 className="text-4xl font-bold text-black">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 text-[#101010de]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
            <br />
            <br />
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="py-1 px-5 btn-outline text-[#ff3811] border-2  hover:bg-[#ff3811] rounded">
            Get More Info
          </button>
        </div>
        <div className="mr-20 w-full max-w-sm shadow-2xl">
          <div className="relative w-full ">
            <img className="w-full h-[360px] rounded-xl " src={parson} alt="" />
            <div className="absolute rounded-lg border-8 border-white  bottom-0 right-0 -mb-16 -mr-16">
              <img className="w-52 h-52 " src={parts} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
