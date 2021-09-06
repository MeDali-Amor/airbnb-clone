import React from "react";
import Image from "next/dist/client/image";

const SmCard = ({ key, img, location, distance }) => {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            <div className="relative h-20 w-20 md:h-16 md:w-16">
                <Image src={img} layout="fill" className="rounded-lg" />
            </div>
            <div>
                <h2 className="font-semibold text-lg">{location}</h2>
                <h3 className="text-gray-700">{distance}</h3>
            </div>
        </div>
    );
};

export default SmCard;
