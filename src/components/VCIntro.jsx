import React from "react";
import VCImg from "../assets/images/VC-pic.jpg";

const VCIntro = () => {
  return (
    <div className="relative m-10 flex items-center gap-x-28">
      <img src={VCImg} alt="" className="rounded-lg max-w-[400px] shadow-sm" />

      <div className="absolute w-[250px] h-[250px] space-y-5 bg-white top-72 left-48 shadow-xl p-5">
        <h1 className="font-bold text-gray-700 text-xl">
          Prof. AGBOOLA, Ayodeji Olayinka Johnson
        </h1>
        <p className="font-semibold text-lg">
          The Vice-Chancellor, OLABISI ONABANJO UNIVERSITY
        </p>
      </div>

      <div className="">
        <h1 className="font-bold text-5xl mb-8">Heading text</h1>
        <p className="max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
          officiis nam blanditiis at ut facere architecto rem corrupti! Magnam
          odit voluptates possimus dicta sapiente impedit fuga nam temporibus
          adipisci sit.
        </p>
      </div>
    </div>
  );
};

export default VCIntro;
