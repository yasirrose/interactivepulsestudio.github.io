import React from "react";
import ProfileDropdown from "./ProfileDropdown";
import styles from "./header.module.scss"; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerTop} d-flex justify-content-end items-center`}>
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Header;
