import React from "react";
import styles from "./HamburgerMenu.module.scss";

import Hamburger from "./Humburger";
import Menu from "./Menu";


class HamburgerMenu extends React.Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    console.log("Abc");
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <>
        <Hamburger
          onClick={this.handleClick}
          className={
            this.state.isOpen
              ? `${styles.hamburger} ${styles.hamburgeractive}`
              : styles.hamburger
          }
        />
        <Menu
          className={
            this.state.isOpen
              ? `${styles.navigation} ${styles.navigationactive}`
              : styles.navigation
          }
        />
      </>
    );
  }
}

export default HamburgerMenu;
