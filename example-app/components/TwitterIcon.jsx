import React from "react";
import styles from "./githubIcon.module.css";
import twitter from "./twitter.svg";

function TwitterIcon(props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/loweisz"
      className={`${styles.icon} ${styles.twitter}`}
    >
      <img src={twitter} />
    </a>
  );
}

export default TwitterIcon;
