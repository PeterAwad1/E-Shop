import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
function Category2() {
  return (
    <div>
      <div className="container mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="sm:col-span-2">
            <div className="relative bg-gradient-to-br from-gray-400/90 to-gray/40 dark:bg-black pl-5 py-10 rounded-3xl h-[320px] flex items-end justify-between">
              <div className="flex flex-col gap-2 mb-4">
                <h1 className="text-base font-simbold text-white">Enjoy</h1>
                <h1 className="text-2xl font-simbold dark:text-white text-white">
                  With
                </h1>
                <h1 className="text-4xl xl:text-5xl font-bold text-white opacity-50">
                  Playstation
                </h1>
                <div className="mt-4">
                  <button className=" btn-category absolute z-10">
                    Browse
                  </button>
                </div>
              </div>
              <img
                src={Image1}
                alt="Laptop"
                className="absolute w-[250px] bottom-0 right-0 sm:w-[250px]"
              />
            </div>
          </div>
          <div className="relative bg-brandGreen pl-5 py-10 rounded-3xl h-[320px] flex items-start">
            <div className="flex flex-col gap-2 mb-4">
              <h1 className="text-base font-simbold text-white">Enjoy</h1>
              <h1 className="text-2xl font-simbold dark:text-white text-white">
                With
              </h1>
              <h1 className="text-4xl xl:text-5xl font-bold text-green-100 opacity-50">
                VR-Box
              </h1>
              <div className="mt-4">
                <button className="bg-white text-brandGreen btn-category  absolute z-10">
                  Browse
                </button>
              </div>
            </div>
            <img
              src={Image2}
              alt="earphone"
              className="absolute w-[320px] bottom-0 right-0"
            />
          </div>
          <div className="relative bg-brandBlue pl-5 py-10 rounded-3xl h-[320px] flex items-start justify-between">
            <div className="flex flex-col gap-2 mb-4">
              <h1 className="text-base font-simbold text-white">Enjoy</h1>
              <h1 className="text-2xl font-simbold dark:text-white text-white">
                With
              </h1>
              <h1 className="text-4xl xl:text-5xl font-bold text-yellow-100 opacity-50">
                Gadget
              </h1>
              <div className="mt-4">
                <button className="bg-white text-brandBlue btn-category">
                  Browse
                </button>
              </div>
            </div>
            <img
              src={Image3}
              alt="Gadget"
              className="absolute w-[200px] bottom-0 right-0 sm:w-[150px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category2;
