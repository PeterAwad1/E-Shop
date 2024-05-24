import { GoSearch } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa";

import { FaCaretDown } from "react-icons/fa";

import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
function Navbar({ onPopupToggle }) {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary text-2xl tracking-wider font-semibold uppercase sm:text-3xl"
            >
              E-shop
            </a>
            <div className="hidden lg:block">
              <ul className="flex gap-2 font-semibold">
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block px-4 text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}

                <li className=" group relative">
                  <a
                    href="#"
                    className="inline-block px-4 text-gray-500 hover:text-black dark:hover:text-white duration-200 font-semibold"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 absolute top-1/2 -translate-y-1 right-0 duration-300 " />
                    </span>
                  </a>

                  <div className="bg-white dark:bg-gray-900 duration-200 absolute hidden group-hover:block z-[999] w-[200px] rounded-md shadow-md p-4 text-gray-500 hover:dark:text-white font-semibold">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block p-2 hover:bg-primary/20 rounded-md w-full font-semibold"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar right Section */}
          <div className="flex items-center gap-4">
            <div className=" relative group hidden sm:block">
              {/* Search */}
              <input type="text" placeholder="search" className="search-bar" />
              <GoSearch className="text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-2 group-hover:text-primary duration-200" />
            </div>
            <button className="relative p-3">
              <FaCartPlus
                className="text-xl text-gray-600 dark:text-gray-400 "
                onClick={onPopupToggle}
              />
              <div className="text-xs w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center absolute top-0 right-0">
                3
              </div>
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
