// Components for the Landing Page
import Intro from "../components/Intro";
import Introduction from "../components/Introduction";
import Nav from "../components/Nav";
import Rules from "../components/Rules";
import Judge from "../components/Judge";

const LandingPage = () => {
  return (
    <>
      <div className="relative min-h-[100vh] overflow-x-hidden">
        <Nav />
        <Intro />
        <div className="absolute top-0 left-0 w-full h-full hero"></div>
      </div>
      <Introduction />
      <Rules />
      <Judge />
    </>
  );
};

export default LandingPage;
