import bigIdea from "../assets/img/the- big- idea.png";
import smStar from "../assets/icons/intro-star-sm.svg";
import arrow from "../assets/icons/arrow.svg";
import mdStar from "../assets/icons/intro-star-md.svg";

const Introduction = () => {
  return (
    <section className="pt-[8vh] text-[#fff] md:pt-[0vh]">
      <div className="w-[80%] m-auto flex flex-col gap-10 md:gap-10 md:flex-row md:items-center">
        <div className="w-full relative md:w-[100%]">
          <img src={bigIdea} alt="" className="w-full" />
          <img src={smStar} alt="" className="w-[15px] absolute top-[30%]" />
          <img src={arrow} alt="" className="absolute w-[30px] right-[46%] md:right-0 lg:w-[60px]" />
        </div>

        <div className="text-center mt-5 relative md:w-[90%]">
          <img src={mdStar} alt="" className="absolute right-5 w-[20px] top-5 md:right-0" />
          <h1 className="font-clash font-bold text-[1.25rem] lg:text-left lg:text-[2rem]">
            Introduction to getlinked
          </h1>
          <h2 className="font-clash font-bold text-[#D434FE] lg:text-left text-[1.25rem] lg:text-[2rem]">
            techHackathon 1.0
          </h2>
          <div className="mt-2">
            <p className="text-[0.8rem] leading-7 font-mont lg:text-left lg:text-[1rem]">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&apos;re a coding genius, a design maverick, or a concept
              wizard, you&apos;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
