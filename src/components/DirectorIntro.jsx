import React from "react";
import ProfPic from "../assets/images/prof-pic.png";

const DirectorIntro = () => {
  return (
    <section className="flex items-center gap-x-28 py-24 justify-center w-full">
      <div className="">
        <h1 className="font-bold text-5xl mb-8">INTRODUCTION</h1>
        <p className="max-w-[600px]">
          The Students’ Industrial Work Experience Scheme (SIWES) is a programme
          specially organized by the Industrial Training Fund (ITF). It was
          organized with the objective of equipping students in Nigerian
          Tertiary Institution with adequate practical knowledge required for
          the completion of their different courses of study. The scheme is a
          tripartite program involving the students, the Universities and
          industries. The Scheme is founded by the Federal Government of Nigeria
          and is jointly coordinated by the Industrial Training Fund and the
          National University Commission. It is a skill training program
          designed to expose and prepare students of tertiary institutions for
          the industrial situation they are likely to meet after graduation.
          <br />
          <br />
          The goal of SIWES is to promote industrialization in Nigeria and an
          avenue between the world of Teaching, learning, industry and work with
          reference to a field of study such as Engineering, Science,
          Agriculture, Technology and other professional education programmes.
          The scheme is therefore a skill training oriented program so as to
          expose the students on work they would meet after graduation.
        </p>
      </div>

      <div className="relative">
        <img
          src={ProfPic}
          alt=""
          className="rounded-lg max-w-[400px] shadow-lg"
        />

        <div className="absolute w-[250px] h-[250px] space-y-5 bg-white top-80 right-52 shadow-2xl p-5 rounded-md">
          <h1 className="font-bold text-gray-700 text-xl">
					PROF. MUSTAPHA ADEWALE USMAN
          </h1>
          <p className="font-semibold text-lg">
					Director of SIWES, OLABISI ONABANJO UNIVERSITY
          </p>
        </div>
      </div>
    </section>
  );
};

export default DirectorIntro;
