import Link from "next/link";
import logo from "@/assets/logo.png";
import MainHeaderBackground from "@/components/mainHeader/mainHeaderBackground";

import styles from "./mainHeader.module.css";
import Image from "next/image";
import NavLink from "./navLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image priority src={logo} alt="A plate with food on it" />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals" text="Explore Meals" />
            </li>
            <li>
              <NavLink href="/community" text="Join Community" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default MainHeader;
