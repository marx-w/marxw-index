import Image from "next/image";

import styles from "../styles/home.module.css";
import logo from "/public/logo/230813_Logo-Dark.png";
import Link from "next/link.js";

const options = [
  {
    name: "About Me",
    href: "/about",
  },
  {
    name: "",
    href: "",
  },
  {
    name: "",
    href: "",
  },
  {
    name: "",
    href: "",
  },
  {
    name: "",
    href: "",
  },
];

const icons = [
  {
    href: "",
    icon: "",
  },
  {
    href: "",
    icon: "",
  },
  {
    href: "",
    icon: "",
  },
];

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <div className={styles.brand}>
          <Image
            className={styles.brand__logo}
            src={logo}
            alt="Marx Wang's Logo."
          />
          <h1 className={styles.brand__title}>Marx Wang</h1>
        </div>
        <p className={styles.intro__text}>
          Software engineer who try to make the world better.
        </p>
      </div>
      <div className={styles.options}>
        {options.map((option) => {
          <Link href={option.href}>{option.name}</Link>;
        })}
        <div className={styles.icon__container}>
          {icons.map((icon) => {
            <Link href={icon.href}>
              <i className={icon.class}></i>
            </Link>;
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
