import React from "react";
import styles from "./HamburgerMenu.module.scss";

const Menu = ({ className }) => (
  <div className={className}>
    <ul className={styles.navigation__list}>
      <li className={styles.navigation__item}>
        <a href="#www.facebook.com">Home</a>{" "}
      </li>
      <li className={styles.navigation__item}>
        <a href="#www.facebook.com">Projects</a>
      </li>
      <li className={styles.navigation__item}>
        <a href="#www.facebook.com">Concerns</a>
      </li>
      <li className={styles.navigation__item}>
        <a href="#www.facebook.com">Gallery</a>
      </li>
      <li className={styles.navigation__item}>
        <a href="#www.facebook.com">Contact</a>
      </li>
    </ul>
  </div>
);

export default Menu;
