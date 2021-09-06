import React from "react";
import Image from "next/dist/client/image";
const MdCard = ({ img, title }) => {
    return (
        <div className="cursor-pointer scale-95 hover:scale-100 transform transition duration-300 ease-out">
            <div className="relative h-72 w-72 ">
                <Image className="rounded-lg" src={img} layout="fill" />
            </div>
            <h3 className="text-xl font-semibold pl-1 mt-3 text-gray-900">
                {title}
            </h3>
        </div>
    );
};

export default MdCard;
