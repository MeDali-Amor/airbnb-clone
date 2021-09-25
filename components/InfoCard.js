import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const InfoCard = ({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) => {
    return (
        <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
            <div className="relative h-24 w-40 md:h-44 md:w-64 lg:h-52 lg:w-80 flex-shrink-0 ">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p className="text-xs md:text-sm font-semibold text-gray-400">
                        {location}
                    </p>
                    <HeartIcon className="h-5 md:h-7 cursor-pointer" />
                </div>
                <h4 className="text-base md:text-lg font-semibold">{title}</h4>
                <div className="border-b-2 w-10 pt-2" />
                <p className=" pt-2 text-xs text-gray-500 flex-grow">
                    {description}
                </p>
                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>
                    <div>
                        <p className=" font-semibold pb-2 lg:text-xl md:text-lg">
                            {price}
                        </p>
                        <p className="text-right text-sm md:text-base font-light">
                            {total}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
