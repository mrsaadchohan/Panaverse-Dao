import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoreCourses from "./components/CoreCourses";
import Specialized from "./components/Specialized";
import Outcome from "./components/Outcome";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      {/* <Wrapper> */}
    <Navbar/>
    <Hero/>
    <CoreCourses/>
    <Specialized/>
    <Outcome/>
    <Footer/>
    {/* </Wrapper> */}

    </div>
  );
}
