import FlexAndResponsive from "./components/FlexAndResponsive";
import HoverAndFocus from "./components/HoverAndFocus";
import SpacingAndSizing from "./components/SpacingAndSizing";
import Typography from "./components/Typography";
import Navbar from "./components/Navbar"
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="dark:bg-gray-600 min-h-screen">
      <Navbar/>
      {/* <h1 className="text-center m-5">Tailwind CSS</h1> */}
      {/* <br /> */}
      {/* <Typography/> */}
      {/* <SpacingAndSizing/> */}
      {/* <HoverAndFocus/> */}
      {/* <FlexAndResponsive/> */}
      <ProfileCard/>
    </div>
  );
}

export default App;
