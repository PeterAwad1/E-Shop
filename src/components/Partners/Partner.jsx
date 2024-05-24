import brand1 from "../../assets/brand/br-1.png";
import brand2 from "../../assets/brand/br-2.png";
import brand3 from "../../assets/brand/br-3.png";
import brand4 from "../../assets/brand/br-4.png";
import brand5 from "../../assets/brand/br-5.png";
function Partner() {
  return (
    <div className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10">
      <div className="container">
        <div
          data-aos="zoom-out"
          className="grid grid-cols-5 gap-3 place-items-center opacity-50"
        >
          <img src={brand1} alt="brand" className="w-[80px] dark:invert" />
          <img src={brand2} alt="brand" className="w-[80px] dark:invert" />
          <img src={brand3} alt="brand" className="w-[80px] dark:invert" />
          <img src={brand4} alt="brand" className="w-[80px] dark:invert" />
          <img src={brand5} alt="brand" className="w-[80px] dark:invert" />
        </div>
      </div>
    </div>
  );
}

export default Partner;
// {<div className="text-center mb-12">
//   <h1 className="text-3xl font-bold dark:text-white text-black mb-2">
//     Our Partners
//   </h1>
//   <p className="text-gray-500 text-sm">Explore Our Trusted Partners </p>
// </div>;}
