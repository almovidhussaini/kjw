import React from "react";
import frog from "../../assets/icons/frog.png";
import chineLeader from "../../assets/icons/chineLeader.png";
import "../style/welcome.css";

const Welcome = () => {
  return (
    <div className=" bg-[#1F7723] grid grid-cols-3 md:grid-cols-5">
      <div className=" col-span-3 pl-9 sm:col-span-4 md:col-span-3 flex justify-center  flex-col xl:pl-40 ">
        <div className="  ">
          <h1 className="font font-bold text-[40px] sm:text-[60px] md:text-[90px] leading-none tracking-normal text-white whitespace-nowrap">
            Welcome to{" "}
          </h1>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img
              src={frog}
              width="100px"
              sm="128px"
              md="156px"
              height="100px"
              alt="frogIMG"
            />
            <p className="font font-bold text-[40px] sm:text-[60px] md:text-[90px] leading-none tracking-normal text-white whitespace-nowrap">
              KJW PEPE
            </p>
          </div>
        </div>

        <div>
          <p className="text-white ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            pariatur voluptatem sint dicta. Consequuntur provident, id, soluta
            delectus quos minus voluptatum dicta commodi quis suscipit vitae
            sapiente similique modi quisquam.
          </p>
        </div>
        <div className="flex space-x-4 mt-3 justify-center mb-3">
          <button className="bg-green-600 text-white font-semibold py-2 px-6 rounded hover:bg-green-700 transition">
            BUY KJWPEPE
          </button>
          <button className="bg-pink-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition">
            DEX TOOL
          </button>
        </div>
      </div>
      <div className=" col-span-2 md:col-span-2 flex justify-start items-center pl-16 ">
        <img src={chineLeader} alt="image" width="250px" height="310px" />
      </div>
    </div>
  );
};

export default Welcome;
