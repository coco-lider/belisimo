import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Menu/>
    </div>
  );
}
