import React from "react";
import localFont from "@next/font/local";
import Image from "next/image";
import ellipse from "../public/images/Ellipse10.png";

const myFont1 = localFont({ src: "../public/fonts/Crima.otf" });
const myFont2 = localFont({ src: "../public/fonts/Inter-Light-BETA.ttf" });

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#172241] flex-row text-white relative h-[80vh]"
    >
      <div className="absolute z-40">
        <Image src={ellipse} className="pt-11 top-0 " />
        <Image src={ellipse} className="absolute top-0 pl-24 pt-11 " />
      </div>

      <div className="absolute pt-[14rem] flex flex-row z-40">
        <div className="px-11">
          <div className="">
            <h3 style={myFont1.style} className="text-5xl pl-24">
              About us
            </h3>
          </div>
          <div className="">
            <p style={myFont2.style} className="pl-24">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="px-11">
          <div>
            <h3 style={myFont1.style} className="flex text-5xl justify-end pr-24">
              Contact us
            </h3>
          </div>
          <div>
            <p style={myFont2.style} className="flex justify-end text-right pr-24">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <div className=" justify-center content-center text-center pt-1 flex absolute bottom-0 w-full p-5">
        <p className="text-center">© Orom Corp. All Rights Reserved 2023-24</p>
      </div>
    </div>
  );
};

export default Contact;
