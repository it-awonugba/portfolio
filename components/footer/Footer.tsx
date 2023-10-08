import Link from "next/link";
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiSolidEnvelope,
} from "react-icons/bi";
export default function Footer() {
  return (
    <footer className="flex flex-col text-white space-y-6 py-24 border-t border-t-zinc-100">
      <h2 className="text-3xl font-semibold">Isaac Awonugba</h2>
      <p>
        A Frontend Developer looking to turn your design into pixel perfect
        implementation.
      </p>
      <ul className="flex flex-row">
        <li className="w-60">
          <Link
            href="https://github.com/it-awonugba"
            className="flex flex-row items-center space-x-4"
          >
            <BiLogoGithub />
            <span className="underline underline-offset-4">Github</span>
          </Link>
        </li>
        <li className={`w-60`}>
          <Link
            href="https://linkedin.com/in/isaacawonugba"
            className="flex flex-row items-center space-x-4"
          >
            <BiLogoLinkedinSquare />
            <span className="underline underline-offset-4">LinkendIn</span>
          </Link>
        </li>
        <li className="w-60">
          <Link
            href="mailto:it.awonugba@gmail.com?subject=Mail from my Porfolio"
            className="flex flex-row items-center space-x-4"
          >
            <BiSolidEnvelope />
            <span className="underline underline-offset-4">Email</span>
          </Link>
        </li>
      </ul>
      <p className="text-gray pt-12">
        All rights reserved &copy; 2023. Isaac Awonugba
      </p>
    </footer>
  );
}
