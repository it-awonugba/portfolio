"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";
import logo from "../../assets/img/logo.jpg";
import { BiMenu } from "react-icons/bi";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const toggleHamburger = () => {
    setVisible(!visible);
  };

  return (
    <header>
      <Link href="/">
        <Image
          className="logo"
          src={logo}
          width={40}
          height={40}
          alt="Logo"
          quality={100}
          priority
        />
      </Link>
      <nav>
        <div className="hamburger" onClick={toggleHamburger}>
          <BiMenu />
        </div>
        <ul className={`menu ${visible ? "menu-show" : "menu-hide"}`}>
          <li className={`${pathname === "/" ? "active" : ""}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${pathname === "/projects" ? "active" : ""}`}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={`${pathname === "/contact" ? "active" : ""}`}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
