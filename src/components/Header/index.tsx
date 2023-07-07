"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";
import logo from "@/assets/img/logo.png";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className={style.header}>
      <Link href="/">
        <div className={style.logo}>
          <Image src={logo} alt="logo" />
        </div>
      </Link>
      <div className={style.hamburger} onClick={() => setShowNav(!showNav)}>
        <AiOutlineMenu />
      </div>
      <nav
        className={showNav ? style.show : ""}
        onClick={() => setShowNav(false)}
      >
        <AiOutlineClose
          className={style.close}
          onClick={() => setShowNav(!showNav)}
        />
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="https://www.linkedin.com/in/yosua-indra" target="_blank">
          Linkedin <BiLinkExternal />
        </Link>
        <Link href="https://github.com/yosuaindra" target="_blank">
          Github <BiLinkExternal />
        </Link>
      </nav>
    </header>
  );
}
