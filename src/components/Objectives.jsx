import React from "react";

const Objectives = () => {
  return (
    <section className="flex flex-col text-center justify-center py-24 space-y-10">
      <div className="space-y-5">
        <h1 className="font-bold text-4xl">OBJECTIVES OF THE SIWES PROGRAM</h1>
        <p>
          The objective of the Student Industrial Work Experience Scheme (SIWES)
          are to:
        </p>
      </div>

      <div className="flex justify-center space-x-10">
        <ul className="list-disc text-start space-y-3 max-w-[400px]">
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

        <ul className="list-disc text-start space-y-3 max-w-[400px]">
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
