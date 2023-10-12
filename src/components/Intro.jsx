// Icons and Images import
import blow from "../assets/icons/blow.svg";
import bulb from "../assets/icons/bulb.svg";
import chain from "../assets/icons/chain.svg";
import man from "../assets/img/glasses_man.svg";
import ellipse from "../assets/icons/HR_line.svg";

const Intro = () => {
  return (
    <section className="space-y-10">
      {/* Subtitle? */}
      <div>
        <h2 className="mt-3 italic font-bold text-center text-white font-mont">
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
        <div>
          <div className="my-4 space-y-2">
            {/* Titles */}
            <h1 className="text-[2rem] font-bold text-white font-clash text-center">
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
            <p className="text-center text-white font-mont">
              Participate in getlinked tech Hackathon <br /> 2023 stand a chance
              to win a Big prize
            </p>

            {/* Register button */}
            <div className="flex justify-center w-full">
              <button className="text-white font-mont bg-gradient-to-r custom-gradient p-3 px-6 rounded-[0.25rem] mt-3">
                Register
              </button>
            </div>
          </div>

          {/* Countdown timer */}
          <div className="flex justify-center my-2 text-white">
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
          <img src={man} alt="Man glasses" className="md:w-[28rem] border-none"/>
        </div>
      </div>
    </section>
  );
};

export default Intro;
