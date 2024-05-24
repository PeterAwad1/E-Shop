import React from "react";
function Banner({ data }) {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div
          style={{ background: data.bgColor }}
          className=" grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
        >
          <div className="flex flex-col justify-center items-start p-6 sm:p-8">
            <p data-aos="slide-right" className="text-white text-sm">
              {data.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-4xl lg:text-7xl font-bold "
            >
              {data.title}
            </h1>
            <p data-aos="fade-up" className="text-white text-sm">
              {data.date}
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            className="flex justify-center items-center scale-125"
          >
            <img
              src={data.image}
              alt="Headphone "
              className="scale-125 w-[150px] md:w-[240px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover"
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-1 p-6 sm:p-8">
            <p
              data-aos="slide-left"
              className="text-white text-xl font-semibold"
            >
              {data.title2}
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-4xl sm:text-4xl lg:text-6xl font-bold "
            >
              {data.title3}
            </h1>
            <p data-aos="fade-up" className="text-white text-sm">
              {data.title4}
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <button
                style={{ color: data.bgColor }}
                className={`rounded-full bg-white px-4 py-2  mt-2 font-semibold hover:scale-110 duration-300 hover:font-bold`}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
