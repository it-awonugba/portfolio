"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/img/logo.jpg";
import Menu from "../menu/Menu";

export default function Header() {
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
      <Menu />
    </header>
  );
}
