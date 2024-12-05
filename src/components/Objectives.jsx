const Objectives = () => {
  return (
    <section className="flex flex-col text-center justify-center py-12 md:py-24 space-y-5 md:space-y-10" id="objectives">
      <div className="space-y-2 md:space-y-5">
        <h1 className="font-bold sm:text-lg md:text-4xl px-14 md:px-30 lg:px-60">OBJECTIVES OF THE SIWES IN OLABISI ONABANJO UNIVERSITY, AGO-IWOYE</h1>
        <p className="px-10 md:px-0 text-sm md:text-base">
          The objective of the Student Industrial Work Experience Scheme (SIWES)
          are to:
        </p>
      </div>

      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 justify-center px-2 md:px-7 md:space-x-10">
        <ul className="list-disc text-start space-y-3 max-w-full px-10 md:px-0 md:max-w-[400px]">
          <li>
            Provide an avenue for students in Olabisi Onabanjo University,
            Ago-Iwoye to acquire industrial skills and experience in their
            course of study.
          </li>
          <li>
            Prepare students in Olabisi Onabanjo University, Ago-Iwoye for the
            industrial work situation they are likely to meet after graduation.
          </li>
          <li>
            Expose students to work methods and techniques in handling equipment
            and machinery that may not be available in the universities.
          </li>
        </ul>

        <ul className="list-disc text-start space-y-3 max-w-full px-10 md:px-0 md:max-w-[350px]">
          <li>
            Make the transition from the university to the world of work easier,
            and thus enhance students’ contacts for later job placement
          </li>
          <li>
            Provide students with an opportunity to apply their theoretical
            knowledge in real work situation, thereby bridging the gap between
            Olabisi Onabanjo University, Ago-Iwoye work and actual practice.
          </li>
          <li>
            Enlist and strengthen employer’s involvement in the entire
            educational process of preparing graduates for employment in
            industry.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Objectives;
