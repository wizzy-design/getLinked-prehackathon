// Icons and Images import
import blow from "../assets/icons/blow.svg";
// import bulb from "../assets/icons/bulb.svg";
import chain from "../assets/icons/chain.svg";
import man from "../assets/img/glasses_man.svg";

const Intro = () => {
  return (
    <section>
      {/* Subtitle? */}
      <div>
        <h2>Igniting a Revolution in HR Innovation</h2>
      </div>

      <div>
        {/* Titles and counter */}
        <div>
          <div>
            <h1>getlinked Tech</h1>
            <h1>
              Hackathon <span id="purple">1.0</span>{" "}
              <img src={chain} alt="Chain" /> <img src={blow} alt="Blow" />
            </h1>
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button>Register</button>
          </div>

          {/* Countdown timer */}
          <div>
            <div>
              <span>00</span>
              <sub>H</sub>
            </div>
            <div>
              <span>00</span>
              <sub>M</sub>
            </div>
            <div>
              <span>00</span>
              <sub>S</sub>
            </div>
          </div>
        </div>

        {/* Image of dude with VR glasses */}
        <div>
          <img src={man} alt="Man glasses" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
