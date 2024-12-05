import ProfPic from "../assets/images/prof-pic.png";

const DirectorIntro = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row lg:space-y-24 items-center md:gap-x-20 lg:gap-x-24 py-10 lg:py-24 px-10 justify-center w-full mb-10 lg:mb-0">
      <div className="">
        <h1 className="font-bold text-3xl lg:text-5xl mb-4 lg:mb-8 text-start mt-20 md:mt-0">INTRODUCTION</h1>
        <p className="max-w-[600px] text-sm lg:text-lg">
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
          className="rounded-lg max-w-[300px] lg:max-w-[400px] shadow-lg"
        />

        <div className="absolute w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] space-y-5 bg-white -left-12 top-56 md:left-32 lg:top-80 lg:left-44 shadow-2xl p-5 rounded-md">
          <h1 className="font-bold text-gray-700 lg:text-xl">
          PROF. MUSTAPHA ADEWALE USMAN
          </h1>
          <p className="font-semibold lg:text-lg">
          Director of SIWES, OLABISI ONABANJO UNIVERSITY
          </p>
        </div>
      </div>


     
    </section>
  );
};

export default DirectorIntro;
