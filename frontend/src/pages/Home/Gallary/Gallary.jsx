import React from "react";
import ig1 from "../../../assets/gallary/ig1.jpg";
import ig2 from "../../../assets/gallary/ig2.jpg";
import ig3 from "../../../assets/gallary/ig3.jpg";
import ig4 from "../../../assets/gallary/ig4.jpg";
import ig5 from "../../../assets/gallary/ig5.jpg";

const Gallary = () => {
  return (
    <div className="md:w-[80%] mx-auto my-28">
      <div className=" mb-16">
        <h1 className="text-5xl font-bold text-center">
          Our <span className="text-secondary"></span> Gallary
        </h1>
      </div>
      <div class="md:grid grid-cols-2 items-center justify-center border gap-4">
        <div class="mb-4 md:mb-0"> 
          <img src={ig1} alt=""  className="md:h-[720px] w-full mx-auto" />
        </div>
        <div class="gap-4 grid grid-cols-2 items-start">
          <div className="">
            <img src={ig2} alt="" className="md:h-[350px]"/>
          </div>
          <div>
            <img src={ig3} alt="" className="md:h-[350px]" />
          </div>
          <div> 
            <img src={ig4} alt="" className="md:h-[350px]"/>
          </div>
          <div>
            <img src={ig5} alt="" className="md:h-[350px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
