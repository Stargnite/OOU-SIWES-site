const Objectives = () => {
  return (
    <section className="flex flex-col text-center justify-center py-12 md:py-24 space-y-5 md:space-y-10 bg-[#000016] text-white">
      <div className="space-y-2 md:space-y-5">
        <h1 className="font-bold sm:text-lg md:text-4xl px-14 md:px-30 lg:px-60">
          FUNCTIONS OF THE SIWES DIRECTORATE IN <br /> OLABISI ONABANJO UNIVERSITY.
          AGO-IWOYE
        </h1>
        <p className="px-10 md:px-0 text-sm md:text-base">
          The Directorate is mandated to carry out the following functions:
        </p>
      </div>

      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 justify-center px-2 md:px-7 md:space-x-10">
        <ul className="list-disc text-start space-y-3 max-w-full px-10 md:px-0 md:max-w-[400px]">
          <li>
            Seeking of industrial placement for students enrolled in various
            disciplines scheduled for participation in SIWES.
          </li>
          <li>
            Supervision of the students undergoing their industrial training in
            the various place of IT.
          </li>
          <li>
            Processing of students’ logbooks, ITF forms and industrial
            attachment reports upon which is based on the Federal Government
            funding of supervision and students’ allowances
          </li>
        </ul>

        <ul className="list-disc text-start space-y-3 max-w-full px-10 md:px-0 md:max-w-[350px]">
          <li>
            Provision of advisory guidance to participating students on career
            employment opportunities.
          </li>
          <li>
            Monitoring of compliance with the representative of SIWES on the
            part of students on eligible disciplines as a condition for
            graduation.
          </li>
          <li>
            Facilitation of the disbursement of the students’ allowance to
            deserving students through e-payment.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Objectives;