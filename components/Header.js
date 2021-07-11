import Image from "next/image";
import {
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { BellIcon, HomeIcon, ChevronDownIcon } from "@heroicons/react/solid";

import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/**Left header section */}
      <div className="flex items-center">
        <Image
          src="https://thumbs.dreamstime.com/b/letter-bk-logo-colorful-splash-background-combination-design-creative-industry-web-business-company-204343540.jpg"
          width="60"
          height="60"
          layout="fixed"
        />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex flex ml-2 bg-transparent placeholder-gray-500 flex-shrink  outline-none   "
            type="text"
            placeholder="search product ,brand"
          />
        </div>
      </div>
      {/**Middle section */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2 cursor-pointer text-gray-500">
          <p className="px-2 hover:bg-gray-100 p-2 rounded-sm transform hover:scale-110 motion-reduce:transform-none ">
            Home
          </p>
          <p className="px-2 hover:bg-gray-100 p-2 rounded-sm transform hover:scale-110 motion-reduce:transform-none ">
            Women Category
          </p>
          <p className="px-2 hover:bg-gray-100 p-2 rounded-sm transform hover:scale-110 motion-reduce:transform-none ">
            Men Category
          </p>
          <p className="px-2 hover:bg-gray-100 p-2 rounded-sm transform hover:scale-110 motion-reduce:transform-none ">
            Kids Basket
          </p>
        </div>
      </div>
      {/**Right header section */}
      <div className="flex items-center sm:space-x-2">
        {/**Profile picture */}
        <p className="whitespace-nowrap font-semibold pr-3 transform hover:scale-110 motion-reduce:transform-none ">
          Bkroland19
        </p>
        <UserIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
      
    </div>
  );
}

export default Header;
