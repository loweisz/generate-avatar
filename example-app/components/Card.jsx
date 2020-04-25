import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./card.module.css";
import { generateFromString } from "generate-avatar";
import { v4 } from "uuid";

function Card() {
  const router = useRouter();
  const [usedString, setUsedString] = useState(
    router.query.str || "generateavatar"
  );

  useEffect(() => {
    if (usedString === "generateavatar" && router.query.str) {
      setUsedString(router.query.str);
    }
  }, [router.query.str]);

  useEffect(() => {
    if (usedString) {
      router.push(`${router.pathname}?str=${usedString}`);
    } else {
      router.push(`${router.pathname}`);
    }
  }, [usedString]);

  const renderNewImage = () => {
    setUsedString(v4());
  };

  const inputChange = (e) => {
    setUsedString(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <span className={styles.title}>Generate Avatar</span>
        <span className={styles.subTitle}>
          Generate every avatar with any string, which is 100% reproducable and
          fingerprinted.
        </span>
        <button onClick={renderNewImage} className={styles.newButton}>
          Generate a random input (uuid)
        </button>
        <span className={styles.subTitle}>Or type in your own:</span>
        <input
          className={styles.valueInput}
          value={usedString}
          onChange={inputChange}
        />
      </div>
      <div className={styles.section}>
        <h2>Download image below</h2>
        <div className={styles.card}>
          {usedString && (
            <img
              src={`data:image/svg+xml;utf8,${generateFromString(usedString)}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
