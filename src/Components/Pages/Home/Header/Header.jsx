import img1 from "../../../../assets/images/banner/1.jpg";
import img2 from "../../../../assets/images/banner/2.jpg";
import img3 from "../../../../assets/images/banner/3.jpg";
import img4 from "../../../../assets/images/banner/4.jpg";
import img5 from "../../../../assets/images/banner/5.jpg";
import img6 from "../../../../assets/images/banner/6.jpg";

const Header = () => {
  return (
    <div className="carousel w-full  mb-12">
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img src={img1} className="w-full rounded-xl " />

        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-[600px] flex items-center justify-start rounded-xl">
          <div className=" text-white space-y-6 flex flex-col w-1/2 pl-16">
            <h3 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h3>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="py-1 px-5 btn-outline text-[#ff3811] border-2  hover:bg-[#ff3811] rounded">
                Appointment
              </button>
              <button className="py-1 px-5 btn-outline text-[#ff3811] border-2  hover:bg-[#ff3811] rounded">
                Appointment
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4  transform -translate-y-1/2 left-5 right-0 bottom-0">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img src={img2} className="w-full rounded-xl " />

        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-[600px] flex items-center justify-start ">
          <div className=" text-white space-y-6 flex flex-col w-1/2 pl-16">
            <h3 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h3>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="py-1 px-5 btn-outline text-[#ff3811] border-2  hover:bg-[#ff3811] rounded">
                Appointment
              </button>
              <button className="py-1 px-5 btn-outline text-[#ff3811] border-2  hover:bg-[#ff3811] rounded">
                Appointment
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 mr-16 mb-8  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img src={img3} className="w-full rounded-xl " />

        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-[600px] flex items-center justify-start ">
          <div className=" text-white space-y-6 flex flex-col w-1/2 pl-16">
            <h3 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h3>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="py-1 px-5 btn-outline text-[#ff3811] border-2  hover:bg-[#ff3811] rounded">
                Appointment
              </button>
              <button className="py-1 px-5 btn-outline text-[#ff3811] border-2  hover:bg-[#ff3811] rounded">
                Appointment
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 mr-16 mb-8  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img src={img4} className="w-full h-[600px] " />
        <div className="absolute flex justify-end gap-4 mr-16 mb-8  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full h-[600px]">
        <img src={img5} className="w-full h-[600px] " />
        <div className="absolute flex justify-end gap-4 mr-16 mb-8  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full h-[600px]">
        <img src={img6} className="w-full h-[600px] " />
        <div className="absolute flex justify-end gap-4 mr-16 mb-8  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
