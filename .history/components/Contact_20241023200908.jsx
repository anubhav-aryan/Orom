import React from "react";
import localFont from "@next/font/local";
import { FaGithub, FaLinkedinIn, FaInstagram, BiPhoneCall } from 'react-icons/fa';

const myFont1 = localFont({ src: "../public/fonts/times.ttf" });
const myFont2 = localFont({ src: "../public/fonts/Inter-Light-BETA.ttf" });

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#172241] flex-col text-white py-8"
    >

        <div className="px-11">
          <div className="justify-center algin">
            <h2 style = {myFont1.style} className="text-4xl text-center pb-6">About Us</h2>
          </div>
          <div className="">
            <p style={myFont2.style} className="max-md:text-sm max-md:text-center ">
            At OROM Corporation, we don't just provide services; we craft remarkable experiences that elevate your journey towards success. Our diverse array of offerings, spanning educational services, cutting-edge IT solutions, seamless logistics support, and ERP consultancy, reflects our unwavering commitment to your growth. OROM Corp. is a corporation of four parent companies, excelling in ERP Consultancy, EV Manufacturing, Logistics, and EdTech. Founded in 2021 by the visionary Hariom Shandilya, an exemplary student at Vellore Institute of Technology, OROM Corp. has emerged as a beacon of excellence in the world of Consumer Services. Our journey is one of passion, dedication, and a relentless pursuit of innovation. At OROM, "customer support" is not just a department; it's a philosophy that echoes through every facet of our organization. As we stride forward, our vision remains clear: to be the catalyst of transformation in the services industry. OROM Corp. is not just a company; it's a testament to the power of dreams, determination, and a burning desire to make a difference. Join us on this exhilarating expedition towards excellence. Your dreams, our services – together, there's no limit to what we can achieve.
            </p>
          </div>
        </div>
    </div>
  );
};

export default Contact;
