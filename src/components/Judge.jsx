import judges from "../assets/img/judge.png";

const Judge = () => {
  return (
    <section className="flex flex-col items-center mt-20 font-bold md:flex-row font-clash md:mx-6 md:justify-between md:gap-x-10">
      {/* Illustration: White man and black woman */}
      <div className="md:w-[90rem]">
        <img src={judges} alt="Man and woman" />
      </div>

      {/* Write-ups */}
      <div className="w-full">
        <h2 className="mb-4 text-center text-white text-[1.25rem] md:text-left md:flex md:flex-col md:items-start  md:text-[2rem] md:w-2/3">
          Judging Criteria <br />{" "}
          <span className="text-[#D434FE]">Key attributes</span>
        </h2>

        {/* Attributes */}
        <ul className="space-y-6 list-none md:flex md:flex-col md:items-start md:w-2/3">
          <li className="mx-16 text-sm font-normal leading-5 text-center text-white font-mont md:text-left md:mx-0 md:w-full">
            <span id="purple" className="text-[#FF26B9] font-mont font-bold">
              Innovation and Creativity:
            </span>{" "}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </li>
          <li className="mx-16 text-sm font-normal leading-5 text-center text-white font-mont md:text-left md:mx-0 md:w-full">
            <span id="purple" className="text-[#FF26B9] font-mont font-bold">
              Functionality:
            </span>{" "}
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </li>
          <li className="mx-16 text-sm font-normal leading-5 text-center text-white font-mont md:text-left md:mx-0 md:w-full">
            <span id="purple" className="text-[#FF26B9] font-mont font-bold">
              Impact and Relevance:
            </span>{" "}
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits..
          </li>
          <li className="mx-16 text-sm font-normal leading-5 text-center text-white font-mont md:text-left md:mx-0 md:w-full">
            <span id="purple" className="text-[#FF26B9] font-mont font-bold">
              Technical Complexity:
            </span>{" "}
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </li>
          <li className="mx-16 text-sm font-normal leading-5 text-center text-white font-mont md:text-left md:mx-0 md:w-full">
            <span id="purple" className="text-[#FF26B9] font-mont font-bold">
              Adherence to Hackathon Rules:
            </span>{" "}
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Judge;
