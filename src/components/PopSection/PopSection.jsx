import { IoMdClose } from "react-icons/io";

function PopSection({ isPopupOpen, onPopupToggle }) {
  return (
    <>
      {isPopupOpen && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h1 className="font-semibold text-lg">Order Now</h1>
                <IoMdClose
                  className="text-2xl cursor-pointer"
                  onClick={onPopupToggle}
                />
              </div>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered my-2 w-full rounded-full px-2 dark:bg-gray-800 dark:text-gray-400 text-gray-600 py-1 border-gray-400 border focus:outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered my-2 w-full rounded-full px-2 dark:bg-gray-800 dark:text-gray-400text-gray-600 py-1 border-gray-400 border focus:outline-none"
              />
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered my-2 w-full rounded-full py-1 px-2 dark:bg-gray-800 dark:text-gray-400text-gray-600 border-gray-400 border focus:outline-none"
              />
              <div className="flex justify-center">
                <button className="btn my-4 ">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopSection;
