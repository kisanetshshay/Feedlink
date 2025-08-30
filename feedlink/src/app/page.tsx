import Image from "next/image";
import Buttons from "./sharedcomponents/Button";
import Footer from "./sharedcomponents/Footer";
import Navbar from "./sharedcomponents/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Buttons/>
      <Footer/>

    </div>
  );
}
