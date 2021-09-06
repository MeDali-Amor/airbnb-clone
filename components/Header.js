import React from "react";
import Image from "next/image";
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon,
} from "@heroicons/react/solid";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md p-4 bg-white md:px-7 lg:px-10">
            {/* Logo */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* Search  */}
            <div className="flex  items-center md:border-2 md:shadow-sm  rounded-full ">
                <input
                    type="text"
                    placeholder="Start your search"
                    className="px-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
                />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full p-1 text-center text-white cursor-pointer md:mx-1" />
            </div>
            <div className="flex justify-end items-center space-x-4 text-gray-500">
                <p className="hidden md:inline text-sm font-medium cursor-pointer">
                    Become a host
                </p>
                <GlobeAltIcon className="h-6 items-center space-x-2 cursor-pointer" />
                <div className="flex border-2 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>
        </header>
    );
};

export default Header;
