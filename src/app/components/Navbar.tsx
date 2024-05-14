import Image from "next/image";
import Wrapper from "./Wrapper";

function Navbar() {
  return (
    <>
      {/* <Wrapper> */}
      <div className="bg-blur fixed inset-0 z-[-1]"></div>
      <div className="flex justify-between py-4 px-6 items-center sticky top-0 bg-white backdrop-blur-xl">
        <Image src={"/logo.png"} width={113} height={65} alt="logo" />
        <ul className="flex gap-7">
          <li>Home</li>
          <li>Courses</li>
        </ul>
      </div>
      {/* </Wrapper> */}
    </>
  );
}

export default Navbar;
