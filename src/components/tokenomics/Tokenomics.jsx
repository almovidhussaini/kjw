import React from "react";
import "../style/welcome.css";
import frogglass from "../../assets/icons/frogglass.png";
import person from "../../assets/icons/person.png";

const Tokenomics = () => {
  return (
    <div className="bg-green-800">
      <h1 className=" text-white font text-2xl md:text-2xl font-bold mb-6 text-center">
        TOKENOMICS
      </h1>
      <p className="text-white max-w-xl mx-auto text-center mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        error ullam laudantium distinctio officia dolorem hic nam?
      </p>

      <div className="grid grid-cols-4 gap-x-2 relative">
        <div className="flex justify-center">
          <img src={frogglass} width="106px" height="80px" alt="frogIMG" 
 />
        </div>
        <div className="col-span-2">
          <div className="w-full bg-white flex justify-center items-center py-4 mb-6 rounded-b-lg shadow-lg shadow-black">
            <p className="text-black">0% Tax</p>
          </div>
          <div className="w-full bg-white flex justify-center items-center py-4 mb-6 shadow-lg shadow-black">
            <p className="text-black">100% LP Burned</p>
          </div>
          <div className="w-full bg-white flex justify-center items-center py-4 mb-6 shadow-lg shadow-black">
            <p className="text-black">Contract Renounced</p>
          </div>
        </div>
        <div>
          <div className="absolute left-[72%] top-2 ">
            <img src={person} width="210px" height="256px" alt="frogIMG" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
