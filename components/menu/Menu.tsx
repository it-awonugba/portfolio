import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Menu() {
  const [collapse, setCollapse] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="z-0">
      <section className="mobile-menu flex lg:hidden">
        <div
          className="align-middle"
          onClick={() => {
            setCollapse(true);
          }}
        >
          <span className="block h-0.5 w-6 bg-accent"></span>
          <span className="block h-0.5 my-1.5 w-6 bg-accent"></span>
          <span className="block h-0.5 w-6 bg-accent"></span>
        </div>
        <div
          className={`z-40 py-4 px-8 right-0 top-0 absolute h-screen bg-accent ${
            collapse ? null : "collapse"
          }`}
        >
          <div
            className="absolute h-1.5 w-6 right-0 top-0 py-8 px-12"
            onClick={() => {
              setCollapse(false);
            }}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="space-y-4 mt-12 w-40">
            <li className="rounded-md hover:bg-accent p-0">
              <Link href="/">Home</Link>
            </li>
            <li className="rounded-md hover:bg-accent p-0">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="rounded-md hover:bg-accent p-0">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </section>

      <ul className="hidden gap-0 lg:flex">
        <li
          className={`rounded-md  p-0 hover:bg-accent ${
            pathname === "/" ? "bg-accent" : null
          }`}
        >
          <Link className="block py-3.5 px-8" href="/">
            Home
          </Link>
        </li>
        <li
          className={`rounded-md p-0 hover:bg-accent ${
            pathname === "/projects" ? "bg-accent" : null
          }`}
        >
          <Link className="block py-3.5 px-8" href="/projects">
            Projects
          </Link>
        </li>
        <li
          className={`rounded-md p-0 hover:bg-accent ${
            pathname === "/contact" ? "bg-accent" : null
          }`}
        >
          <Link className="block py-3.5 px-8" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
