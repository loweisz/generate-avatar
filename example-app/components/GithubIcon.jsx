import React from "react";
import styles from "./githubIcon.module.css";
import octocat from "./octocat.svg";

function GithubIcon(props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/loweisz/generate-avatar"
      className={styles.icon}
    >
      <img src={octocat} />
    </a>
  );
}

export default GithubIcon;
