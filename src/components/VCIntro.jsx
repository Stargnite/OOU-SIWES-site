import React from "react";
import VCImg from "../assets/images/VC-pic.jpg";

const VCIntro = () => {
  return (
    <section className="flex items-center gap-x-28 py-24 justify-center w-full">
      <div className="relative">
        <img
          src={VCImg}
          alt=""
          className="rounded-lg max-w-[400px] shadow-lg"
        />

        <div className="absolute w-[250px] h-[250px] space-y-5 bg-white top-72 left-52 shadow-2xl p-5 rounded-md">
          <h1 className="font-bold text-gray-700 text-xl">
            PROF. AGBOOLA, AYODEJI OLAYINKA JOHNSON
          </h1>
          <p className="font-semibold text-lg">
            The Vice-Chancellor, OLABISI ONABANJO UNIVERSITY
          </p>
        </div>
      </div>

      <div className="">
        <h1 className="font-bold text-5xl mb-8">WELCOME</h1>
        <p className="max-w-[600px]">
          It is a great pleasure to welcome you to Olabisi Onabanjo University,
          Ago-Iwoye, Ogun State, Nigeria as well to the Directorate of Students’
          Industrial Work Experience Scheme (SIWES) unit of our great
          university. The unit is headed by a Director and also has non-academic
          supporting staff that are involved in day-to-day activities of the
          Directorate.
          <br />
          <br />
          The Departmental and Faculty coordinators are in-charge of SIWES
          activities as well as giving reports to the Directorate. The
          Directorate works in collaboration with the Industrial Training Fund
          (ITF) to ensure that students in Industrial attachment require
          adequate practical exposure that will enhance their competence and
          self-reliance after graduation. The Directorate is under the office of
          the Vice Chancellor.
        </p>
      </div>
    </section>
  );
};

export default VCIntro;
