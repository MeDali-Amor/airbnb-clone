import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";
const Header = ({ placeHolder }) => {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [nbGuests, setNbGuests] = useState(1);
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };
    const cancelSearch = () => {
        // e.preventDefault();
        setSearchInput("");
    };

    const handleSearch = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                nbGuests,
            },
        });
        setSearchInput("");
    };

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md p-4 bg-white md:px-7 lg:px-10">
            {/* Logo */}
            <div
                onClick={() => router.push("/")}
                className="relative flex items-center h-10 cursor-pointer my-auto"
            >
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
                    placeholder={placeHolder || "Start your search"}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="px-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
                />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full p-1 text-center text-white cursor-pointer md:mx-1" />
            </div>
            {/* Menu */}
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
            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto mt-1">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-1 pb-2">
                        <h2 className="font-semibold text-lg pl-5 flex-grow">
                            Number of Guests
                        </h2>
                        <UsersIcon className="h-5" />
                        <input
                            value={nbGuests}
                            onChange={(e) => setNbGuests(e.target.value)}
                            type="number"
                            min={1}
                            className="w-12 pl-2 text-lg outline-none text-red-500"
                        />
                    </div>
                    <div className="flex">
                        <button
                            className="flex-grow text-gray-500"
                            onClick={cancelSearch}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSearch}
                            className="flex-grow text-red-500"
                        >
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
