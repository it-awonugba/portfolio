import styles from "./Hero.module.css";
import { BiLogoReact } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiUdacity, SiPluralsight } from "react-icons/si";

function Hero() {
  return (
    <section className={`flex flex-col py-24`}>
      <h1 className={`font-extrabold text-5xl md:text-8xl`}>Isaac Awonugba</h1>
      <p className={`font-semibold text-3xl md:text-5xl`}>Frontend Developer</p>
      <p className={`text-xl py-16 max-w-4xl`}>
        I am passionate about building accessible, scalable and functional
        applications using Typescript, Nextjs and React.
      </p>
      <p className={`flex flex-col gap-3 lg:flex-row lg:space-x-16`}>
        <span className={`flex flex-row items-center space-x-4`}>
          <SiUdacity className={styles.svg} />
          <span>Frontend Web Development</span>
        </span>
        <span className={`flex flex-row items-center space-x-4`}>
          <SiPluralsight /> <span>React Learning sponsored by Meta</span>
        </span>
      </p>
    </section>
  );
}

export default Hero;
