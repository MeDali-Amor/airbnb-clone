import React from "react";
import Image from "next/dist/client/image";

const Hero = () => {
    return (
        <div className="relative h-[400px] sm:h-[500px] lg:h-[620px] xlg:h-[750px] 2xlg:h-[900px]">
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg font-bold mb-1">
                    Not sure where to go? Perfect
                </p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold m-2 hover:shadow-xl active:scale-90 transition duration-200">
                    I'm flexible
                </button>
            </div>
        </div>
    );
};

export default Hero;
