// Icons and Images import
import blow from "../assets/icons/blow.svg";
import bulb from "../assets/icons/bulb.svg";
import chain from "../assets/icons/chain.svg";
import man from "../assets/img/glasses_man.svg";
import ellipse from "../assets/icons/HR_line.svg";
// import purple_flare from "../assets/icons/purple-lens-flare.svg";
// Emma, help me do the purple flare background
import star1 from "../assets/icons/star1.svg";
import star2 from "../assets/icons/star2.svg";
import star3 from "../assets/icons/star3.svg";


const Intro = () => {
  return (
    <section className="relative space-y-10">
      {/* Subtitle? */}
      <div className="md:justify-end md:flex md:pr-12">
        <h2 className="mt-3 italic font-bold text-center text-white font-mont md:text-xl">
          Igniting a Revolution in{" "}
          <span className="relative">
            HR Innovation
            {/* Purple semi-ellipse */}
            <span className="absolute left-0 top-5">
              <img src={ellipse} alt="Ellipse" />
            </span>
          </span>
        </h2>
      </div>

      <div className="my-4 md:flex md:justify-between md:px-10">
        <div
        // Emma, help me do the purple flare background
        // style={{
        //   background: `url(${purple_flare})`,
        //   backgroundColor: "#150E28",
        //   backgroundPosition: "left",
        //   backgroundSize: "contain",
        //   backgroundRepeat: "no-repeat",
        // }}
        >
          <div className="relative my-4 space-y-4 md:pl-4">
            {/* Stars */}
            <img src={star1} className="absolute -top-4 left-32 md:h-[1.625rem] md:-top-20 md:left-6" alt="The first star" />
            <img src={star2} className="absolute -top-8 left-80 md:h-[1.625rem] md:-top-12 md:left-96" alt="The second star" />
            {/* Titles */}
            <h1 className="text-[2rem] font-bold text-white font-clash text-center md:text-[3rem] md:text-left">
              getlinked Te
              <span className="relative">
                c
                <img
                  src={bulb}
                  className="absolute left-0 -top-4"
                  alt="Bulb Icon"
                />
              </span>
              h <br /> Hackathon
              <span id="purple" className="text-[#D434FE]">
                1.0
              </span>
              <img src={chain} alt="Chain" className="inline" />
              <img src={blow} alt="Blow" className="inline" />
            </h1>

            <p className="text-center text-white font-mont md:text-left">
              Participate in getlinked tech Hackathon <br className="md:hidden"/> 2023 stand <br className="hidden md:inline"/> a chance
              to win a Big prize
            </p>

            {/* Register button */}
            <div className="relative flex justify-center w-full md:justify-start">
              <button className="text-white font-mont bg-gradient-to-r custom-gradient p-3 px-8 rounded-[0.25rem] mt-3">
                Register
              </button>
              <img src={star3} className="absolute top-7 left-[18.5rem] md:h-[1.625rem]" alt="Smallest star" />
            </div>
          </div>

          {/* Countdown timer */}
          <div className="flex justify-center my-5 mt-10 text-white md:justify-start md:ml-4">
            <div>
              <span className="text-5xl font-unica">00</span>
              <sub className="font-mont">H</sub>
            </div>
            <div>
              <span className="text-5xl font-unica">00</span>
              <sub className="font-mont">M</sub>
            </div>
            <div>
              <span className="text-5xl font-unica">00</span>
              <sub className="font-mont">S</sub>
            </div>
          </div>
        </div>

        {/* Image of dude with VR glasses */}
        <div className="flex justify-center border-none">
          <img
            src={man}
            alt="Man glasses"
            className="md:w-[30rem] border-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
