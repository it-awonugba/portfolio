import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { SiUdacity, SiPluralsight } from "react-icons/si";

function Hero() {
  return (
    <section className="flex flex-col py-24">
      <h1 className="font-extrabold text-5xl md:text-8xl">Isaac Awonugba</h1>
      <p className="font-semibold text-3xl md:text-5xl text-accent">
        Frontend Developer
      </p>
      <p className="text-xl py-16 max-w-4xl">
        I am passionate about building accessible, scalable and functional
        applications using Typescript, Nextjs and React.
      </p>
      <p className="flex flex-col gap-3 md:flex-row md:space-x-16">
        <span className="flex flex-row items-center space-x-4">
          <SiUdacity />
          <span>Frontend Web Development</span>
          <Link
            href="https://confirm.udacity.com/e/48a2396a-c38c-11ed-ae7e-3b117adf5f13"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLinkExternal className="styled" />
          </Link>
        </span>
        <span className="flex flex-row items-center space-x-4">
          <SiPluralsight /> <span>React Learning sponsored by Meta</span>
          <Link
            href="https://app.pluralsight.com/profile/isaac-awonugba-11#0"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLinkExternal className="styled" />
          </Link>
        </span>
      </p>
    </section>
  );
}

export default Hero;
