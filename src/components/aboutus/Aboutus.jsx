import React from "react";
import frog2 from "../../assets/icons/frog2.png";

const Aboutus = () => {
  return (
    <div className="bg-[#1F7723] flex justify-center items-center py-20">
      {/* Container with Border */}
      <div className="bg-[#17901C] flex flex-col md:flex-row w-9/12 md:w-8/12 border-4 border-[#000000] rounded-2xl">
        {/* Left Section: Title and Image */}
        <div className="flex flex-col justify-center items-center p-8 w-full md:w-1/3 border-r-4 border-[#000000] relative">
          <h2 className="text-white text-5xl md:text-6xl font-extrabold leading-none mb-4 text-center" style={{fontFamily:'Comic Gecko Pro'}}>
            ABOUT <br /> US
          </h2>
          <img
            src={frog2}
            alt="Frog Illustration"
            className="absolute bottom-0 left-[67%] top-[45%] w-32 md:w-48 2xl:left-[74%] xl:left-[70%]"
          />
        </div>

        {/* Right Section: Paragraph */}
        <div className="flex flex-col justify-center items-end p-8 w-full md:w-2/3 text-white">
  <p className="md:text-lg leading-relaxed  ml:0 md:ml-20 text-center">
    Lorem ipsum dolor sit amet consectetur. Egestas ornare elit quis
    curabitur sit accumsan egestas egestas. Ullamcorper ornare tempus
    ultricies semper integer diam. Habitasse sed dignissim in feugiat
    sed amet quis integer. Elementum amet maecenas elementum odio elit a
    proin ac aenean.
  </p>
</div>
      </div>
    </div>
  );
};

export default Aboutus;
