import { NextPage } from "next";
import { Fragment } from "react";
import Link from "next/link";
import styles from "./navBar.module.css";

const NavBarComp: NextPage = () => {
  return (
    <nav className={styles.container}>
      <p className={styles.title}>My website</p>
      <ul className={styles.navItemsList}>
        <li>
          <Link href="https://google.com">Just a link to Google</Link>
        </li>
        <li>
          <Link href="https://twitter.com">Link to Twitter</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarComp;
