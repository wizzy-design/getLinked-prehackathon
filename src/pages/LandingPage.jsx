// Components for the Landing Page
import Intro from "../components/Intro";
import Introduction from "../components/Introduction";
import Nav from "../components/Nav";
import Rules from "../components/Rules";

const LandingPage = () => {
  return (
    <>
      <div className="relative min-h-[100vh] overflow-x-hidden">
        <Nav />
        <Intro />
        <div className="hero h-full w-full absolute top-0 left-0"></div>
      </div>
      <Introduction />
      <Rules />
    </>
  );
};

export default LandingPage;
