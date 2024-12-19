import React from "react";
import "../style/welcome.css";

const Roadmap = () => {
  return (
    <div className="bg-[#1F7723] pt-20 pb-36">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-24">
          <h1 className="font text-white  text-5xl md:text-2xl font-bold ">
            Road Map
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            dolores magnam accusamus facilis in nihil. Soluta dolores, corrupti
            ea impedit cumque illum fuga voluptatibus repellendus
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3 gap-x-9 px-0 md:px-60 mt-10'>
            <div className='flex flex-col justify-center items-center  bg-[#E2EA3D] p-7 shadow-lg border-2 border-[#B3B3B3] rounded-lg mb-2'>
                <h1  className='mb-5 font-extrabold bg-pink-600 px-3 py-2 text-white rounded-b-lg shadow-lg shadow-black'>Phase 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, iusto, repellat, vel enim ex dolore reiciendis adipisci perspiciatis ipsum aspernatur blanditiis minus in voluptatibus </p>
            </div>
            <div className='flex flex-col justify-center items-center  bg-[#E2EA3D] p-7 shadow-lg border-2 border-[#B3B3B3] rounded-lg mb-2'>
                <h1 className='mb-5 font-extrabold bg-pink-600 px-3 py-2 text-white rounded-b-lg shadow-lg shadow-black'>Phase 2</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptas quisquam ipsum odit aliquid, cumque numquam cupiditate placeat, inventore dolore tempora officiis non laudantium </p>
            </div>
            <div className='flex flex-col justify-center items-center  bg-[#E2EA3D] p-7 shadow-lg border-2 border-[#B3B3B3] rounded-lg mb-2'>
                <h1  className='mb-5 font-extrabold bg-pink-600 px-3 py-2 text-white rounded-b-lg shadow-lg shadow-black'>Phase 3</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem similique aperiam, est harum aut sunt. Suscipit reiciendis totam temporibus, nemo et est eveniet animi voluptate sapiente </p>
            </div>
        </div>
    </div>
  );
};

export default Roadmap;
