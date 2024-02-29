"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ href, text }) => {
  const pathname = usePathname();

  return (
    <Link
      className={
        pathname.startsWith(href)
          ? `${styles.active} ${styles.link}`
          : styles.link
      }
      href={href}
    >
      {text}
    </Link>
  );
};
export default NavLink;
