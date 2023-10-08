import Image from "next/image";
import { SiUdacity, SiPluralsight } from "react-icons/si";
import {  FaGraduationCap } from "react-icons/fa";
import ScrumAssemblyLogo from "../../assets/img/scrumassembly.png";
import IconText from "../iconText/IconText";

function Hero() {
  const certifications = [
    {
      id: 1,
      institution: "Udacity sponsored by Bertelsmann",
      icon: <SiUdacity className="w-10 h-10"/>,
      certificate: "Frontend Web Development Nanodegree"
    },
    {
      id: 2,
      institution: "Pluralsight sponsored by Meta",
      icon: <SiPluralsight className="w-10 h-10"/>,
      certificate: "React Application Developer"
    },
    {
      id: 3,
      institution: "Scrum Assembly",
      icon: <Image src={ScrumAssemblyLogo} alt="Scrum Assembly logo" className="w-10 h-10"/>,
      certificate: "International Scrum Developer"
    }
  ]

  return (
    <section className="flex flex-col py-32 text-white">
      <h1 className="font-extrabold text-5xl md:text-8xl">Isaac Awonugba</h1>
      <p className="font-semibold text-3xl md:text-5xl text-accent">
        Frontend Developer
      </p>
      <p className="text-xl py-16 max-w-4xl">
        I am passionate about building accessible, scalable, secure and
        functional applications using Typescript, Nextjs, React and Redux.
      </p>
      <div className="flex flex-col">
        <h2 className="text-xl mb-8">Trained and certified</h2>
        <div className="flex flex-wrap gap-8 lg:gap-16">
          {
              certifications.map((certification) => <IconText {...certification} key={certification.id}/>)
          }
        </div>

      </div>
    </section>
  );
}

export default Hero;
