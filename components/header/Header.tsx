"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/img/logo.jpg";
import { BiMenu } from "react-icons/bi";

export default function Header() {
  const [collapse, setCollapse] = useState(false);
  const pathname = usePathname();

  return (
    <header className="flex flex-row justify-between mt-4 items-center z-0">
      <Link href="/">
        <Image
          className="logo rounded-full outline outline-accent"
          src={logo}
          width={40}
          height={40}
          alt="Logo"
          quality={100}
          priority
        />
      </Link>
      <nav className="z-0">
        <section className="mobile-menu flex lg:hidden">
          <div
            className="space-y-1.5 absolute right-0 top-0 py-8 px-6"
            onClick={() => {
              setCollapse(true);
            }}
          >
            <span className="block h-0.5 w-6 bg-accent"></span>
            <span className="block h-0.5 w-6 bg-accent"></span>
            <span className="block h-0.5 w-6 bg-accent"></span>
          </div>
          <div
            className={`z-40 py-4 px-8 right-0 top-0 absolute h-screen bg-accent ${
              collapse ? null : "collapse"
            }`}
          >
            <div
              className="absolute h-1.5 w-6 right-0 top-0 py-0 px-8"
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
            <ul className="space-y-4 mt-12">
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

        <ul className="hidden gap-8 lg:flex">
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
      </nav>
    </header>
  );
}
