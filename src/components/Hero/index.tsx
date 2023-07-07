import Link from "next/link";
import style from "./style.module.scss";

export default function Hero() {
  return (
    <div className={style.hero}>
      <h1>
        <span>Hello World !</span> I&#39;m Yosua Indra
      </h1>
      <p>
        A Front-End Developer who builds bridges with impactful user interfaces
        for a more connected world.
      </p>
      <div className={style["btn-wrapper"]}>
        <Link className={style["btn-default"]} href="/projects">
          See My Projects
        </Link>
      </div>
    </div>
  );
}
