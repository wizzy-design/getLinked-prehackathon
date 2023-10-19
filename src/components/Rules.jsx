import star1 from "../assets/icons/star1.svg";
import star2 from "../assets/icons/star2.svg";
import star3 from "../assets/icons/star3.svg";
import rules from "../assets/img/rules_guidlines.png";
// import flare1 from "../assets/icons/Purple-Lens-Flare1.svg";
// import flare2 from "../assets/icons/Purple-Lens-Flare2.svg";
// import flare1mb from "../assets/icons/Purple-Lens-Flare-mb-1.png";
// import flare2mb from "../assets/icons/Purple-Lens-Flare-mb-2.png";

const Rules = () => {
  return (
    <section className="pt-[8vh] text-[#fff] md:pt-[10vh]">
      <div className="w-[80%] m-auto flex flex-col gap-2 md:gap-10 md:flex-row md:items-center lg:gap-20">
        <div
        //   style={{
        //     backgroundImage: `url(${flare2})`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        //     backgroundPosition: "right",
        //   }}
          className="w-full relative md:w-[100%]"
        >
          <img src={rules} alt="" className="w-full" />
          <img
            src={star1}
            alt=""
            className="w-[10px] absolute top-[50%] left-[5%] lg:top-[70%] lg:left-0 lg:w-[20px]"
          />
          {/* <img
            src={flare1mb}
            alt=""
            className="absolute top-[-10%] right-[20%] -z-10"
          /> */}
        </div>

        <div className="text-center mt-5 relative md:w-[90%] md:order-[-1]">
          {/* <img src={mdStar} alt="" className="absolute right-5 w-[20px] top-5 md:right-0" /> */}
          <h1 className="font-clash font-bold text-[1.25rem] lg:text-left lg:text-[2rem]">
            Rules and
          </h1>
          <h2 className="font-clash font-bold text-[#D434FE] lg:text-left text-[1.25rem] lg:text-[2rem]">
            Guidelines
          </h2>
          <div className="mt-2">
            <img
              src={star2}
              alt=""
              className="absolute w-[10px] top-[15%] right-[-5%] md:left-[50%] md:top-[-5%] lg:w-[15px]"
            />
            {/* <img
              src={flare2mb}
              alt=""
              className="absolute top-[-10%] right-0 -z-10"
            /> */}
            <p className="text-[0.8rem] leading-7 font-mont lg:text-left lg:text-[1rem]">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&apos;re a coding genius, a design maverick, or a concept
              wizard, you&apos;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </p>
            <img
              src={star3}
              alt=""
              className="absolute w-[10px] bottom-[-10%] left-[15%] md:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
