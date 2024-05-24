import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";

function Category() {
  return (
    <div>
      <div className="container mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="relative bg-gradient-to-br from-black/90 to-black/70 dark:bg-black pl-5 py-10 rounded-3xl h-[320px] flex items-end">
            <div className="flex flex-col gap-2 mb-4">
              <h1 className="text-base font-simbold text-gray-400">Enjoy</h1>
              <h1 className="text-2xl font-simbold dark:text-white text-white">
                With
              </h1>
              <h1 className="text-4xl xl:text-5xl font-bold text-gray-500">
                Earphone
              </h1>
              <div className="mt-4">
                <button className="btn-category">Browse</button>
              </div>
            </div>
            <img
              src={Image1}
              alt="earphone"
              className="absolute w-[320px] bottom-0"
            />
          </div>
          <div className="relative bg-brandYellow pl-5 py-10 rounded-3xl h-[320px] flex items-end justify-between">
            <div className="flex flex-col gap-2 mb-4">
              <h1 className="text-base font-simbold text-white">Enjoy</h1>
              <h1 className="text-2xl font-simbold dark:text-white text-white">
                With
              </h1>
              <h1 className="text-4xl xl:text-5xl font-bold text-yellow-100 opacity-50">
                Gadget
              </h1>
              <div className="mt-4">
                <button className="bg-white text-brandYellow btn-category">
                  Browse
                </button>
              </div>
            </div>
            <img
              src={Image2}
              alt="Gadget"
              className="absolute w-[320px] top-5 -right-10"
            />
          </div>
          <div className="sm:col-span-2">
            <div className="relative bg-secondary pl-5 py-10 rounded-3xl h-[320px] flex items-end justify-between">
              <div className="flex flex-col gap-2 mb-4">
                <h1 className="text-base font-simbold text-white">Enjoy</h1>
                <h1 className="text-2xl font-simbold dark:text-white text-white">
                  With
                </h1>
                <h1 className="text-4xl xl:text-5xl font-bold text-red-100 opacity-50">
                  Laptops
                </h1>
                <div className="mt-4">
                  <button className="bg-white text-secondary btn-category">
                    Browse
                  </button>
                </div>
              </div>
              <img
                src={Image3}
                alt="Laptop"
                className="absolute w-[200px] top-5 right-0 sm:w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
