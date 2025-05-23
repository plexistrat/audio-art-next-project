import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/logo-transparent.png"
          alt="logo"
          width={350}
          height={170}
          priority
        />
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#collection">Collection</a>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
