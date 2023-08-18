import React from "react";
import Image from "next/image";
import Link from "next/link";
import oromLogo from "../public/images/logo.webp";
import appstore from "../public/images/appstore.png";
import playstore from "../public/images/playstore.png";
import localFont from "@next/font/local";
import Footer from "./Footer";

const myFont = localFont({ src: "../public/fonts/times.ttf" });
const myFont2 = localFont({src: "../public/fonts/Inter-Light-BETA.ttf"})

const Main = () => {
  return (
    <div className="w-screen md:h-screen p-2 flex flex-col items-center py-16 bg-[#172241] text-[#F3F4F4] relative justify-center">
      <div className="w-full gap-16 flex justify-center px-28 max-md:px-12 items-center max-md:flex-col max-md:mb-4">
        <div style={myFont.style} className="col-span-2 pl-8 flex flex-col items-center justify-center">
          <h3 className="pt-6  text-5xl text-center">Trust is what we create</h3>
          
          <p className="content-center pt-4 text-xl text-center">Elevating Excellence, Enriching Futures.</p>

          <div style={myFont2.style} className=" border-2 boreder-[#C0C0C0] rounded-full italic w-72 px-7 py-1 mb-11 mt-11 flex">
            Download our app
            <Image src={appstore} className="h-6 w-6 ml-6 mr-4" />
            <Image src={playstore} className="h-6 w-6" />
          </div>
        </div>
        <div className="h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={oromLogo} className="rounded-xl" alt="/" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
