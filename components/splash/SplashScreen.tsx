import React, { useEffect, useState } from "react";
import Image from "next/image";

import { ThreeDots } from "react-loader-spinner";

const SplashScreen = () => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-white">
      <div className="flex items-center gap-2">
        <Image
          src="/icons/logo.svg"
          width={50} // Use a base width
          height={50} // Use a base height
          alt="Logo"
          className="w-[20%] md:w-[25%] lg:w-[20%] h-auto" // Make the width responsive
        />
        <h1 className="text-xl md:text-2xl lg:text-5xl font-semibold font-manrope">
          Clickpay
        </h1>
      </div>
      <p className="pt-2 font-manrope">Send, spend, and save smarter</p>
      <div className="">
        <>
          <ThreeDots
            visible={true}
            height="50"
            width="50"
            color="#DF6015"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </>
      </div>
    </div>
  );
};

export default SplashScreen;
