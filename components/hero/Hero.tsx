import Image from "next/image";
import { SiUdacity, SiAndela } from "react-icons/si";
import ScrumAssemblyLogo from "../../assets/img/scrumassembly.png";
import IconText from "../iconText/IconText";

function Hero() {
  const certifications = [
    {
      id: 1,
      institution: "Udacity",
      icon: <SiUdacity className="w-10 h-10"/>,
      certificate: "Frontend Web Development Nanodegree",
      certificateAddress: "https://confirm.udacity.com/e/48a2396a-c38c-11ed-ae7e-3b117adf5f13"
    },
    {
      id: 2,
      institution: "Andela",
      icon: <SiAndela className="w-10 h-10"/>,
      certificate: "Andela React Learning Program",
      certificateAddress: "https://credsverse.com/credentials/e60a283a-2d3d-49d8-92cc-16e615b3ea7f"
    },
    {
      id: 3,
      institution: "Scrum Assembly",
      icon: <Image src={ScrumAssemblyLogo} alt="Scrum Assembly logo" className="w-10 h-10"/>,
      certificate: "International Scrum Developer",
      certificateAddress: "https://www.scrumassembly.org/Verify?Id=2a1d468e03531"
    }
  ]

  return (
    <section className="flex flex-col py-24 text-white">
      <h1 className="font-extrabold text-5xl md:text-8xl">Isaac Awonugba</h1>
      <p className="font-semibold text-3xl md:text-5xl text-accent_color">
        Frontend Developer
      </p>
      <p className="text-xl py-16 max-w-4xl">
        I am passionate about building accessible, scalable, secure and
        functional applications using Typescript, Nextjs, React and Redux.
      </p>
      <div className="flex flex-col">
        <h2 className="text-xl mb-8">Trained and certified</h2>
        <div className="flex flex-wrap gap-8 lg:gap-10">
          {
              certifications.map((certification) => <IconText {...certification} key={certification.id}/>)
          }
        </div>

      </div>
    </section>
  );
}

export default Hero;
