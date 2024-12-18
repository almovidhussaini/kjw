import React from "react";
import frog2 from "../../assets/icons/frog2.png";

const Aboutus = () => {
  return (
    <div className="bg-green-800 flex justify-center items-center min-h-screen">
      {/* Container with Border */}
      <div className="bg-green-700 flex flex-col md:flex-row w-9/12 md:w-9/12 border-4 border-black rounded-md">
        {/* Left Section: Title and Image */}
        <div className="flex flex-col justify-center items-center p-8 w-full md:w-1/3 border-r-4 border-black relative">
          <h2 className="text-white text-5xl md:text-6xl font-extrabold leading-none mb-4 text-center">
            ABOUT <br /> US
          </h2>
          <img
            src={frog2}
            alt="Frog Illustration"
            className="absolute bottom-0 left-[70%] top-[50%] w-32 md:w-48"
          />
        </div>

        {/* Right Section: Paragraph */}
        <div className="flex flex-col justify-center p-8 w-full md:w-1/2 text-white">
  <p className="md:text-lg leading-relaxed  ml-7">
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
