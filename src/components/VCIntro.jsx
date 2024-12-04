import VCImg from "../assets/images/VC-pic.jpg";

const VCIntro = () => {
  return (
    <section className="flex flex-col md:flex-row space-y-24 items-center md:gap-x-20 lg:gap-x-28 py-10 lg:py-24 px-10 justify-center w-full mb-10 lg:mb-0">
      <div className="relative">
        <img
          src={VCImg}
          alt=""
          className="rounded-lg max-w-[300px] lg:max-w-[400px] shadow-lg"
        />

        <div className="absolute w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] space-y-5 bg-white -left-12 top-56 md:left-32 lg:top-72 lg:left-52 shadow-2xl p-5 rounded-md">
          <h1 className="font-bold text-gray-700 lg:text-xl">
            PROF. AGBOOLA, AYODEJI OLAYINKA JOHNSON
          </h1>
          <p className="font-semibold lg:text-lg">
            The Vice-Chancellor, OLABISI ONABANJO UNIVERSITY
          </p>
        </div>
      </div>

      <div className="">
        <h1 className="font-bold text-3xl lg:text-5xl mb-4 lg:mb-8 text-start mt-5 md:mt-0">WELCOME</h1>
        <p className="max-w-[600px] text-sm lg:text-lg">
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
