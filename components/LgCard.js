import React from "react";
import Image from "next/dist/client/image";

const LgCard = () => {
    return (
        <div className="relative py-16  cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image
                    src="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div className="absolute top-32 left-12 text-center">
                <h3 className="text-4xl font-semibold text-white mb-3">
                    Try hosting
                </h3>
                <p className="w-40 md:w-60 lg:w-96 text-white text-lg">
                    Earn extra income and unlock new opportunities by sharing
                    your space.
                </p>
                <button className="bg-white m-3  px-5 py-2 rounded-lg text-sm text-gray-900 font-semibold">
                    Learn more
                </button>
            </div>
        </div>
    );
};

export default LgCard;
