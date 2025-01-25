import { AboutMe } from "@/components/AboutMe";
import Banner from "@/components/Banner";
import { ContactMe } from "@/components/ContactMe";
import { Skills } from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Banner/>
      <AboutMe/>
      <Skills/>
      <ContactMe/>
    </div>
  );
}
