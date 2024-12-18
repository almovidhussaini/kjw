import React from "react";
import frogsuite from "../../assets/icons/frogsuite.png";
import telegram from "../../assets/icons/telegram.png";
import x from "../../assets/icons/x.png";
import crossx from "../../assets/icons/crossx.png";
import eagle from "../../assets/icons/eagle.png";
import scorpio from "../../assets/icons/scorpio.png";

import "../style/welcome.css";
const Footer = () => {
  return (
    <div className="bg-[#209326] grid grid-cols-1 md:grid-cols-2 py-8 ">
      <div className="flex justify-center items-center h-full">
        <img src={frogsuite} width="300px" height="300px" alt="frogIMG" />
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="font text-white  text-2xl md:text-3xl font-bold">
          GET INVOLVED
        </h1>
        <p className="text-white">
          We have an active community on Telegram and Twitter, come and say
          hello
        </p>
        <div className="flex gap-x-4 mt-2">
          <div className="border-2 border-black p-1 inline-block bg-green-800 rounded-lg">
            <img src={telegram} width="50px" height="50px" alt="frogIMG" />
          </div>
          <div className="border-2 border-black p-1 inline-block bg-green-800 rounded-lg">
            <img src={x} width="50px" height="50px" alt="frogIMG" />
          </div>
          <div className="border-2 border-black p-1 inline-block bg-green-800 rounded-lg">
            <img src={crossx} width="50px" height="50px" alt="frogIMG" />
          </div>
          <div className="border-2 border-black p-1 inline-block bg-green-800 rounded-lg">
            <img src={eagle} width="50px" height="50px" alt="frogIMG" />
          </div>
          <div className="border-2 border-black p-1 inline-block bg-green-800 rounded-lg">
            <img src={scorpio} width="50px" height="50px" alt="frogIMG" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
